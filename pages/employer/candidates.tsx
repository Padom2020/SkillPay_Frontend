import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiSearch, BiTimeFive } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';
import Layout from '../../components/employer/Layout';
import {
   AiFillStar,
   AiOutlineStar,
   AiOutlineExclamationCircle,
   AiOutlineLike,
} from 'react-icons/ai';

const Candidates = () => {
   const jobs = [
      {
         candidate: {
            name: 'John Doe',
            role: 'Developer',
         },
         ratings: 4.5,
         status: ['in progress', 'Hired'],
         days: 3,
      },
      {
         candidate: {
            name: 'John Doe',
            role: 'Developer',
         },
         ratings: 0,
         status: ['in progress', 'Hired'],
         days: 3,
      },
      {
         candidate: {
            name: 'John Doe',
            role: 'Developer',
         },
         ratings: 4.5,
         status: ['in progress', 'Hired'],
         days: 3,
      },
      {
         candidate: {
            name: 'John Doe',
            role: 'Developer',
         },
         ratings: 0,
         status: ['in progress', 'Hired'],
         days: 3,
      },
      {
         candidate: {
            name: 'John Doe',
            role: 'Developer',
         },
         ratings: 4.5,
         status: ['in progress', 'Hired'],
         days: 3,
      },
   ];

   //handle open tables
   const [openApplication, setOpenApplication] = useState(true);
   const [openHired, setOpenHired] = useState(false);

   const hanndleApplication = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setOpenHired(false);
      setOpenApplication(true);
   };

   const hanndleHire = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setOpenApplication(false);
      setOpenHired(true);
   };
   return (
      <Layout title='SkillPay | Employer Candidates'>
         <div className='pt-10 max-w-[90%]'>
            <div className='flex items-center justify-between pb-5'>
               <div className='flex items-baseline space-x-1'>
                  <h3 className='font-semibold'>Candidates</h3>
                  <span className='text-[10px] font-semibold text-[#948D8D]'>
                     110
                  </span>
               </div>
               <div className='flex items-center space-x-3 bg-[#f3f4f6] p-1 rounded-sm'>
                  <FaCalendarAlt className='text-sm' />
                  <div className='flex items-center space-x-2 text-sm'>
                     <p>Time period: Today</p>
                     <AiFillCaretDown />
                  </div>
               </div>
            </div>
            {/* BADGE */}
            <div className='flex w-[95%] mx-auto md:mx-0 md:w-[85%] pb-5 '>
               <div
                  className='first-badge relative flex flex-col justify-center items-center bg-[#F24726] text-white  w-[15%] mr-[0px]'
                  onClick={hanndleApplication}
               >
                  <span className='text-sm'>Applied</span>
                  <span className='bg-gray8 px-2 text-xs'>6</span>
               </div>
               <div className='second-badge relative flex flex-col justify-center items-center py-2 w-[20%] border-t border-b'>
                  <span className='text-sm'>From</span>
                  <span className='bg-gray9 px-2 text-[#FF3D00] text-xs'>
                     6
                  </span>
               </div>
               <div className='third-badge relative flex flex-col justify-center items-center border-y border-r py-2 w-[15%] mr-[0px] bg-gray3'>
                  <span>Interview</span>
                  <span className='bg-gray9 px-2 text-[#FF3D00] text-xs'>
                     6
                  </span>
               </div>
               <div className='second-badge relative flex flex-col justify-center items-center py-2 w-[15%] border-t border-b bg-red-200/40'>
                  <span className='text-sm'>Declined</span>
                  <span className='bg-gray9 px-2 text-[#FF3D00] text-xs'>
                     6
                  </span>
               </div>
               <div className='second-badge relative flex flex-col justify-center items-center py-2 w-[15%] border-t border-b bg-yellow-200/50'>
                  <span className='text-sm'>On hold</span>
                  <span className='bg-yellow-200 px-2 text-[#FFCE31] text-xs'>
                     6
                  </span>
               </div>
               <div
                  className='second-badge relative flex flex-col justify-center items-center py-2 w-[15%] border-t border-b bg-[#59AA58]/20'
                  onClick={hanndleHire}
               >
                  <span className='text-sm'>Hired</span>
                  <span className='bg-[#59AA58]/30 px-2 text-[#70CC40] text-xs'>
                     6
                  </span>
               </div>
            </div>
            {/* search section */}
            <div className='relative w-[70%] pb-3'>
               <input
                  type='text'
                  placeholder='Search'
                  className='bg-white outline-none border text-base rounded-md pl-3 pr-10 py-1 w-full'
               />
               <p className='bg-orange absolute p-1 rounded-sm top-1.5 right-3'>
                  <BiSearch className='text-white text-sm' />
               </p>
            </div>
            {/* selectors */}
            <div className='w-[70%] flex items-center space-x-3 pb-5'>
               <div className='flex items-center justify-between px-3 py-2 bg-[#F8F9FB] rounded-md w-full'>
                  <div className='flex items-center space-x-2 text-xs'>
                     <MdWorkOutline className='text-[#9ca3af]' />
                     <span>All</span>
                  </div>
                  <AiFillCaretDown className='text-xs' />
               </div>
               <div className='flex items-center justify-between px-3 py-2 bg-[#F8F9FB] rounded-md w-full'>
                  <div className='flex items-center space-x-2 text-xs'>
                     <BsBarChart className='text-[#9ca3af]' />
                     <span>Due</span>
                  </div>
                  <AiFillCaretDown className='text-xs' />
               </div>
               <div className='flex items-center justify-between px-3 py-2 bg-[#F8F9FB] rounded-md w-full'>
                  <div className='flex items-center space-x-2 text-xs'>
                     <BiTimeFive className='text-[#9ca3af]' />
                     <span>Time period</span>
                  </div>
                  <AiFillCaretDown className='text-xs' />
               </div>
            </div>

            {/* table */}
            {openApplication && (
               <div className='border rounded-lg mt-4'>
                  <table className='text-left w-[100%]'>
                     <thead>
                        <tr className='border-b-[1px]'>
                           <th className='pl-3'>
                              <input
                                 type='checkbox'
                                 name=''
                                 id=''
                                 className='accent-orange'
                              />
                           </th>
                           <th className='py-3'>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Candidates</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Ratings</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Status</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Days in stage</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Action</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Form replies</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                        </tr>
                     </thead>
                     <tbody className='text-xs'>
                        {jobs.map((job, index) => (
                           <tr className='text-left text-base' key={++index}>
                              <td className='py-2 px-3'>
                                 <input
                                    type='checkbox'
                                    className='accent-orange'
                                 />
                              </td>
                              <td className='py-3'>
                                 <div className='flex space-x-1'>
                                    <p className='pt-[2px]'>
                                       <img
                                          src='/images/profilepix.png'
                                          alt=''
                                          className='w-[24px] h-[24px] rounded-full'
                                       />
                                    </p>
                                    <div className='text-xs'>
                                       <p className='font-bold text-[#080812]'>
                                          {job.candidate.name}
                                       </p>
                                       <p className='text-[#948D8D]'>
                                          {job.candidate.role}
                                       </p>
                                    </div>
                                 </div>
                              </td>
                              <td className='text-xs'>
                                 {job.ratings ? (
                                    <button className='flex items-center space-x-1 bg-white drop-shadow px-2 py-1'>
                                       <span>
                                          <AiFillStar className='text-yellow-400' />
                                       </span>

                                       <span>{job.ratings}</span>
                                    </button>
                                 ) : (
                                    <button className='flex items-center space-x-1 bg-white drop-shadow px-2 py-1'>
                                       <span>
                                          <AiOutlineStar className='text-yellow-400' />
                                       </span>
                                       <span>0.0</span>
                                    </button>
                                 )}
                              </td>
                              <td className='text-gray4 font-[700]'>
                                 <span className='text-xs text-blue-600 bg-blue-200 px-2 py-1'>
                                    {job.status[0]}
                                 </span>
                              </td>
                              <td className='text-gray4 font-[700]'>
                                 <div className='flex flex-col'>
                                    <p className='text-xs'>{job.days} Days</p>
                                 </div>
                              </td>
                              <td>
                                 <div className='text-[#948D8D] text-xs flex items-center space-x-2'>
                                    <button className='flex items-center space-x-1 bg-white drop-shadow px-2 py-1 rounded-sm'>
                                       <span>
                                          <AiOutlineExclamationCircle className='text-red-500' />
                                       </span>

                                       <span className='text-xs'>Reject</span>
                                    </button>
                                    <button className='flex items-center space-x-1 bg-white drop-shadow px-2 py-1 rounded-sm'>
                                       <span>
                                          <AiOutlineLike className='text-green-500' />
                                       </span>

                                       <span className='text-xs'>
                                          Next Statge
                                       </span>
                                    </button>
                                 </div>
                              </td>
                              <td>
                                 <button className='bg-white drop-shadow px-4 py-1 rounded-sm text-xs'>
                                    View
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
            {/* table 2*/}
            {openHired && (
               <div className='border rounded-lg mt-4'>
                  <table className='text-left w-[100%]'>
                     <thead>
                        <tr className='border-b-[1px]'>
                           <th className='pl-3'>
                              <input
                                 type='checkbox'
                                 name=''
                                 id=''
                                 className='accent-orange'
                              />
                           </th>
                           <th className='py-3'>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Candidates</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Ratings</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Status</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Days in stage</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                           <th>
                              <div className='flex space-x-2 text-xs'>
                                 <p>Action</p>
                                 <p className='flex flex-col items-center space-y-1'>
                                    <span className='-mb-2 '>
                                       <IoMdArrowDropup />
                                    </span>
                                    <span>
                                       <IoMdArrowDropdown />
                                    </span>
                                 </p>
                              </div>
                           </th>
                        </tr>
                     </thead>
                     <tbody className='text-xs'>
                        {jobs.map((job, index) => (
                           <tr className='text-left text-base' key={++index}>
                              <td className='py-2 px-3'>
                                 <input
                                    type='checkbox'
                                    className='accent-orange'
                                 />
                              </td>
                              <td className='py-3'>
                                 <div className='flex space-x-1'>
                                    <p className='pt-[2px]'>
                                       <img
                                          src='/images/profilepix.png'
                                          alt=''
                                          className='w-[24px] h-[24px] rounded-full'
                                       />
                                    </p>
                                    <div className='text-xs'>
                                       <p className='font-bold text-[#080812]'>
                                          {job.candidate.name}
                                       </p>
                                       <p className='text-[#948D8D]'>
                                          {job.candidate.role}
                                       </p>
                                    </div>
                                 </div>
                              </td>
                              <td className='text-xs'>
                                 {job.ratings ? (
                                    <button className='flex items-center space-x-1 bg-white drop-shadow px-2 py-1'>
                                       <span>
                                          <AiFillStar className='text-yellow-400' />
                                       </span>

                                       <span>{job.ratings}</span>
                                    </button>
                                 ) : (
                                    <button className='flex items-center space-x-1 bg-white drop-shadow px-2 py-1'>
                                       <span>
                                          <AiOutlineStar className='text-yellow-400' />
                                       </span>
                                       <span>0.0</span>
                                    </button>
                                 )}
                              </td>
                              <td className='text-gray4 font-[700]'>
                                 <span className='text-xs text-green-600 bg-[#70CC40] px-2 py-1'>
                                    {job.status[1]}
                                 </span>
                              </td>
                              <td className='text-gray4 font-[700]'>
                                 <div className='flex flex-col'>
                                    <p className='text-xs'>{job.days} Days</p>
                                 </div>
                              </td>
                              <td>
                                 <div className='text-[#948D8D] text-xs '>
                                    <button className='flex items-center space-x-1 bg-white drop-shadow px-2 py-1 rounded-sm'>
                                       <span>
                                          <AiOutlineLike className='text-green-500' />
                                       </span>

                                       <span className='text-xs'>
                                          Set milestone
                                       </span>
                                    </button>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </Layout>
   );
};

export default Candidates;
