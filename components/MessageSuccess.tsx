import { SetStateAction } from "react";
import { BsCheckCircle } from "react-icons/bs";

type Props = {
  setSuccess?: React.Dispatch<SetStateAction<boolean>>,
  setClosing?: React.Dispatch<SetStateAction<boolean>>
}

const MessageSuccess = ({setSuccess, setClosing}: Props) => {
  const handleClose = (evt: React.MouseEvent) => {
    setSuccess(false);
    setClosing(true);
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-100 bg-white px-4 pb-9 rounded-lg">
      <div className="flex justify-end">
        <div className="text-3xl hover:cursor-pointer" onClick={handleClose}>&times;</div>
      </div>
      <div className="">
        <div className="flex justify-center"><span className="text-[#0CA789] text-2xl mb-4"><BsCheckCircle /></span></div>
        <h3 className="text-[#080812] text-[23px] font-[500] text-center mb-3">Message Sent</h3>
        <p className="px-8 text-[rgba(8, 8, 18, 0.7)] font-[400]">Your message has been sent to John Doe, he will relpy as soon as possible</p>
      </div>
    </div>
  )
};

export default MessageSuccess;