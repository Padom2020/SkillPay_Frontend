import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Layout from "../../components/freelancer/Layout";

const Earnings = () => {
  return (
    <Layout title="SkillPay | Freelancer Earnings">
      <div className="mt-6 mr-14">
        <div className="flex flex-col md:flex-row justify-between">
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
        <div className="grid grid-col-1 md:grid-cols-3 gap-3 w-[90%] my-9">
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
      </div>
    </Layout>
  )
}

export default Earnings