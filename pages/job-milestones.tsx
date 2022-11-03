import React, { useCallback, useRef, useState } from "react";
import { TbCalendarTime } from "react-icons/tb";
import { FaFileUpload } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import classNames from "classnames";
import { useDropzone } from "react-dropzone";

const JobMilestones = () => {
  const [uploadData, setUpload] = useState({
    name: "",
    size: 0,
  });
  const [uploadLevel, setUploadLevel] = useState(0);
  const [isFocused, setFocused] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null)
  const onDrop = useCallback((files: File[]) => {
    //const byte = files[0].size;
    setUpload({
      name: files[0].name,
      size: files[0].size*0.001
    })
    
    let width = 1;
    
    const progress = () => {
      if (width >= 100) {
        clearInterval(interId);
      } else {
        width++;
        barRef.current.style.width = `${width}%`;
        setUploadLevel(width);
      }
    }

    const interId = setInterval(progress, 10);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop});
  const onBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    evt.stopPropagation();
    setFocused(false);
  };
  const onFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    evt.stopPropagation();
    setFocused(true);
  }

  return (
    <div>
      <div className="bg-white">
        <div className="flex justify-end">
          <span className="text-xl hover:cursor-pointer pt-2 pr-6">&times;</span>
        </div>
        <div className="border border-gray3 p-6 mx-10 md:mx-20 mt-3">
          <div className="flex flex-col-reverse md:flex-row md:justify-between">
            <div className="my-5 md:my-0">
              <h1 className="text-[#080812] text-[26px] font-[500] text-center md:text-left">Job Milestones</h1>
              <p className="mt-1 text-[rgba(8, 8, 18, 0.7)] font-[400] text-center md:text-left">Need a professional logo with writing <br />underneath for our...</p>
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 bg-[#F8F9FB] px-2 py-1 rounded-[8px]">
                <span><TbCalendarTime /></span>
                <div className="text-[#000000] font-[400]">
                  <span>Due Date:</span>
                  <span>3 Jan 2022</span>
                </div>
              </div>
            </div>
          </div>
          {/* Progress status */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <div className="text-orange capitalize">started</div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center bg-orange text-white rounded-full w-7 h-7">
                <span>1</span>
              </div>
              <div className="w-[1px] md:w-44 h-24 md:h-[1px] border border-dashed border-orange"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-orange">In progress</span>
              <span>45% Complete</span>
            </div>
            <div className="flex items-center flex-col md:flex-row">
              <div className="flex items-center justify-center bg-orange text-white rounded-full w-7 h-7">
                <span>2</span>
              </div>
              <div className="w-[1px] md:w-44 h-24 md:h-[1px] border border-dashed border-orange"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray2 font-[400]">Completed</span>
              <span>100% Complete</span>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center bg-gray2 text-white rounded-full w-7 h-7">
                <span>3</span>
              </div>
              <div className="w-44 hidden md:first-letter:block border border-dashed border-orange"></div>
            </div>
          </div>
          <div className="my-6">
            <p className="font-[300] md:font-[400] text-sm md:text-[17px] text-[rgba(8, 8, 18, 0.7)] text-center md:text-left">Stage 1 amount due for withdrawal</p>
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              <div className={classNames("flex items-center h-10 border rounded-[5px] pr-2 pl-1", {
                "border-orange": isFocused
              })}>
                <input type="text" className="w-[95%] h-full pr-2 outline-none caret-orange" onBlur={onBlur} onFocus={onFocus} />
                <span>USD</span>
              </div>
              <div className="flex items-center space-x-3 bg-orange text-white px-8 py-2 md:p-2 rounded-[5px] hover:cursor-pointer">
                <span><BsBriefcase /></span>
                <span>Withdraw</span>
              </div>
            </div>
          </div>
          {/* Drag and Drop */}
          <div>
            <p className="font-[400] text-xs md:text-sm lg:text-base text-[rgba(8, 8, 18, 0.7)] mt-2">Upload prototype</p>
            <div {...getRootProps({
              className:"flex flex-col justify-center items-center space-y-2 h-32 border border-dashed rounded-[1px] bg-[#F8F9FB] hover:cursor-pointer"
            })}>
              <input {...getInputProps()} />
              <span className="text-orange text-3xl"><FaFileUpload /></span>
              <p className="text-[#19191C] font-[400] text-xs md:text-base">Drop your file(s) here or browse </p>
              <p className="text-[#19191C] font-[400] text-center md:text-left text-xs md:text-base">PNG, SVG, JPG, GIF, or PDF Ma. file size 800*400px</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-5 p-2 border rounded-[5px] my-7">
              <span className="text-orange text-3xl hidden md:block"><FaFileUpload /></span>
              <div className="w-[100%]">
                <p className="text-[#19191C] font-[400] text-center md:text-left">{uploadData.name}</p>
                <p className="font-[400] text-[rgba(8, 8, 18, 0.4)] text-center md:text-left">{uploadData.size}kb</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-5 items-center md:space-x-5">
                  <div className="bar border bg-slate-50 w-full rounded-2xl ">
                    <div className="progress h-[6px] rounded-2xl" ref={barRef}></div>
                  </div>
                  <div>{uploadLevel}%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 mb-4">
            <label htmlFor="desc">Describe prototype in detail</label>
            <textarea name="" id="desc" rows={6} className="border rounded-md caret-orange outline-none focus:border-orange p-3 resize-none" />
          </div>
          <div className="flex justify-end">
            <div><button className="text-white bg-orange py-1 px-10 rounded-md">Save</button></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default JobMilestones;