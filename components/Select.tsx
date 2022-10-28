import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";

type AppProps = {
  children?: React.ReactNode,
  value?: string,
  onChange?: (evt: React.MouseEvent) => void,
  placeHolder?: string,
  icon?: React.ReactNode
}
const Select = ({children, value, placeHolder, icon, onChange}: AppProps) => {
  const [showOpt, setOpt] = useState(false);
  const handleShowOpt = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    setOpt(prevSt => !prevSt)
  };
  const handleClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    onChange(evt);
    handleShowOpt(evt);
  };
 
  return (
    <div className="h-8">
      <div className={classNames("w-full relative border border-[rgba(2, 6, 72, 0.1)] rounded-[8px]", {"border-orange rounded-t-[8px]": showOpt})}>
        <p className={classNames("hover:cursor-pointer h-full pl-12 pt-1 pb-[6px] font-[400] text-[rgba(8, 8, 18, 0.7)] bg-[#F8F9FB] rounded-[8px]", {
          "rounded-t-[8px]": showOpt
        })} onClick={handleShowOpt}>{value?value:placeHolder}</p>
        <span className={classNames("absolute right-1 rotate-90 top-1 hover:cursor-pointer text-xl", {
          "text-orange": showOpt
        })} onClick={handleShowOpt}><MdPlayArrow /></span>
        <span className="absolute left-3  top-[7px] hover:cursor-pointer text-xl">{icon}</span>
        {showOpt && <div className="flex flex-col pb-3 mt-1 z-50 bg-[#F8F9FB] overflow-auto rounded-b-[8px]" onClick={handleClick}>
            {children}
          </div>
        }
      </div>
    </div>
  )
}

export default Select;