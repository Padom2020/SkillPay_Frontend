//SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./escrow.sol";

contract Skillpay is Ownable {

    uint private userIdCount;
    uint private taskIdCount;

    enum UserType{Provider,Worker}
    enum TaskStages{FREE,TAKEN,DISPUTED,SETTLED,COMPLETED}

    struct User{
        string name;
        uint userId;
        uint numTaskProvided;
        uint numberOfTaskTaken;
        uint taskCompleted;
        uint rating;
        UserType accountType;
    }

    struct EscrowData{
        address creator;
        address worker;
        Escrow escrowContract;
        uint createdAt;
    }

    struct Task{
        IERC20 token;
        address creator;
        address currentWorker;
        string title;
        string description;
        uint taskId;
        uint duration;
        uint taskAmount;
        uint paymentPlan;
        uint milestonesCompleted;
        uint createdAt;
        TaskStages stage;
    }

    User[] private users;
    Task[] private tasks;

    mapping(address => User) public profile;
    mapping(address => Task[]) public userTasksTaken;
    mapping(address => Task[]) public userTasksProvided;
    mapping(uint => Task) public getTask;

    mapping(address => mapping(address => EscrowData)) public creatorAndClientToEscrow;

    event NewAccountCreated(string indexed _name, uint indexed _id, bool indexed _type);
    event AppealRaised(address _appealer, string _description);
    event TaskDone(uint indexed taskId, address indexed creator, address indexed worker);
    event WorkerSelected(uint indexed taskId, address indexed creator, address indexed worker);


    function createAccount(string memory _name, bool _provider) external {
        require(bytes(profile[msg.sender].name).length  == 0, "Account exists");
        UserType _type = _provider ? UserType.Provider : UserType.Worker;

        User memory user = User({
            userId: userIdCount,
            name: _name,
            accountType: _type,
            numTaskProvided: 0,
            numberOfTaskTaken: 0,
            taskCompleted: 0,
            rating: 0
        });


        users.push(user);
        profile[msg.sender] = user;

        emit NewAccountCreated(_name, userIdCount, _provider);
        userIdCount++;

    }

    function createTask(
        string memory _title,
        string memory _description,
        IERC20 _token,
        uint _amount,
        uint _duration,
        uint _paymentPlan
        ) external returns(bool)
        {
            require(bytes(profile[msg.sender].name).length  != 0, "Not registered");
            require(profile[msg.sender].accountType == UserType.Provider, "Can't create gig");
            require(_amount > 0,"Be serious");

            Task memory _task = Task({
                taskId: taskIdCount,
                title: _title,
                description: _description,
                duration:  _duration,
                taskAmount: _amount,
                paymentPlan: _paymentPlan,
                createdAt: block.timestamp,
                creator: msg.sender,
                milestonesCompleted: 0,
                stage: TaskStages.FREE,
                currentWorker: address(0),
                token: IERC20(_token)
            });

            tasks.push(_task);
            userTasksProvided[msg.sender].push(_task);
            getTask[taskIdCount] = _task;


            taskIdCount++;

            return true;

        }

    function selectWorker(uint _taskId, address _workerAddress) external payable {

        Task storage _task = getTask[_taskId];

        require(bytes(profile[msg.sender].name).length  != 0, "Not registered");
        require(bytes(profile[_workerAddress].name).length  != 0, "Worker not registered");
        require((_task.creator != address(0) && _task.stage == TaskStages.FREE),"Not FREE");


        _task.stage = TaskStages.TAKEN;
        _task.currentWorker = _workerAddress;

        /**Fee */
        uint _fee = (_task.taskAmount * 100) / 10000;
        uint _newAmount = _task.taskAmount - _fee;

        /** Take Erc20 fees*/
        if(address(_task.token) != address(0)){
            _task.token.transfer(address(this),_fee);
        }

        /**Compute salt for escrow */
        uint _time = _task.createdAt;
        bytes memory _salt = abi.encode(msg.sender,_time);

        /**Create escrow */
        Escrow _newEscrow = new Escrow{salt: bytes32(_salt)}();
        
        _newEscrow.deposit{value: _newAmount}(msg.sender, _workerAddress, _task.token, _newAmount, _task.paymentPlan);


        EscrowData memory _escrowDetail = EscrowData(
            {
                creator: _task.creator,
                worker: _workerAddress,
                createdAt: block.timestamp,
                escrowContract: _newEscrow
            });
            creatorAndClientToEscrow[_task.creator][_workerAddress] = _escrowDetail;
            userTasksTaken[_workerAddress].push(_task);
        }

    function onMilestoneAchieved(uint _taskId) external {
        Task memory _task = getTask[_taskId];
        require(_task.currentWorker == msg.sender,"Not worker");

        emit TaskDone(_taskId,_task.creator,_task.currentWorker);

    }

    function ApproveTaskMilestoneAndPay(uint _taskId) payable external {
        Task storage _task = getTask[_taskId];
        require(_task.creator == msg.sender,"Not creator");

        EscrowData memory escrowinfo = creatorAndClientToEscrow[_task.creator][_task.currentWorker];
        Escrow(escrowinfo.escrowContract).onMilestoneDone();

        _task.milestonesCompleted++;

        if(_task.milestonesCompleted == _task.paymentPlan){
            _task.stage = TaskStages.COMPLETED;
            profile[_task.creator].taskCompleted++;
            profile[_task.currentWorker].taskCompleted++;
        }

    }

    function AppealByCreatorOrWorker(uint _taskId, string memory _description) external{
        Task storage _task = getTask[_taskId];
        require(msg.sender == _task.currentWorker || msg.sender == _task.creator, "Can't make appeal");

        EscrowData memory escrowinfo = creatorAndClientToEscrow[_task.creator][_task.currentWorker];
        Escrow(escrowinfo.escrowContract).makeAppeal(msg.sender);

        _task.stage = TaskStages.DISPUTED;
 
        emit AppealRaised(msg.sender,_description);
    }


    function changeWorker(uint _taskId, address _newWorker) external{
        Task storage _task = getTask[_taskId];
        require(_task.stage == TaskStages.DISPUTED,"Can't change without appeal");
        // require((block.timestamp - _task.duration) > 86400);

        //Old worker escrow data
        EscrowData memory escrowinfo = creatorAndClientToEscrow[_task.creator][_task.currentWorker];
        Escrow(escrowinfo.escrowContract).changeWorker(_newWorker);

        //Update data for new worker
        EscrowData memory newData = EscrowData({
            creator: _task.creator,
            worker: _newWorker,
            createdAt: escrowinfo.createdAt,
            escrowContract: escrowinfo.escrowContract
        });

        creatorAndClientToEscrow[_task.creator][_newWorker] = newData;
        _task.currentWorker = _newWorker;
    }


    /**
    ADMIN
     */

    function reverseToCreator(uint _taskId) external onlyOwner{
        Task storage _task = getTask[_taskId];

        EscrowData memory escrowinfo = creatorAndClientToEscrow[_task.creator][_task.currentWorker];
        Escrow(escrowinfo.escrowContract).resolveProviderAppeal();

        _task.stage = TaskStages.SETTLED;
    }

    function releaseFundsToWorker(uint _taskId) external onlyOwner{
        Task storage _task = getTask[_taskId];

        EscrowData memory escrowinfo = creatorAndClientToEscrow[_task.creator][_task.currentWorker];
        Escrow(escrowinfo.escrowContract).resolveWorkerMilestoneAppeal();

        _task.stage = TaskStages.SETTLED;

        
    }

    function retrieveFunds(address _token, uint _amount, address _to)external payable onlyOwner{

        if(_token == address(0)){
            (bool sent,) = payable(_to).call{value: _amount}("");
            require(sent);
        }
        else{
            IERC20(_token).transfer(_to, _amount);
        }

    }

    /**
    GETTERS
    */

    function getTasksByUser() public view returns(Task[] memory){
        if(profile[msg.sender].accountType == UserType.Provider){
            return userTasksProvided[msg.sender];
        }
        else{
            return userTasksTaken[msg.sender];
        }
    }

    function getTaskCreator(uint _taskId) public view returns(address){
        return getTask[_taskId].creator;
    }

    function getCurrentTaskWorker(uint _taskId) public view returns(address){
        return getTask[_taskId].currentWorker;
    }
    
    function getAllTasks() public view returns(Task[] memory){
        return tasks;
    }

    /**
    Precomputes escrow address for a task
    this can be used to grant ERC20 approval 
    before calling the selectWorker function
     */

    function createEscrowAddressForTask(uint _taskId) public view returns(Escrow) {
        uint _time = getTask[_taskId].createdAt;
        bytes memory _salt = abi.encode(msg.sender,_time);

        address predictedAddress = address(uint160(uint(keccak256(abi.encodePacked(
            bytes1(0xff),
            address(this),
            bytes32(_salt),
            keccak256(abi.encodePacked(
                type(Escrow).creationCode
            ))
        )))));
        return Escrow(payable(predictedAddress));
    }

    receive() external payable {}

}