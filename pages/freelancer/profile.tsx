import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { VscArrowSmallLeft, VscArrowSmallRight, VscVerified } from "react-icons/vsc";
import { BiMessageAltDetail } from 'react-icons/bi';
import { FcGoogle } from "react-icons/fc";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Profile = () => {
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
  return (
    <Layout title="SkillPay | Freelancer Profile View">
      <div>
        <img src={"/images/freelancer-header.svg"} />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <img src="/images/freelancer.svg" className="-mt-8 z-50" />
            <div>
              <div className="flex items-center space-x-7">
                <span className="text-[#080812] font-[500] text-[30px]">John Doe</span>
                <span className="text-[#0CA789] text-[20px]"><VscVerified /></span>
              </div>
              <p className="text-[rgba(8, 8, 18, 0.7)] text-[20px] font-[400]">UI/UX Designer, Web Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="border-2 border-orange py-1 px-3 rounded-lg flex items-center space-x-3 text-orange hover:cursor-pointer hover:shadow-md">
              <span><BiMessageAltDetail /></span>
              <span>Message</span>
            </div>
            <div className="text-white bg-orange py-1 px-3 rounded-lg flex items-center space-x-3 hover:cursor-pointer hover:shadow-md">
              <img src="/images/hire.svg" alt="" className="w-3" />
              <span>Hire Me</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex">
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-[22px] font-[500] text-[#080812]">About Me</h2>
                <div className="flex space-x-3 items-center">
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
                  <h3 className="text-[22px] font-[500] text-[#080812] my-5">Work Experience</h3>
                  <div className="flex space-x-3 mb-10">
                    <div>
                      <img src="/images/google-virtual.svg" alt="" className="" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[#080812] font-[700]">Google Virtual Scheduler</p>
                          <p className="text-[#948D8D] font-[700]">London - Google Inc</p>
                        </div>
                        <div className="text-[#080812] font-[700]">2018-Present</div>
                      </div>
                      <p className="text-[rgba(8, 8, 18, 0.7)] font-[400] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit .</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex space-x-3 my-10">
                    <div>
                      <img src="/images/google-virtual.svg" alt="" className="" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
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
                    <h3 className="text-[22px] font-[500] text-[#080812] my-5">Education</h3>
                    <div className="flex space-x-3 mb-10">
                      <div>
                        <img src="/images/education.svg" alt="" className="" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-[#080812] font-[700]">Harvard University</p>
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
            <div></div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFBFC] pt-9">
        <div className="pl-36">
          <div className="flex justify-between">
            <div className="text-[#080812] font-[500] text-[22px]">Jobs Completed (7)</div>
            <div className="flex items-center mr-12">
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl border border-gray-pagination rounded-full"><VscArrowSmallLeft /></span>
              </div>
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl bg-[#020648] text-white rounded-full"><VscArrowSmallRight /></span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5 pb-12 mt-3">
            {
              jobs?.map((job, index) => (
                <div className="w-[400px] rounded-[5px] shadow-lg px-3 pt-3 bg-white" key={++index}>
                  <div>
                    <img src={job.image} alt="" className="rounded-[5px]" />
                  </div>
                  <p className="text-[#080812] font-[400] text-[18px] mt-3 mb-4">{job.desc}</p>
               </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="pl-36">
          <div className="flex justify-between">
            <div className="text-[#080812] font-[500] text-[22px]">Reviews (4)</div>
            <div className="flex items-center mr-12">
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl border border-gray-pagination rounded-full"><VscArrowSmallLeft /></span>
              </div>
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-2xl bg-[#020648] text-white rounded-full"><VscArrowSmallRight /></span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5 pb-12 mt-3">
            {
              reviews?.map((review, index) => (
                <div className="w-[400px] rounded-[5px] px-3 pt-3 bg-[#FAFBFC]" key={++index}>
                  <div className="text-[rgba(8, 8, 18, 0.7)] text-[14px] font-[400]">{review.comment}</div>
                  <div className="flex items-center space-x-2 mb-3 mt-8">
                    <div>
                      <img src={review.avatar} alt="" className="" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <p className="text-[#080812] font-[500] text-[14px]">{review.name}</p>
                        {
                          review.rating === 0 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                         </div>
                        }
                        {
                          review.rating === 1 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                         </div>
                        }
                        {
                          review.rating === 2 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                         </div>
                        }
                        {
                          review.rating === 3 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                         </div>
                        }
                        {
                          review.rating === 4 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                         </div>
                        }
                        {
                          review.rating === 5 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                         </div>
                        }
                        {
                          review.rating === 6 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiOutlineStar /></span>
                         </div>
                        }
                        {
                          review.rating === 7 && <div className="flex items-start">
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                            <span className="text-[#FFC303]"><AiFillStar /></span>
                         </div>
                        }
                      </div>
                      <div className="text-[rgba(8, 8, 18, 0.7)] font-[400]">{review.role} {review.workPlace}</div>
                    </div>
                  </div>
               </div>
              ))
            }
          </div>
        </div>
      </div>
      <hr />
    </Layout>
  )
};

export default Profile;