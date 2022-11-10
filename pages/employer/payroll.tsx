import React, { useState } from 'react';
import Layout from '../../components/employer/Layout';
import ReactApexChart from 'react-apexcharts';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import Image from 'next/image';
import { BiSearch, BiTimeFive } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { BsBarChart } from 'react-icons/bs';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Payroll = () => {
   //data for payroll
   const [chart, setChart] = useState({
      options: {
         chart: {
            id: 'apexchart-example',
         },
         plotOptions: {
            bar: {
               horizontal: false,
               columnWidth: '25%',
               endingShape: 'rounded',
            },
         },
         dataLabels: {
            enabled: false,
         },
         legend: {
            position: 'top',
         },
         title: {
            text: 'Payroll Summary',
            style: {
               fontSize: '14px',
            },
         },
         stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
         },
         // yaxis: {
         //    title: {
         //       text: '$ (thousands)',
         //    },
         // },
         colors: ['#170455', '#F24726'],
         fill: {
            opacity: 1,
         },
         tooltip: {
            y: {
               formatter: function (val) {
                  return '$ ' + val + ' thousands';
               },
            },
         },
         xaxis: {
            categories: [
               '1 Oct',
               '2 Oct',
               '3 Oct',
               '4 Oct',
               '5 Oct',
               '6 Oct',
               '7 Oct',
            ],
         },
      },
      series: [
         {
            name: 'Taxes',
            data: [44, 55, 57, 56, 61, 58, 63],
         },
         {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91],
         },
      ],
   });

   const jobs = [
      {
         employee: {
            name: 'John Doe',
            role: 'Developer',
         },
         job: 'Front-End',
         base_salary: 63738,
         taxes: 63738,

         amount: '63738',
         paymentStatus: 'Paid',
      },
      {
         employee: {
            name: 'John Doe',
            role: 'Developer',
         },
         job: 'Front-End',
         base_salary: 63738,
         taxes: 63738,
         amount: '63738',
         paymentStatus: 'Paid',
      },
      {
         employee: {
            name: 'John Doe',
            role: 'Developer',
         },
         job: 'Front-End',
         base_salary: 63738,
         taxes: 63738,
         amount: '63738',
         paymentStatus: 'unPaid',
      },
      {
         employee: {
            name: 'John Doe',
            role: 'Developer',
         },
         job: 'Front-End',
         base_salary: 63738,
         taxes: 63738,
         amount: '63738',
         paymentStatus: 'Pending',
      },
      {
         employee: {
            name: 'John Doe',
            role: 'Developer',
         },
         job: 'Front-End',
         base_salary: 63738,
         taxes: 63738,
         amount: '63738',
         paymentStatus: 'Paid',
      },
      {
         employee: {
            name: 'John Doe',
            role: 'Developer',
         },
         job: 'Front-End',
         base_salary: 63738,
         taxes: 63738,
         amount: '63738',
         paymentStatus: 'Paid',
      },
   ];
   return (
      <Layout title='SkillPay | Employer Payroll'>
         <div className='pt-10 max-w-[90%]'>
            <div className='flex items-center justify-between pb-5'>
               <div className='flex items-baseline space-x-1'>
                  <h3 className='font-semibold'>Payroll</h3>
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
            <div className='flex space-x-3 pb-5'>
               <div className='w-[60%] border'>
                  <div className='p-3'>
                     <ReactApexChart
                        type='bar'
                        series={chart.series}
                        // @ts-expect-error
                        options={chart.options}
                        height={300}
                     />
                  </div>
               </div>
               <div className='w-[40%] border'>
                  <div className='p-3'>
                     <h3 className='font-bold'>Payment status</h3>
                     <p className='flex items-center space-x-4'>
                        <span className='font-bold'>34</span>
                        <span className='text-[#948D8D] text-xs'>
                           Employees
                        </span>
                     </p>
                     <h3 className='font-bold py-3'>Employee timeoff</h3>
                     <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                           <div className='flex space-x-2 items-center'>
                              <div className='relative w-8 h-8 '>
                                 <Image
                                    src='https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                                    alt=''
                                    layout='fill'
                                    className='rounded-full'
                                 />
                              </div>
                              <div>
                                 <p className='font-semibold tracking-wider capitalize text-sm'>
                                    John Doe
                                 </p>
                                 <p className='text-[#948D8D] capitalize text-xs'>
                                    Sick leave
                                 </p>
                              </div>
                           </div>

                           <p className='text-xs font-bold text-[#948D8D]'>
                              3-5 Jan 2022
                           </p>
                        </div>
                        <div className='flex justify-between items-center'>
                           <div className='flex space-x-2 items-center'>
                              <div className='relative w-8 h-8 '>
                                 <Image
                                    src='https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                                    alt=''
                                    layout='fill'
                                    className='rounded-full'
                                 />
                              </div>
                              <div>
                                 <p className='font-semibold tracking-wider capitalize text-sm'>
                                    John Doe
                                 </p>
                                 <p className='text-[#948D8D] capitalize text-xs'>
                                    Sick leave
                                 </p>
                              </div>
                           </div>

                           <p className='text-xs font-bold text-[#948D8D]'>
                              3-5 Jan 2022
                           </p>
                        </div>
                        <div className='flex justify-between items-center'>
                           <div className='flex space-x-2 items-center'>
                              <div className='relative w-8 h-8 '>
                                 <Image
                                    src='https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                                    alt=''
                                    layout='fill'
                                    className='rounded-full'
                                 />
                              </div>
                              <div>
                                 <p className='font-semibold tracking-wider capitalize text-sm'>
                                    John Doe
                                 </p>
                                 <p className='text-[#948D8D] capitalize text-xs'>
                                    Sick leave
                                 </p>
                              </div>
                           </div>

                           <p className='text-xs font-bold text-[#948D8D]'>
                              3-5 Jan 2022
                           </p>
                        </div>
                     </div>
                  </div>
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
                              <p>Employee</p>
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
                              <p>Role</p>
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
                              <p>Base salary</p>
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
                              <p>Taxes</p>
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
                              <p>Net salary</p>
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
                              <p>Payment Status</p>
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
                                       {job.employee.name}
                                    </p>
                                    <p className='text-[#948D8D]'>
                                       {job.employee.role}
                                    </p>
                                 </div>
                              </div>
                           </td>
                           <td className='text-xs'>{job.job}</td>
                           <td className='text-gray4 font-[700]'>
                              <div className='flex flex-col'>
                                 <p className='text-xs'>${job.base_salary}</p>
                              </div>
                           </td>
                           <td className='text-gray4 font-[700]'>
                              <div className='flex flex-col'>
                                 <p className='text-xs'>${job.taxes}</p>
                              </div>
                           </td>
                           <td>
                              <span className='text-[#948D8D] font-[700] text-xs'>
                                 ${job.amount}
                              </span>
                           </td>
                           <td>
                              <span
                                 className={`p-2 text-xs ${
                                    job.paymentStatus === 'Paid'
                                       ? 'text-blue-600 bg-blue-200'
                                       : job.paymentStatus === 'unPaid'
                                       ? 'text-red-600 bg-red-200'
                                       : 'text-yellow-400 bg-yellow-100'
                                 }`}
                              >
                                 {job.paymentStatus}
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

export default Payroll;
