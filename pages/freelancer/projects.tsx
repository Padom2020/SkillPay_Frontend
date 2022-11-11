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
import ReactApexChart from "react-apexcharts";

const Projects = () => {
  const [searchFilters, setSearchFilters] = useState({
    textSearch: "",
    filter1: "",
    filter2: ""
  })
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: ["1 Oct", "2 Oct", "3 Oct", "4 Oct", "5 Oct", "6 Oct", "7 Oct", "8 Oct", "9 Oct", "10 Oct", "11 Oct", "12 Oct"]
      },
      fill: {
        type: "solid",
      },
      colors: ["#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726", "#F24726"],
      dataLabels: {
        enabled: false
      },
      
    },
    series: [{
      name: 'Earnings',
      data: [0, 30, 10, 35, 15, 40, 50, 65, 45, 65, 70, 0]
    }]
  });
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
      project: "Front End",
      client: {
        name: "John Doe",
        role: "Developer"
      },
      started: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      completed: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      projectBrief: "Download",
      projectStatus: "In Progress"
    },
    {
      project: "Front End",
      client: {
        name: "John Doe",
        role: "Developer"
      },
      started: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      completed: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      projectBrief: "Download",
      projectStatus: "In Progress"
    },
    {
      project: "Front End",
      client: {
        name: "John Doe",
        role: "Developer"
      },
      started: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      completed: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      projectBrief: "Download",
      projectStatus: "In Progress"
    },
    {
      project: "Front End",
      client: {
        name: "John Doe",
        role: "Developer"
      },
      started: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      completed: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      projectBrief: "Download",
      projectStatus: "In Progress"
    },
    {
      project: "Front End",
      client: {
        name: "John Doe",
        role: "Developer"
      },
      started: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      completed: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      projectBrief: "Download",
      projectStatus: "In Progress"
    },
    {
      project: "Front End",
      client: {
        name: "John Doe",
        role: "Developer"
      },
      started: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      completed: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      projectBrief: "Download",
      projectStatus: "In Progress"
    },
    {
      project: "Front End",
      client: {
        name: "John Doe",
        role: "Developer"
      },
      started: {
        date: "14 Feb. 2022",
        time: "04:00PM",
      },
      completed: {
        date: "14 Feb. 2022",
        time: "04:00PM"
      },
      projectBrief: "Download",
      projectStatus: "In Progress"
    },
  ]

  return (
    <Layout title="SkillPay | Freelancer Earnings">
      <div className="mt-6 px-2 md:px-0 md:mr-14">
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
        {/* CHART */}
        <div className="border rounded-md p-2">
          <h2 className="flex items-center space-x-3 text-[#170455] font-[700] text-[20px]"><span>Total Projects</span><span>87</span></h2>
          <ReactApexChart type="bar" series={chart.series} options={chart.options} height={300} />
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
        <div className="border rounded-lg mt-4">
          <table className="text-left w-[100%]">
            <thead>
              <tr className="border-b-[1px]">
                <th className="pl-3"><input type="checkbox" name="" id="" className="accent-orange" /></th>
                <th className="py-3">
                  <div className="flex space-x-2">
                    <p>Projects</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th className="py-3">
                  <div className="flex space-x-2">
                    <p>Clients</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Started</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Due Date</p>
                    <p className="flex flex-col items-center">
                      <span className="-mb-2 "><IoMdArrowDropup /></span>
                      <span><IoMdArrowDropdown /></span>
                    </p>
                  </div>
                </th>
                <th>
                  <div className="flex space-x-2">
                    <p>Project brief</p>
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
                <td>{job.project}</td>
                <td className="py-3">
                  <div className="flex space-x-1">
                    <p className="pt-[2px]"><img src="/images/profilepix.png" alt="" className="w-[24px] h-[24px] rounded-full" /></p>
                    <div className="">
                      <p className="font-bold text-[#080812]">{job.client.name}</p>
                      <p className="text-[#948D8D]">{job.client.role}</p>
                    </div>
                  </div>
                </td>
                <td className="text-gray4 font-[700]">
                  <div className="flex flex-col">
                    <p>{job.started.date}</p>
                    <p>{job.started.time}</p>
                  </div>
                </td>
                <td className="text-gray4 font-[700]">
                  <div className="flex flex-col">
                    <p>{job.completed.date}</p>
                    <p>{job.completed.time}</p>
                  </div>
                </td>
                <td><span className="text-[#948D8D] font-[700]">{job.projectBrief}</span></td>
                <td><span className="bg-gray5 p-2 text-[#035CFF]">{job.projectStatus}</span></td>
                <td>
                  <div className="flex justify-center items-center space-x-1 border rounded-lg mr-1 font-[500] w-[90%] cursor-pointer">
                    <span className="text-green-400 rotate-90"><TbHandFinger /></span>
                    <span>Fill milestone</span>
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

export default Projects;