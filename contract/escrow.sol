//SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow is Ownable{


    enum State{
        ACTIVE,
        DISPUTED,
        SETTLED,
        COMPLETED
    }

    State current_state;

    IERC20 public token;
    address public worker;
    address public provider;
    uint public milestoneCount;
    uint public amountPerMilestone;


    function deposit(address _provider, address _worker, IERC20 _token, uint _amount,uint _milestones) payable onlyOwner external {
        token = IERC20(_token);
        worker = _worker;
        /**
        Native token(WETH/BNB) can be used in a case where _token is Address(0) */
        provider = _provider;
        milestoneCount = _milestones;
        
        if(address(_token) != address(0)){
            require(IERC20(_token).balanceOf(msg.sender) >= _amount, "Insufficient fund");
            amountPerMilestone = _amount / _milestones;
            
            IERC20(_token).transferFrom(msg.sender,address(this),_amount);
        }
        else{
            require(msg.value >= _amount,"Insufficient fund");
            amountPerMilestone = msg.value / _milestones;

            (bool sent,) = payable(address(this)).call{value: _amount}("");
            require(sent,"Failed to get Ether");
        }
        current_state = State.ACTIVE;

    }

    function onMilestoneDone() public payable onlyOwner {
        // require(msg.sender == provider, "Not authorized");
        require(!(milestoneCount <= 0),"No Milestone");

        if(address(token) != address(0)){
            IERC20(token).transfer(worker,amountPerMilestone);
        }
        else{
            (bool sent,) = payable(worker).call{value: amountPerMilestone}("");
            require(sent,"Couldn't send ether");
        }
        milestoneCount--;
        if(milestoneCount == 0){
            current_state = State.COMPLETED;
        }
    }

    function makeAppeal(address _appealer) external onlyOwner {
        require(_appealer == worker || _appealer == provider, "Can't make appeal");

        current_state = State.DISPUTED;
    }
    /**
    Function is called by admin after manually going through the appeal case
    - releases funds to worker for completed milestone
     */
    function resolveWorkerMilestoneAppeal() onlyOwner external{
        require(current_state == State.DISPUTED, "No Appeals raised");
        if(address(token) != address(0)){
            IERC20(token).transfer(worker,amountPerMilestone);
        }
        else{
            (bool sent,) = payable(worker).call{value: amountPerMilestone}("");
            require(sent,"Couldn't send ether");
        }

        current_state = State.SETTLED;
        milestoneCount--;

        
    }

    function resolveProviderAppeal() onlyOwner external{
        require(current_state == State.DISPUTED, "No Appeals raised");

        if(address(token) != address(0)){
            IERC20(token).transfer(provider,IERC20(token).balanceOf(address(this)));
        }
        else{
            (bool sent,) = payable(provider).call{value: address(this).balance}("");
            require(sent,"Couldn't send ether");
        }
        current_state = State.SETTLED;

        
    }

    function changeWorker(address _newWorker) onlyOwner external{
        worker = _newWorker;
    }
    receive() external payable {}

}