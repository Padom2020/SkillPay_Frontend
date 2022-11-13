import React, { useState } from "react";
import Layout from "../../components/Layout";
import { VscArrowSmallLeft, VscArrowSmallRight, VscVerified } from "react-icons/vsc";
import { BiMessageAltDetail } from 'react-icons/bi';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import FreelancerJobCompleted from "../../components/FreelancerJobCompleted";
import FreelancerReview from "../../components/FreelancerReview";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { CiMail } from "react-icons/ci"
import MessageModal from "../../components/MessageModal";
import { useRouter } from "next/router";


const Profile = () => {
  const router = useRouter();
  const [showMsgModal, setMsgModal] = useState(false);
  const handleHireMe = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    router.push("/../contractform");
  }
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
    <Layout title="SkillPay | Freelancer Profile View">
      <div>
        <img src={"/images/freelancer-header.svg"} />
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex space-x-3">
            <img src="/images/freelancer.svg" className="-mt-8 z-50 w-[20%] md:w-auto" />
            <div>
              <div className="flex items-center space-x-7">
                <span className="text-[#080812] font-[500] text-[15px] md:text-[30px]">John Doe</span>
                <span className="text-[#0CA789] text-[20px]"><VscVerified /></span>
              </div>
              <p className="text-[rgba(8, 8, 18, 0.7)] text-[14px] md:text-[20px] font-[400]">UI/UX Designer, Web Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-5 md:mt-0">
            <div className="border-2 border-orange py-1 px-3 rounded-lg flex items-center space-x-3 text-orange hover:cursor-pointer hover:shadow-md" onClick={handleMsgClick}>
              <span><BiMessageAltDetail /></span>
              <span>Message</span>
            </div>
            <div className="text-white bg-orange py-1 px-3 rounded-lg flex items-center space-x-3 cursor-pointer hover:shadow-md" onClick={handleHireMe}>
              <img src="/images/hire.svg" alt="" className="w-3" />
              <span>Hire Me</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-[100%] md:w-[69%] order-2 md:order-1">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h2 className="text-[22px] font-[500] text-[#080812]">About Me</h2>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center">
                  <div className="flex items-center space-x-2 py-1 px-2 text-[14px] bg-[#F8F9FB] rounded-[5px]">
                    <span className="text-[#0CA789]"><VscVerified /></span>
                    <span className="text-[#080812]">7 Job Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FFC303]"><AiFillStar /></span>
                    <span className="text-[#FFC303]"><AiFillStar /></span>
                    <span className="text-[#FFC303]"><AiFillStar /></span>
                    <span className="text-[#FFC303]"><AiFillStar /></span>
                    <span className="text-[#FFC303]"><AiOutlineStar /></span>
                    <span className="text-[#FFC303]"><AiOutlineStar /></span>
                  </div>
                </div>
              </div>
              <div className="w-[95%]">
                <p className="text-[rgba(8, 8, 18, 0.7)] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit facilisis eget lobortis hendrerit nullam. Sem nunc id suspendisse blandit. Erat fames viverra tortor at tellus ut elementum quis. Neque at amet porta orci semper amet enim.</p>
                <div>
                  <h3 className="text-[18px] md:text-[22px] text-center md:text-left font-[500] text-[#080812] my-5">Work Experience</h3>
                  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-10">
                    <div className="flex justify-center md:justify-start">
                      <img src="/images/google-virtual.svg" alt="" className="" />
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row justify-between items-center">
                        <div>
                          <p className="text-[#080812] font-[700]">Google Virtual Scheduler</p>
                          <p className="text-[#948D8D] font-[700]">London - Google Inc</p>
                        </div>
                        <div className="text-[#080812] font-[700]">2018-Present</div>
                      </div>
                      <p className="text-[rgba(8, 8, 18, 0.7)] font-[400] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit .</p>
                    </div>
                  </div>
                  <hr className="hidden md:block" />
                  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 my-10">
                    <div className="flex justify-center md:justify-start">
                      <img src="/images/google-virtual.svg" alt="" className="" />
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row justify-between items-center">
                        <div>
                          <p className="text-[#080812] font-[700]">Google Virtual Scheduler</p>
                          <p className="text-[#948D8D] font-[700]">London - Google Inc</p>
                        </div>
                        <div className="text-[#080812] font-[700]">2018-Present</div>
                      </div>
                      <p className="text-[rgba(8, 8, 18, 0.7)] font-[400] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit .</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[22px] text-center md:text-left font-[500] text-[#080812] my-5">Education</h3>
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-10">
                      <div className="flex justify-center md:justify-start">
                        <img src="/images/education.svg" alt="" className="" />
                      </div>
                      <div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                          <div>
                            <p className="text-[#080812] font-[700] text-center md:text-left">Harvard University</p>
                            <p className="text-[#948D8D] font-[700]">London -  Business Development</p>
                          </div>
                          <div className="text-[#080812] font-[700]">1999-2018</div>
                        </div>
                        <p className="text-[rgba(8, 8, 18, 0.7)] font-[400] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit .</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-base order-1 md:order-2">
              <div>
                <h4 className="text-[#080812] font-[500] text-[22px]">Skills</h4>
                <div className="my-6">
                  <div className="flex space-x-4 mb-5">
                    <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">UI/UX Design</span>
                    <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">Website Development</span>
                  </div>
                  <div className="flex space-x-4">
                    <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">User Experience Design</span>
                    <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">Figma</span>
                  </div>
                  <div className="my-4">
                    <span className="bg-[#F8F9FB] rounded-[5px] py-1 px-2 text-[rgba(8, 8, 18, 0.7)] font-[400]">Interface Design</span>
                  </div>
                </div>
                <h5 className="text-[#080812] font-[500] text-[22px]">$35,000-40,000 </h5>
                <p className="text-[#080812] font-[500] text-[15px]">Avg. salary</p>
                <div className="mt-6">
                  <div className="flex items-center space-x-4">
                    <span><SlLocationPin /></span>
                    <span className="text-[rgba(2, 6, 72, 0.7)] font-[400]">Port Harcourt</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span><HiOutlinePhoneMissedCall /></span>
                    <span className="text-[rgba(2, 6, 72, 0.7)] font-[400]">+25470000000</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span><CiMail /></span>
                    <span className="text-[rgba(2, 6, 72, 0.7)] font-[400]">bluelance@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFBFC] pt-9">
        <div className="px-10 md:pl-36">
          <div className="flex justify-between">
            <div className="text-[#080812] font-[500] text-[11px] md:text-[22px]">Jobs Completed (7)</div>
            <div className="flex items-center mr-12">
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
        <div className="px-6 md:pl-36">
          <div className="flex justify-between">
            <div className="text-[#080812] font-[500] text-[11px] md:text-[22px]">Reviews (4)</div>
            <div className="flex items-center mr-12">
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
      <hr />
      {
        showMsgModal && <MessageModal closeModal={setMsgModal} />
      }
    </Layout>
  )
};

export default Profile;