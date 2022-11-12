import React, {useState} from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime, MdPlayArrow } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import Layout from "../../components/employer/Layout";
import Search from "../../components/Search";
import Select from "../../components/Select";

const Projects = () => {
  const [searchFilters, setSearchFilters] = useState({
    textSearch: "",
    filter1: "",
    filter2: ""
  })
  const onChange = (filter: string) => (evt: React.MouseEvent) => {
    const target = evt.target as Element;
    const targetValue = target.getAttribute("value");
    setSearchFilters({
      ...searchFilters,
      [filter]: targetValue,
    })
  };
  return (
    <Layout title="SkillPay | Employer Projects">
      <div className="mt-6 px-2 md:px-0 md:mr-14">
        {/* Page title header */}
        <div className="flex flex-col md:flex-row items-center md:items-left justify-center space-y-2 md:space-y-0 md:justify-between">
          <h1 className="text-sm md:text-base lg:text-[22px] text-[#080812] font-[500]">Projects <sub className="text-[#948D8D] font-[400] text-[10px] lg:text-[12px]">110</sub></h1>
          <div className="flex justify-between items-center h-10 border rounded-[5px] px-2 bg-[#F8F9FB]">
            <div className="flex items-center space-x-2 h-full">
              <FaRegCalendarAlt />
              <span className="text-lg">Time period: Today</span>
            </div>
            <div><MdPlayArrow className="rotate-90" /></div>
          </div>
        </div>
        {/* Page Search */}
        <div className="w-[100%] md:w-[75%] mt-4 mb-2">
          <Search placeholder="Search  projects" />
        </div>
        {/* Page Select */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-8">
          <div className="w-[100%] md:w-[60%] lg:w-[20%]">
            <Select icon={<BsBriefcase />} value={searchFilters.filter1} onChange={onChange("filter1")} placeHolder="All" >
              <option value="Unpaid" className="cursor-pointer hover:bg-orange pl-3 hover:text-white">Unpaid</option>
              <option value="Awaiting" className="cursor-pointer hover:bg-orange pl-3 hover:text-white">Awaiting</option>
              <option value="Pending" className="cursor-pointer hover:bg-orange pl-3 hover:text-white">Paending</option>
            </Select>
          </div>
          <div className="w-[100%] md:w-[60%] lg:w-[20%]">
            <Select icon={<MdAccessTime />} value={searchFilters.filter2} onChange={onChange("filter2")} placeHolder="Time Period">
              <option value="Unpaid" className="cursor-pointer hover:bg-orange pl-3 hover:text-white z-100">Unpaid</option>
              <option value="Awaiting" className="cursor-pointer hover:bg-orange pl-3 hover:text-white">Awaiting</option>
              <option value="Pending" className="cursor-pointer hover:bg-orange pl-3 hover:text-white">Paending</option>
            </Select>
          </div>
        </div>
        {/* Milestones */}
        <div className="border px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Milestone One */}
            <div className="bg-[#F8F9FB] py-4 px-5">
              <h2 className="flex justify-between font-[500] text-gray4"><span>Started (10)</span><span><BiBookAdd /></span></h2>
              <div className="bg-white p-3 my-3">
                <h3 className="text-[18px] font-[500]">Create 4 landing pages template</h3>
                <div className="my-2">
                  <p className="font-[400]">4 attachments</p>
                  <p className="flex space-x-2 items-center"><span><TbCalendarTime /></span><span>Description</span></p>
                </div>
                <div className="flex space-x-1">
                  <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                  <div className="">
                    <p className="font-bold text-[#080812]">John Doe</p>
                    <p className="text-[#948D8D]">Developer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 my-3">
                <h3 className="text-[18px] font-[500]">Create 4 landing pages template</h3>
                <div className="my-2">
                  <p className="font-[400]">4 attachments</p>
                  <p className="flex space-x-2 items-center"><span><TbCalendarTime /></span><span>Description</span></p>
                </div>
                <div className="flex space-x-1">
                  <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                  <div className="">
                    <p className="font-bold text-[#080812]">John Doe</p>
                    <p className="text-[#948D8D]">Developer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Milestone Two */}
            <div className="bg-[#F8F9FB] py-4 px-5">
              <h2 className="flex justify-between font-[500] text-gray4"><span>In Progress (10)</span><span><BiBookAdd /></span></h2>
              <div className="bg-white p-3 my-3">
                <h3 className="text-[18px] font-[500]">Create 4 landing pages template</h3>
                <div className="my-2">
                  <p className="font-[400]">4 attachments</p>
                  <p className="flex space-x-2 items-center"><span><TbCalendarTime /></span><span>Description</span></p>
                </div>
                <div className="flex space-x-1">
                  <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                  <div className="">
                    <p className="font-bold text-[#080812]">John Doe</p>
                    <p className="text-[#948D8D]">Developer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 my-3">
                <h3 className="text-[18px] font-[500]">Create 4 landing pages template</h3>
                <div className="my-2">
                  <p className="font-[400]">4 attachments</p>
                  <p className="flex space-x-2 items-center"><span><TbCalendarTime /></span><span>Description</span></p>
                </div>
                <div className="flex space-x-1">
                  <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                  <div className="">
                    <p className="font-bold text-[#080812]">John Doe</p>
                    <p className="text-[#948D8D]">Developer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Milesone Three */}
            <div className="bg-[#F8F9FB] py-4 px-5">
              <h2 className="flex justify-between font-[500] text-gray4"><span>Completed (10)</span><span><BiBookAdd /></span></h2>
              <div className="bg-white p-3 my-3">
                <h3 className="text-[18px] font-[500]">Create 4 landing pages template</h3>
                <div className="my-2">
                  <p className="font-[400]">4 attachments</p>
                  <p className="flex space-x-2 items-center"><span><TbCalendarTime /></span><span>Description</span></p>
                </div>
                <div className="flex space-x-1">
                  <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                  <div className="">
                    <p className="font-bold text-[#080812]">John Doe</p>
                    <p className="text-[#948D8D]">Developer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 my-3">
                <h3 className="text-[18px] font-[500]">Create 4 landing pages template</h3>
                <div className="my-2">
                  <p className="font-[400]">4 attachments</p>
                  <p className="flex space-x-2 items-center"><span><TbCalendarTime /></span><span>Description</span></p>
                </div>
                <div className="flex space-x-1">
                  <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                  <div className="">
                    <p className="font-bold text-[#080812]">John Doe</p>
                    <p className="text-[#948D8D]">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects