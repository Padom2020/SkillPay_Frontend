import React from "react"
import { MdPlayArrow } from "react-icons/md"

const MilestoneSelect = () => {
  return (
    <div className="flex justify-between items-center h-10 border rounded-[5px] px-2">
      <div className="flex items-center space-x-2 h-full">
        <input type="checkbox" name="" id=""  />
        <span className="text-lg">SVG</span>
      </div>
      <div><MdPlayArrow className="rotate-90" /></div>
    </div>
  )
}

export default MilestoneSelect