import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { BsBarChart } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import Freelancer from "../components/Freelancer";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Select from "../components/Select";
import { searchProducts } from "../mockData";
import ProductItem from "./ProductItem";

const Index = () => {
  const router = useRouter();
  const [selectForm, setSelectForm] = useState({
    skills: "",
    category: ""
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
    <Stack justifyContent={"center"} alignItems="center">
      <hr />
      <div className="w-[80%] mx-auto">
        <h1 className="text-center md:text-left text-[26px] font-[500] text-[#080812]">Search For Products</h1>
        <div className="w-[100%] md:w-[65%] lg:w-[50%]">
          <Search placeholder="Search for Products you want..." />
        </div>
        <div className="flex md:space-x-6 space-y-6 md:space-y-0 my-4">
          <div className="w-[90%] md:w-[50%] lg:w-[20%] mx-auto md:mx-0">
            <Select value={selectForm.skills} placeHolder="Skills" icon={<MdWorkOutline />} onChange={onChange("skill")}>
              <option value="Web Design" className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Web Design</option>
              <option value={"Front End"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>FrontEnd Development</option>
              <option value={"Block Chain"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>BlockChain</option>
              <option value={"Mobile App"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Mobile App</option>
              <option value={"Web3"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Web3</option>
            </Select>
          </div>

          <div className="lg:w-[20%]">
            <Select value={selectForm.category} placeHolder="Category" icon={<BsBarChart />} onChange={onChange("level")}>
              <option value={"UIUX"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>UIUX</option>
              <option value={"Templates"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Templates</option>
              <option value={"Mobile Apps"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Mobile Apps</option>
              <option value={"SmartContracts"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>SmartContracts</option>
              <option value={"Web Apps"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Web Apps</option>
              <option value={"Dapps"} className='hover:cursor-pointer hover:bg-orange hover:text-white pl-3 py-1'>Dapps</option>
            </Select>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center md:justify-between mt-5">
            <div className="text-[rgba(8, 8, 18, 0.7)] text-[13px] md:text-[17px] lg:text-[23px] font-[400]">103 graphic products found</div>
            <div className="hidden md:block">
              <Pagination />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 mt-10">
            {searchProducts?.map((prod)=>{
              return <ProductItem product={prod} key={prod.id}/>
            })}
          </div>
        </div>
        <div className="flex justify-end py-14">
          <Pagination />
        </div>
      </div>
      <hr />
    </Stack>
  )
};

export default Index;