import React, { useState } from 'react';
import { MdAccessTime, MdPlayArrow } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TbHandFinger } from 'react-icons/tb';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import Layout from '../../components/employer/Layout';
import Search from '../../components/Search';
import { BsBarChart, BsBriefcase } from 'react-icons/bs';
import Select from '../../components/Select';
import classNames from 'classnames';

const Employees = () => {
   const [searchFilters, setSearchFilters] = useState({
      textSearch: '',
      filter1: '',
      filter2: '',
   });

   const onChange = (filter: string) => (evt: React.MouseEvent) => {
      const target = evt.target as Element;
      const targetValue = target.getAttribute('value');
      setSearchFilters({
         ...searchFilters,
         [filter]: targetValue,
      });
   };
   const jobs = [
      {
         project: 'Front End',
         client: {
            name: 'John Doe',
            role: 'Developer',
         },
         started: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         completed: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         projectBrief: 'Download',
         projectStatus: 'Completed',
      },
      {
         project: 'Front End',
         client: {
            name: 'John Doe',
            role: 'Developer',
         },
         started: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         completed: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         projectBrief: 'Download',
         projectStatus: 'In Progress',
      },
      {
         project: 'Front End',
         client: {
            name: 'John Doe',
            role: 'Developer',
         },
         started: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         completed: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         projectBrief: 'Download',
         projectStatus: 'Paused',
      },
      {
         project: 'Front End',
         client: {
            name: 'John Doe',
            role: 'Developer',
         },
         started: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         completed: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         projectBrief: 'Download',
         projectStatus: 'Completed',
      },
      {
         project: 'Front End',
         client: {
            name: 'John Doe',
            role: 'Developer',
         },
         started: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         completed: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         projectBrief: 'Download',
         projectStatus: 'Completed',
      },
      {
         project: 'Front End',
         client: {
            name: 'John Doe',
            role: 'Developer',
         },
         started: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         completed: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         projectBrief: 'Download',
         projectStatus: 'In Progress',
      },
      {
         project: 'Front End',
         client: {
            name: 'John Doe',
            role: 'Developer',
         },
         started: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         completed: {
            date: '14 Feb. 2022',
            time: '04:00PM',
         },
         projectBrief: 'Download',
         projectStatus: 'Completed',
      },
   ];

   return (
      <Layout title='SkillPay | Freelancer Earnings'>
         <div className='mt-6 px-2 md:px-0 md:mr-14'>
            <div className='flex flex-col md:flex-row items-center md:items-left justify-center space-y-2 md:space-y-0 md:justify-between'>
               <h1 className='text-sm md:text-base lg:text-[22px] text-[#080812] font-[500]'>
                  Employees{' '}
                  <sub className='text-[#948D8D] font-[400] text-[10px] lg:text-[12px]'>
                     110
                  </sub>
               </h1>
               <div className='flex justify-between items-center h-10 border rounded-[5px] px-2 bg-[#F8F9FB]'>
                  <div className='flex items-center space-x-2 h-full'>
                     <FaRegCalendarAlt />
                     <span className='text-lg'>Time period: Today</span>
                  </div>
                  <div>
                     <MdPlayArrow className='rotate-90' />
                  </div>
               </div>
            </div>
            {/* BADGE */}
            <div className='flex w-[95%] mx-auto md:mx-0 md:w-[85%] my-9'>
               <div className='first-badge relative flex flex-col justify-center items-center bg-[#F24726] text-white py-1 w-[20%] mr-[0px]'>
                  <span>Hired</span>
                  <span className='bg-gray8 px-2'>6</span>
               </div>
               <div className='second-badge relative flex flex-col justify-center items-center py-1 w-[30%] border-t-2 border-b-2'>
                  <span>Hired</span>
                  <span className='bg-gray9 px-2 text-[#FF3D00]'>6</span>
               </div>
               <div className='third-badge relative flex flex-col justify-center items-center border-y-2 border-r-2 py-1 w-[20%] mr-[0px] bg-gray3'>
                  <span>Hired</span>
                  <span className='bg-gray9 px-2 text-[#FF3D00]'>6</span>
               </div>
            </div>
            <div className='w-[100%] md:w-[75%] mt-4 mb-2'>
               <Search placeholder='Search  project' />
            </div>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2'>
               <div className='w-[100%] md:w-[60%] lg:w-[20%]'>
                  <Select
                     icon={<BsBriefcase />}
                     value={searchFilters.filter1}
                     onChange={onChange('filter1')}
                     placeHolder='In Progress'
                  >
                     <option
                        value='Unpaid'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Unpaid
                     </option>
                     <option
                        value='Awaiting'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Awaiting
                     </option>
                     <option
                        value='Pending'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Paending
                     </option>
                  </Select>
               </div>
               <div className='w-[100%] md:w-[60%] lg:w-[20%]'>
                  <Select
                     icon={<BsBarChart />}
                     value={searchFilters.filter1}
                     onChange={onChange('filter1')}
                     placeHolder='In Progress'
                  >
                     <option
                        value='Unpaid'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Unpaid
                     </option>
                     <option
                        value='Awaiting'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Awaiting
                     </option>
                     <option
                        value='Pending'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Paending
                     </option>
                  </Select>
               </div>
               <div className='w-[100%] md:w-[60%] lg:w-[20%]'>
                  <Select
                     icon={<MdAccessTime />}
                     value={searchFilters.filter2}
                     onChange={onChange('filter2')}
                     placeHolder='Time Period'
                  >
                     <option
                        value='Unpaid'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white z-100'
                     >
                        Unpaid
                     </option>
                     <option
                        value='Awaiting'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Awaiting
                     </option>
                     <option
                        value='Pending'
                        className='cursor-pointer hover:bg-orange pl-3 hover:text-white'
                     >
                        Paending
                     </option>
                  </Select>
               </div>
            </div>
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
                           <div className='flex space-x-2'>
                              <p>Employees</p>
                              <p className='flex flex-col items-center'>
                                 <span className='-mb-2 '>
                                    <IoMdArrowDropup />
                                 </span>
                                 <span>
                                    <IoMdArrowDropdown />
                                 </span>
                              </p>
                           </div>
                        </th>
                        <th className='py-3'>
                           <div className='flex space-x-2'>
                              <p>Role</p>
                              <p className='flex flex-col items-center'>
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
                           <div className='flex space-x-2'>
                              <p>Started</p>
                              <p className='flex flex-col items-center'>
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
                           <div className='flex space-x-2'>
                              <p>Due Date</p>
                              <p className='flex flex-col items-center'>
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
                           <div className='flex space-x-2'>
                              <p>Status</p>
                              <p className='flex flex-col items-center'>
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
                  <tbody>
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
                                 <div className=''>
                                    <p className='font-bold text-[#080812]'>
                                       {job.client.name}
                                    </p>
                                    <p className='text-[#948D8D]'>
                                       {job.client.role}
                                    </p>
                                 </div>
                              </div>
                           </td>
                           <td>{job.project}</td>
                           <td className='text-gray4 font-[700]'>
                              <div className='flex flex-col'>
                                 <p>{job.started.date}</p>
                                 <p>{job.started.time}</p>
                              </div>
                           </td>
                           <td className='text-gray4 font-[700]'>
                              <div className='flex flex-col'>
                                 <p>{job.completed.date}</p>
                                 <p>{job.completed.time}</p>
                              </div>
                           </td>
                           <td>
                              <span
                                 className={classNames('p-2', {
                                    'bg-gray5 text-[#035CFF]':
                                       job.projectStatus === 'Completed',
                                    'bg-gray6 text-[#70CC40]':
                                       job.projectStatus === 'In Progress',
                                    'bg-gray7 text-[#FC0303]':
                                       job.projectStatus === 'Paused',
                                 })}
                              >
                                 {job.projectStatus}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </Layout>
   );
};

export default Employees;
