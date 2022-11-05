import React from "react";
import { useDropzone } from "react-dropzone";
import MilestoneSelect from "./MilestoneSelect";
import { FaFileUpload } from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl"
import JobDescEditor from "./JobDescEditor";

type Props = {
  uploadStage: {
    file1: string,
    file2: string,
  }
  setUploadStage: React.Dispatch<React.SetStateAction<{file1: string, file2: string}>> 
}

const MilestoneRight = ({uploadStage, setUploadStage}: Props) => {
  const {getRootProps, getInputProps} = useDropzone();
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full"><MilestoneSelect /></div>
        <div className="w-full"><MilestoneSelect /></div>
        <div className="w-full">
          <div {...getRootProps({
            className:"flex flex-col justify-center items-center space-y-2 h-32 border border-dashed rounded-[5px] bg-[#F8F9FB] hover:cursor-pointer"
          })}>
            <input {...getInputProps()} />
            <span className="text-orange text-3xl"><FaFileUpload /></span>
            <p className="text-[#19191C] font-[400] text-xs md:text-base">Drop your file(s) here or browse </p>
            <p className="text-[#19191C] font-[400] text-center md:text-left text-xs md:text-base">PNG, SVG, JPG, GIF, or PDF Ma. file size 800*400px</p>
          </div>
        </div>
        <div className="w-full">
          <div {...getRootProps({
            className:"flex flex-col justify-center items-center space-y-2 h-32 border border-dashed rounded-[5px] bg-[#F8F9FB] hover:cursor-pointer"
          })}>
            <input {...getInputProps()} />
            <span className="text-orange text-3xl"><SlCloudUpload/></span>
            <p className="text-[#19191C] font-[400] text-xs md:text-base">Upload to Github</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <JobDescEditor />
      </div>
    </div>
  )
};

export default MilestoneRight;