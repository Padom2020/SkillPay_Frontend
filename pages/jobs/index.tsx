import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Search from "../../components/Search";
import { postedJobs } from "../../mockData";
import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc"
import { MdWorkOutline } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Select from "../../components/Select";
import Job from "../../components/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState(postedJobs);
  const [selectForm, setSelectForm] = useState({
    type: "",
    level: "",
    time: "",
    categ: "",
  });
  const onChange = (field: string) => (evt: React.MouseEvent) => {
    const target = evt.target as Element;
    const targetValue = target.getAttribute("value");
    setSelectForm({
      ...selectForm,
      [field]: targetValue,
    })
  }
  
  useEffect(() => {
    const newJobs = jobs.map((job => ({
      ...job,
      jobLogo: "/images/mui-logo.png",
    })));

    setJobs(newJobs);
  }, [])
 
  return (
    <Layout title="SkillPay | Jobs">
      <div>
        <hr />
        <div className='md:max-w-[90%] lg:max-w-[90%] xl:max-w-[65%] mx-auto mt-4'>
          <h1 className="text-[#080812] text-[18px] md:text-[25px] font-[500] text-center md:text=left">Search For Available Jobs</h1>
          <div className="w-[90%] md:w-[60%] mx-auto md:mx-0">
            <Search />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 my-4">
            <div className="w-[90%] md:w-[50%] lg:w-[20%] mx-auto md:mx-0">
              <Select value={selectForm.type} placeHolder="Job Type" icon={<MdWorkOutline />} onChange={onChange("type")}>
                <option value="Web Design" className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Web Design</option>
                <option value={"Front End"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Front End Development</option>
                <option value={"Block Chain"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Block Chain</option>
                <option value={"Web3"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Web3</option>
              </Select>
            </div>
            <div className="w-[90%] md:w-[50%] lg:w-[20%] mx-auto md:mx-0">
              <Select value={selectForm.level} placeHolder="Career Level" icon={<BsBarChart />} onChange={onChange("level")}>
                <option value={"Beginner"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Beginer Level</option>
                <option value={"Junior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Junior Level</option>
                <option value={"Intermediate"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Intermediate Level</option>
                <option value={"Senior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Senior Level</option>
              </Select>
            </div>
            <div className="w-[90%] md:w-[50%] lg:w-[20%] mx-auto md:mx-0">
              <Select value={selectForm.time} placeHolder="Schedule" icon={<MdAccessTime />} onChange={onChange("time")}>
                <option value={"Beginner"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Beginer Level</option>
                <option value={"Junior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Junior Level</option>
                <option value={"Intermediate"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Intermediate Level</option>
                <option value={"Senior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Senior Level</option>
              </Select>
            </div>
            <div className="w-[90%] md:w-[50%] lg:w-[20%] mx-auto md:mx-0">
              <Select value={selectForm.categ} placeHolder="Category" icon={<BiCategory />} onChange={onChange("categ")}>
                <option value={"Beginner"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Beginer Level</option>
                <option value={"Junior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Junior Level</option>
                <option value={"Intermediate"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Intermediate Level</option>
                <option value={"Senior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Senior Level</option>
              </Select>
            </div>
          </div>
          {/* <div className="flex items-center mt-4">
            <div className="w-[25%]">
              <Select placeHolder="Job Type" icon={<MdWorkOutline />}></Select>
            </div>
          </div> */}
          <div className='flex flex-col md:flex-row justify-center md:items-center md:justify-between md:my-1 border-t md:border-t-0 mt-6'>
            <p className='capitalize font-[400] text-[18px] md:text-[25px] text-[rgba(8, 8, 18, 0.7)] text-center md:text-left'>
              215 UI/UX Results found
            </p>
            <div className='hidden md:flex items-center justify-center capitalize border rounded-[5px] font-[400]'>
              <div className="py-1 px-2">Latest</div>
              <div className="py-1 px-2 bg-[#020648] text-white">Popular</div>
            </div>
        </div>
        </div>
      </div>
      <div className='bg-gray'>
        <div className="md:max-w-[90%] lg:max-w-[80%] xl:max-w-[65%] mx-auto mt-4">
          <div className='py-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 '>
              {jobs?.map((job) => (
                <div key={job?.id} className='w-[95%] mx-auto'>
                    <Job postedJob={job} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="flex justify-end">
          <div className="flex items-center space-x-3 pr-10">
            <div className="w-7 h-7 flex items-center justify-center">
              <span className="text-2xl rounded-full border border-[#020648]"><VscArrowSmallLeft /></span>
            </div>
            <div className="w-7 h-7 rounded-full text-center bg-gray-pagination text-white">1</div>
            <div className="w-7 h-7 rounded-full text-center">2</div>
            <div className="w-7 h-7 rounded-full text-center">3</div>
            <div className="w-7 h-7 rounded-full text-center">...</div>
            <div className="w-7 h-7 rounded-full text-center">12</div>
            <div className="w-7 h-7 flex items-center justify-center">
              <span className="text-2xl bg-[#020648] text-white rounded-full"><VscArrowSmallRight /></span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='bg-white pb-12'>
        <Footer />
      </div>
    </Layout>
  )
}

export default Jobs;