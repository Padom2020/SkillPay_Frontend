import React, {useState} from "react";
import { MdAccessTime, MdPlayArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbHandFinger } from "react-icons/tb";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import Layout from "../../components/freelancer/Layout";
import Search from "../../components/Search";
import { BsBriefcase } from "react-icons/bs";
import Select from "../../components/Select";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";


const Products = () => {
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
  const jobs = [
    {
      product: "Front End",
      fileSize: 67,
      owner: {
        name: "John Doe",
        role: "Developer"
      },
      dateUploaded: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      lastUpdated: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      amount: 194,
      projectStatus: "Sold"
    },
    {
      product: "Front End",
      fileSize: 67,
      owner: {
        name: "John Doe",
        role: "Developer"
      },
      dateUploaded: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      lastUpdated: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      amount: 194,
      projectStatus: "Sold"
    },
    {
      product: "Front End",
      fileSize: 67,
      owner: {
        name: "John Doe",
        role: "Developer"
      },
      dateUploaded: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      lastUpdated: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      amount: 194,
      projectStatus: "Sold"
    },
    {
      product: "Front End",
      fileSize: 67,
      owner: {
        name: "John Doe",
        role: "Developer"
      },
      dateUploaded: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      lastUpdated: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      amount: 194,
      projectStatus: "Sold"
    },
    {
      product: "Front End",
      fileSize: 67,
      owner: {
        name: "John Doe",
        role: "Developer"
      },
      dateUploaded: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      lastUpdated: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      amount: 194,
      projectStatus: "Sold"
    },
    {
      product: "Front End",
      fileSize: 67,
      owner: {
        name: "John Doe",
        role: "Developer"
      },
      dateUploaded: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      lastUpdated: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      amount: 194,
      projectStatus: "Sold"
    },
    {
      product: "Front End",
      fileSize: 67,
      owner: {
        name: "John Doe",
        role: "Developer"
      },
      dateUploaded: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      lastUpdated: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      amount: 194,
      projectStatus: "Sold"
    },
  ]

  return (
    <Layout title="SkillPay | Freelancer Earnings">
      <div className="mt-6 px-2 md:px-0 md:mr-14">
        <div className="flex flex-col md:flex-row items-center md:items-left justify-center space-y-2 md:space-y-0 md:justify-between">
          <h1 className="text-sm md:text-base lg:text-[22px] text-[#080812] font-[500]">Products <sub className="text-[#948D8D] font-[400] text-[10px] lg:text-[12px]">110</sub></h1>
          <div className="flex justify-between items-center h-10 border rounded-[5px] px-2 bg-[#F8F9FB]">
            <div className="flex items-center space-x-2 h-full">
              <FaRegCalendarAlt />
              <span className="text-lg">Time period: Today</span>
            </div>
            <div><MdPlayArrow className="rotate-90" /></div>
          </div>
        </div>
        {/* BADGES */}
        <div className="grid grid-col-1 md:grid-cols-3 gap-3 w-[95%] mx-auto md:mx-0 md:w-[85%] my-9">
          {/* ONE */}
          <div className="text-center border rounded-md py-6">
            <p className="text-gray2 text-xs md:text-sm lg:text-base font-[500]">Toatl Projects</p>
            <p className="text-sm md:text-base lg:text-[20px] text-gray4 font-[700]">867</p>
            <div className="flex items-center justify-center space-x-1 text-[#59AA58]"><HiOutlineArrowTrendingUp className="text-xl" /><span className="">1.5%</span></div>
          </div>
          {/* TWO */}
          <div className="text-center border rounded-md py-6">
            <p className="text-gray2 text-xs md:text-sm lg:text-base font-[500]">Toatl Projects</p>
            <p className="text-sm md:text-base lg:text-[20px] text-gray4 font-[700]">867</p>
            <div className="flex items-center justify-center space-x-1 text-[#59AA58]"><HiOutlineArrowTrendingUp className="text-xl" /><span className="">1.5%</span></div>
          </div>
          {/* THREE */}
          <div className="text-center border rounded-md py-6">
            <p className="text-gray2 text-xs md:text-sm lg:text-base font-[500]">Active</p>
            <p className="text-sm md:text-base lg:text-[20px] text-gray4 font-[700]">50</p>
            <div className="flex items-center justify-center space-x-1 text-[#59AA58]"><HiOutlineArrowTrendingUp className="text-xl" /><span className="">1.5%</span></div>
          </div>
        </div>
        <div className="w-[100%] md:w-[75%] lg:w-[55%] mt-4 mb-2">
          <Search placeholder="Search  project" />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
          <div className="w-[100%] md:w-[60%] lg:w-[20%]">
            <Select icon={<BsBriefcase />} value={searchFilters.filter1} onChange={onChange("filter1")} placeHolder="In Progress" >
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
        <div className="border rounded-lg mt-4 overflow-auto">
          <table className="text-left w-[150%] S">
            <thead>
              <tr className="border-b-[1px]">
                <th className="pl-3"><input type="checkbox" name="" id="" className="accent-orange" /></th>
                <th className="py-3">
                  <div className="flex space-x-2">
                    <p>Products</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th className="py-3">
                  <div className="flex space-x-2">
                    <p>File Size</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Date Uploaded</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Last Updated</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Amount</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Project Status</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Owner</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Action</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map((job, index) => <tr className="text-left text-base" key={++index}>
                <td className="py-2 px-3"><input type="checkbox" className="accent-orange" /></td>
                <td>{job.product}</td>
                <td>{job.fileSize}MB</td>
                <td className="text-gray4 font-[700]">
                  <div className="flex flex-col">
                    <p>{job.dateUploaded.date}</p>
                    <p>{job.dateUploaded.time}</p>
                  </div>
                </td>
                <td className="text-gray4 font-[700]">
                  <div className="flex flex-col">
                    <p>{job.lastUpdated.date}</p>
                    <p>{job.lastUpdated.time}</p>
                  </div>
                </td>
                <td>{job.amount}</td>
                <td><span className="bg-gray5 p-2 text-[#035CFF]">{job.projectStatus}</span></td>
                <td className="py-3">
                  <div className="flex space-x-1">
                    <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                    <div className="">
                      <p className="font-bold text-[#080812]">{job.owner.name}</p>
                      <p className="text-[#948D8D]">{job.owner.role}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex space-x-2 mr-8">
                    <div className="flex justify-center items-center space-x-1 border rounded-lg mr-1 font-[500] px-4 cursor-pointer">
                      <span className=""><FiTrash2 /></span>
                      <span>Delete</span>
                    </div>
                    <div className="flex justify-center items-center space-x-1 border rounded-lg mr-1 font-[500] px-4 cursor-pointer">
                      <span className=""><AiOutlineEdit /></span>
                      <span>Edit</span>
                    </div>
                  </div>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Products;