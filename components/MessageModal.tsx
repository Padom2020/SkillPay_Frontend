import { VscVerified } from "react-icons/vsc";
import { TbSend } from "react-icons/tb";
import React, { useEffect, useState} from "react";
import classNames from "classnames";
import MessageSuccess from "./MessageSuccess";

type Props = {
  closeModal?: React.Dispatch<React.SetStateAction<boolean>>,
}

const MessageModal = ({closeModal}: Props) => {
  const [isClosing, setClosing] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const handleSend = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    setSuccess(true);
  }
  useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        closeModal(false)
      }, 900)
    }
  }, [isClosing])
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-60">
      <div className={classNames("relative w-[70%] mx-auto bg-[#FFFFFF] pt-3 pb-5", {
        "animate-slideDown": !isClosing,
        "animate-slideUp": isClosing,
      })}>
        <div className="flex justify-between px-8 mb-3">
          <div className="flex space-x-3">
            <img src="/images/freelancer.svg" className="w-[15%]" />
            <div>
              <div className="flex items-center space-x-7">
                <span className="text-[#080812] font-[500] text-[24px]">John Doe</span>
                <span className="text-[#0CA789] text-[20px]"><VscVerified /></span>
              </div>
              <p className="text-[rgba(8, 8, 18, 0.7)] text-[16px] font-[400]">UI/UX Designer, Web Developer</p>
            </div>
          </div>
          <div className="text-3xl hover:cursor-pointer" onClick={() => setClosing(true)}>&times;</div>
        </div>
        <hr />
        <div className="flex flex-col space-y-2 px-8 mt-6">
          <label htmlFor="msg" className="font-[400] text-[rgba(8, 8, 18, 0.7)] text-[18px]">Message John </label>
          <textarea name="" id="msg" cols={30} rows={10} className="bg-[#F8F9FB] outline-none focus:border-2 focus:border-orange px-4 py-3 caret-orange rounded-md border border-[rgba(8, 8, 18, 0.1)] resize-none" />
        </div>
        <div className="flex justify-between my-5 px-8">
          <button className="" onClick={() => setClosing(true)}>Cancel</button>
          <div className="flex items-center space-x-2 rounded-md bg-orange text-white py-1 px-3 hover:cursor-pointer" onClick={handleSend}>
            <span><TbSend /></span>
            <span>Send Message</span>
          </div>
        </div>
        {
          isSuccess && <MessageSuccess setSuccess={setSuccess} setClosing={setClosing} />
        }
      </div>
    </div>
  )
};

export default MessageModal;