
import React, {useState} from "react";
import LayoutFreelancer from "../../components/LayoutFreelancer";
import { VscArrowSmallLeft, VscArrowSmallRight, VscVerified } from "react-icons/vsc";
// import { BiMessageAltDetail } from 'react-icons/bi';
// import { FcGoogle } from "react-icons/fc";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import FreelancerJobCompleted from "../../components/FreelancerJobCompleted";
import FreelancerReview from "../../components/FreelancerReview";
//import { SlLocationPin } from "react-icons/sl";
//import { HiOutlinePhoneMissedCall } from "react-icons/hi";
//import { CiMail } from "react-icons/ci";
import { TiEdit } from "react-icons/ti";
//import MessageModal from "../../components/MessageModal";

const Index = () => {
  const [showMsgModal, setMsgModal] = useState(false);
  const [jobs, setJobs] = useState([
    {
      image: "/images/e-commerce.svg", 
      desc: "Ecommerce Website"
    },
    {
      image: "/images/3d-website.svg", 
      desc: "3D Website Design"
    },
    {
      image: "/images/abstract.svg", 
      desc: "Abstract illustration"
    },
    {
      image: "/images/3d-website.svg", 
      desc: "3D Website Design"
    },
  ]);
  const [reviews, setReviews] = useState([
    {
      avatar: "/images/review.svg", 
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit ",
      name: "James Peter",
      role: "Manager",
      workPlace: "@ DigitalAssest Ltd",
      rating: 1,
    },
    {
      avatar: "/images/review2.svg", 
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit ",
      name: "James Peter",
      role: "Manager",
      workPlace: "@ DigitalAssest Ltd",
      rating: 3,
    },
    {
      avatar: "/images/review.svg", 
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit ",
      name: "James Peter",
      role: "Manager",
      workPlace: "@ DigitalAssest Ltd",
      rating: 5,
    },
    {
      avatar: "/images/review3.svg", 
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit ",
      name: "James Peter",
      role: "Manager",
      workPlace: "@ DigitalAssest Ltd",
      rating: 2,
    },
  ]);
  const handleMsgClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    setMsgModal(true);
  }

  return (
    <LayoutFreelancer title="SkillPay | Freelancer">
      <div>
        <img src={"/images/freelancer-header.svg"} className="" />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
            <img src="/images/freelancer.svg" className="-mt-8 z-50 w-[40%]" />
            <div>
              <p><span className="text-[#080812] font-[500] text-15px md:text-[30px]">John Doe</span></p>
              <p className="text-[rgba(8, 8, 18, 0.7)] text-[12px] md:text-[15px] lg:text-[20px] font-[400]">UI/UX Designer, Web Developer</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-white text-xs md:text-base bg-orange py-1 px-3 rounded-lg flex items-center space-x-1 sm:space-x-3 hover:cursor-pointer hover:shadow-md">
              <span><TiEdit /></span>
              <div className="flex space-x-2">
                <span>Edit</span>
                <span className="hidden sm:block">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="mt-5 w-[80%] mx-auto">
        <h2 className="text-[15px] md:text-[18px] lg:text-[22px] font-[500] text-[#080812]">About Me</h2>
        <div className="w-[95%]">
          <p className="text-[rgba(8, 8, 18, 0.7)] font-[400] text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit facilisis eget lobortis hendrerit nullam. Sem nunc id suspendisse blandit. Erat fames viverra tortor at tellus ut elementum quis. Neque at amet porta orci semper amet enim.</p>
          <div className="my-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left text-sm md:text-base">
            <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">UI/UX Design</span>
            <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">Website Development</span>
            <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">User Experience Design</span>
            <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">Figma</span>
            <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">Interface Design</span>
          </div>
        </div>
        {/* EXPERIENCE */}
        <div>
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-[500] text-[#080812] my-5">Experience</h3>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 mb-10">
            <div>
              <img src="/images/google-virtual.svg" alt="" className="" />
            </div>
            <div>
              <div className="flex justify-between items-center text-[12px] md:text-base">
                <div>
                  <p className="text-[#080812] font-[700]">Google Virtual Scheduler</p>
                  <p className="text-[#948D8D] font-[700]">London - Google Inc</p>
                </div>
                <div className="text-[#080812] font-[700]">2018-Present</div>
              </div>
              <p className="text-[rgba(8, 8, 18, 0.7)] text-sm md:text-base font-[400] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit .</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 my-10">
            <div>
              <img src="/images/google-virtual.svg" alt="" className="" />
            </div>
            <div>
              <div className="flex justify-between items-center text-[12px] md:text-base">
                <div>
                  <p className="text-[#080812] font-[700]">Google Virtual Scheduler</p>
                  <p className="text-[#948D8D] font-[700]">London - Google Inc</p>
                </div>
                <div className="text-[#080812] font-[700]">2018-Present</div>
              </div>
              <p className="text-[rgba(8, 8, 18, 0.7)] text-sm md:text-base font-[400] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit .</p>
            </div>
          </div>
        </div>
        {/* EDUCATION */}
        <div>
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-[500] text-[#080812] my-5">Education</h3>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 mb-10">
            <div>
              <img src="/images/education.svg" alt="" className="" />
            </div>
            <div>
              <div className="flex justify-between items-center text-[12px] md:text-base">
                <div>
                  <p className="text-[#080812] font-[700]">Harvard University</p>
                  <p className="text-[#948D8D] font-[700]">London -  Business Development</p>
                </div>
                <div className="text-[#080812] font-[700]">1999-2018</div>
              </div>
              <p className="text-[rgba(8, 8, 18, 0.7)] text-sm md:text-base font-[400] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit .</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFBFC] pt-9">
        <div className="px-10 md:pl-36">
          <div className="flex justify-between items-center">
            <div className="text-[#080812] font-[500] text-[12px] md:text-[18px] lg:text-[22px]">Jobs Completed (7)</div>
            <div className="flex items-center md:mr-12">
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl border border-gray-pagination rounded-full"><VscArrowSmallLeft /></span>
              </div>
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl bg-[#020648] text-white rounded-full"><VscArrowSmallRight /></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5 pb-12 mt-3">
            {
              jobs?.map((job, index) => (<FreelancerJobCompleted job={job} key={++index} />))
            }
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="px-10 md:pl-36">
          <div className="flex justify-between items-center">
            <div className="text-[#080812] font-[500] text-[12px] md:text-[18px] lg:text-[22px]">Reviews (4)</div>
            <div className="flex items-center md:mr-12">
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl border border-gray-pagination rounded-full"><VscArrowSmallLeft /></span>
              </div>
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl bg-[#020648] text-white rounded-full"><VscArrowSmallRight /></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5 pb-12 mt-3">
            {
              reviews?.map((review, index) => (<FreelancerReview review={review} key={++index} />))
            }
          </div>
        </div>
      </div>
      {/* {
        showMsgModal && <MessageModal closeModal={setMsgModal} />
      } */}
    </LayoutFreelancer>
  )
}

export default Index