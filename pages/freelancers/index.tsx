import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { BsBarChart } from "react-icons/bs";
import { MdAccessTime, MdWorkOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";
import Freelancer from "../../components/Freelancer";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import Select from "../../components/Select";
import { freelancers } from "../../mockData";

const Index = () => {
  const router = useRouter();
  const [selectForm, setSelectForm] = useState({
    skill: "",
    location: "",
    level: "",
    schedule: ""
  });
  const onChange = (input: string) => (evt: React.MouseEvent) => {
    const target = evt.target as Element;
    const targetValue = target.getAttribute("value");

    setSelectForm({
      ...selectForm,
      [input]: targetValue
    })
  };
  const handleViewProfile = (id: number) => (evt: React.MouseEvent) => {
    evt.stopPropagation();
    router.push(`freelancers/${id}`);
  }
  // useEffect(() => {
  //   const newFreelancers = freelancers?.map((fre))
  
  //   return () => {

  //   }
  // }, [])
  
  return (
    <Layout title="SkillPay | Freelancers">
      <hr />
      <div className="w-[80%] mx-auto">
        <h1 className="text-center md:text-left text-[26px] font-[500] text-[#080812]">Search For Expert Freelancers</h1>
        <div className="w-[100%] md:w-[65%] lg:w-[50%]">
          <Search placeholder="Search through our talent pool" />
        </div>
        <div className="flex md:space-x-6 space-y-6 md:space-y-0 my-4">
          <div className="w-[90%] md:w-[50%] lg:w-[20%] mx-auto md:mx-0">
            <Select value={selectForm.skill} placeHolder="Job Type" icon={<MdWorkOutline />} onChange={onChange("skill")}>
              <option value="Web Design" className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Web Design</option>
              <option value={"Front End"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Front End Development</option>
              <option value={"Block Chain"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Block Chain</option>
              <option value={"Web3"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Web3</option>
            </Select>
          </div>
          <div className="lg:w-[20%]">
            <Select value={selectForm.location} placeHolder="location" icon={<SlLocationPin />} onChange={onChange("level")}>
              <option value={"Beginner"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Beginer Level</option>
              <option value={"Junior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Junior Level</option>
              <option value={"Intermediate"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Intermediate Level</option>
              <option value={"Senior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Senior Level</option>
            </Select>
          </div>
          <div className="lg:w-[20%]">
            <Select value={selectForm.level} placeHolder="Level" icon={<BsBarChart />} onChange={onChange("level")}>
              <option value={"Beginner"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Beginer Level</option>
              <option value={"Junior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Junior Level</option>
              <option value={"Intermediate"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Intermediate Level</option>
              <option value={"Senior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Senior Level</option>
            </Select>
          </div>
          <div className="lg:w-[20%]">
            <Select value={selectForm.schedule} placeHolder="Schedule" icon={<MdAccessTime />} onChange={onChange("schedule")}>
              <option value={"Beginner"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Beginer Level</option>
              <option value={"Junior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Junior Level</option>
              <option value={"Intermediate"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Intermediate Level</option>
              <option value={"Senior"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Senior Level</option>
            </Select>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center md:justify-between mt-5">
            <div className="text-[rgba(8, 8, 18, 0.7)] text-[13px] md:text-[17px] lg:text-[23px] font-[400]">103 graphic designer found</div>
            <div className="hidden md:block">
              <Pagination />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 mt-10">
            {
              freelancers?.map((freelancer) => (<Freelancer freelancer={freelancer} handleViewProfile={handleViewProfile} />))
            }
          </div>
        </div>
        <div className="flex justify-end py-14">
          <Pagination />
        </div>
      </div>
      <hr />
    </Layout>
  )
};

export default Index;