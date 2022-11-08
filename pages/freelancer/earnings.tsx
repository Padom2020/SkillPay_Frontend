import React, {useState} from "react";
import { MdAccessTime, MdPlayArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Layout from "../../components/freelancer/Layout";
import Search from "../../components/Search";
import { BsBriefcase } from "react-icons/bs";
import Select from "../../components/Select";

const Earnings = () => {
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
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'Earnings',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
  });
  const onChange = (filter: string) => (evt: React.MouseEvent) => {
    const target = evt.target as Element;
    const targetValue = target.getAttribute("value");
    setSearchFilters({
      ...searchFilters,
      [filter]: targetValue,
    })
  }

  return (
    <Layout title="SkillPay | Freelancer Earnings">
      <div className="mt-6 px-2 md:px-0 md:mr-14">
        <div className="flex flex-col md:flex-row items-center md:items-left justify-center space-y-2 md:space-y-0 md:justify-between">
          <h1 className="text-sm md:text-base lg:text-[22px] text-[#080812] font-[500]">Earings <sub className="text-[#948D8D] font-[400] text-[10px] lg:text-[12px]">$8000</sub></h1>
          <div className="flex justify-between items-center h-10 border rounded-[5px] px-2 bg-[#F8F9FB]">
            <div className="flex items-center space-x-2 h-full">
              <FaRegCalendarAlt />
              <span className="text-lg">Tme period: Today</span>
            </div>
            <div><MdPlayArrow className="rotate-90" /></div>
          </div>
        </div>
        {/* BADGES */}
        <div className="grid grid-col-1 md:grid-cols-3 gap-3 w-[95%] mx-auto md:mx-0 md:w-[85%] my-9">
          {/* ONE */}
          <div className="text-center border rounded-md pt-4 pb-8">
            <p className="text-gray2 text-xs md:text-sm lg:text-base font-[500]">Earning</p>
            <p className="text-sm md:text-base lg:text-[204x] text-gray4 font-[700] mb-4 mt-2">$ 8000</p>
            <div><span className="p-3 bg-green-100 text-[#59AA58]">-4%</span></div>
          </div>
          {/* TWO */}
          <div className="text-center border rounded-md py-4">
            <p className="text-gray2 text-xs md:text-sm lg:text-base font-[500]">Pending</p>
            <p className="text-sm md:text-base lg:text-[204x] text-gray4 font-[700] mb-4 mt-2">$ 790</p>
            <div><span className="p-3 bg-orange/30 text-[#FC0303]">-4%</span></div>
          </div>
          {/* THREE */}
          <div className="text-center border rounded-md py-4">
            <p className="text-gray2 text-xs md:text-sm lg:text-base font-[500]">Balance</p>
            <p className="text-sm md:text-base lg:text-[204x] text-gray4 font-[700] mb-2 mt-2">$ 8000</p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-1 text-[#F24726] cursor-pointer group">
                <span>Withdraw</span><span className="text-lg md:text-xl lg:text-2xl mt-1 group-hover:translate-x-2 duration-500"><TiArrowRight /></span>
              </div>
            </div>
          </div>
        </div>
        {/* CHART */}
        <div className="border rounded-md p-2">
          <h2 className="flex items-center space-x-3 text-[#170455] font-[700] text-[20px]"><span>Total Earnings</span><span>$8000</span></h2>
        </div>
        <div className="w-[100%] md:w-[75%] lg:w-[55%] mt-4 mb-2">
          <Search placeholder="Search  project" />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
          <div className="w-[100%] md:w-[60%] lg:w-[20%]">
            <Select icon={<BsBriefcase />} value={searchFilters.filter1} onChange={onChange("filter1")} placeHolder="Paid" >
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
      </div>
    </Layout>
  )
}

export default Earnings