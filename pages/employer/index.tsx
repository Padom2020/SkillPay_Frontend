import Image from 'next/image';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import Layout from '../../components/employer/Layout';

const Index = () => {
   //process array
   const ProcessArray = [
      {
         id: 1,
         title: 'New',
         NumOfPeople: 11,
         level: '4%',
      },
      {
         id: 2,
         title: 'In review',
         NumOfPeople: 8,
         level: '-4%',
      },
      {
         id: 3,
         title: 'Interview',
         NumOfPeople: 3,
         level: '-4%',
      },
      {
         id: 4,
         title: 'Hired',
         NumOfPeople: 5,
         level: '-4%',
      },
      {
         id: 5,
         title: 'Rejected',
         NumOfPeople: 1,
         level: '-4%',
      },
   ];
   return (
      <Layout title='SkillPay | Employer Dashboard'>
         <div className='pt-10 md:max-w-[90%]'>
            <div className='flex items-center justify-between px-3 lg:px-0 pb-5'>
               <h3 className='font-bold text-sm lg:text-lg'>Dashboard</h3>
               <div className='flex items-center space-x-3 bg-[#f3f4f6] p-1 rounded-sm'>
                  <FaCalendarAlt className='text-sm' />
                  <div className='flex items-center space-x-2 text-sm'>
                     <p>Time period: Today</p>
                     <AiFillCaretDown />
                  </div>
               </div>
            </div>

            {/* grid section */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2 md:grid-cols-5 lg:grid-cols-5 md:max-w-[80%] px-3 lg:px-0 md:pb-8'>
               {ProcessArray?.map((process) => (
                  <div
                     key={process.id}
                     className='bg-white border border-[#f3f4f6] py-4 px rounded-md w-full flex items-center justify-center'
                  >
                     <div className='flex flex-col'>
                        <p className='whitespace-nowrap'>{process.title}</p>
                        <span>{process.NumOfPeople}</span>
                        <button
                           className={`text-xs w-8 p-1 ${
                              process.level === '4%'
                                 ? 'bg-green-200 text-green-600'
                                 : 'bg-red-200 text-red-600'
                           }`}
                        >
                           {process.level}
                        </button>
                     </div>
                  </div>
               ))}
            </div>
            {/* Body */}
            <div className='flex flex-col lg:flex-row w-full px-3 md:px-0 lg:space-x-3'>
               {/* overview */}
               <div className='lg:w-[60%] space-y-5 pl-3 pt-5 md:pt-0'>
                  <div className='border p-5 rounded-md'>
                     <div className='w-[90%]'>
                        <h3 className='font-bold pb-5'>Overview</h3>
                        <div className='flex items-center justify-between pb-8'>
                           <div className='flex flex-col w-full '>
                              <span className='font-bold'>34</span>
                              <span className='text-xs text-[#9ca3af]'>
                                 Applications
                              </span>
                           </div>
                           <div className='flex flex-col border-r border-l border-[#f3f4f6] w-full justify-center items-center'>
                              <span className='font-bold'>14</span>
                              <span className='text-xs text-[#9ca3af]'>
                                 Candidates
                              </span>
                           </div>

                           <div className='flex flex-col w-full justify-center items-center'>
                              <span className='font-bold'>88%</span>
                              <span className='text-xs text-[#9ca3af]'>
                                 Hire Rate
                              </span>
                           </div>
                        </div>
                        <div className='w-[90%] space-y-3'>
                           <div className='flex items-center justify-between'>
                              <p className='text-[#84848a] text-xs'>
                                 Total job views
                              </p>
                              <span className='text-xs font-semibold'>110</span>
                           </div>
                           <div className='flex items-center justify-between'>
                              <p className='text-[#84848a] text-xs'>
                                 Average response per job
                              </p>
                              <span className='text-xs font-semibold'>110</span>
                           </div>
                           <div className='flex items-center justify-between'>
                              <p className='text-[#84848a] text-xs'>
                                 Avg time to recruit
                              </p>
                              <span className='text-xs font-semibold'>
                                 18 Days
                              </span>
                           </div>
                           <div className='flex items-center justify-between'>
                              <p className='text-[#84848a] text-xs'>
                                 Avg candidate success raxs
                              </p>
                              <span className='text-xs font-semibold'>45%</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* upcoming events */}
                  <div className='border p-5 rounded-md'>
                     <div className='w-[90%]'>
                        <div className='flex items-center justify-between pb-4'>
                           <h3 className='font-bold'>Upcoming Interviews</h3>
                           <p className='text-sm text-orange'>View all</p>
                        </div>

                        <div className='space-y-2'>
                           <div className='flex justify-between '>
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
                                    <p className='font-semibold tracking-wider capitalize text-sm md:text-base'>
                                       John Doe
                                    </p>
                                    <p className='text-gray-500 capitalize text-xs md:text-sm'>
                                       UI/UX Designer, Web Developer
                                    </p>
                                 </div>
                              </div>

                              <p className='text-xs'>
                                 Jan <span className='font-bold'>11</span>
                              </p>
                           </div>
                           <div className='flex justify-between '>
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
                                    <p className='font-semibold tracking-wider capitalize text-sm md:text-base'>
                                       John Doe
                                    </p>
                                    <p className='text-gray-500 capitalize text-xs md:text-sm'>
                                       UI/UX Designer, Web Developer
                                    </p>
                                 </div>
                              </div>

                              <p className='text-xs'>
                                 Jan <span className='font-bold'>11</span>
                              </p>
                           </div>
                           <div className='flex justify-between '>
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
                                    <p className='font-semibold tracking-wider capitalize text-sm md:text-base'>
                                       John Doe
                                    </p>
                                    <p className='text-gray-500 capitalize text-xs md:text-sm'>
                                       UI/UX Designer, Web Developer
                                    </p>
                                 </div>
                              </div>

                              <p className='text-xs'>
                                 Jan <span className='font-bold'>11</span>
                              </p>
                           </div>
                           <div className='flex justify-between '>
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
                                    <p className='font-semibold tracking-wider capitalize text-sm md:text-base'>
                                       John Doe
                                    </p>
                                    <p className='text-gray-500 capitalize text-xs md:text-sm'>
                                       UI/UX Designer, Web Developer
                                    </p>
                                 </div>
                              </div>

                              <p className='text-xs'>
                                 Jan <span className='font-bold'>11</span>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Job listing */}
               <div className='lg:w-[40%] pl-3 pt-5 lg:pt-0'>
                  <div className='border p-5 rounded-md'>
                     <div className='w-[90%]'>
                        <h3 className='font-bold pb-5'>Job listings</h3>
                        <div className='space-y-4'>
                           <div className=''>
                              <div className='flex space-x-2 items-center'>
                                 <div className='relative w-8 h-8 '>
                                    <Image
                                       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUScqW4YTyBJ0Lg5GHQYI9TuRsM7rXzNWzw&usqp=CAU'
                                       alt=''
                                       layout='fill'
                                       className='rounded-full drop-shadow'
                                    />
                                 </div>
                                 <div>
                                    <p className='font-semibold tracking-wider capitalize text-sm'>
                                       Google Virtual Schedular
                                    </p>
                                    <p className='text-[#948D8D] capitalize text-xs'>
                                       London- Google Inc
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className=''>
                              <div className='flex space-x-2 items-center'>
                                 <div className='relative w-8 h-8 '>
                                    <Image
                                       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUScqW4YTyBJ0Lg5GHQYI9TuRsM7rXzNWzw&usqp=CAU'
                                       alt=''
                                       layout='fill'
                                       className='rounded-full drop-shadow'
                                    />
                                 </div>
                                 <div>
                                    <p className='font-semibold tracking-wider capitalize text-sm'>
                                       Google Virtual Schedular
                                    </p>
                                    <p className='text-[#948D8D] capitalize text-xs'>
                                       London- Google Inc
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className=''>
                              <div className='flex space-x-2 items-center'>
                                 <div className='relative w-8 h-8 '>
                                    <Image
                                       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUScqW4YTyBJ0Lg5GHQYI9TuRsM7rXzNWzw&usqp=CAU'
                                       alt=''
                                       layout='fill'
                                       className='rounded-full drop-shadow'
                                    />
                                 </div>
                                 <div>
                                    <p className='font-semibold tracking-wider capitalize text-sm'>
                                       Google Virtual Schedular
                                    </p>
                                    <p className='text-[#948D8D] capitalize text-xs'>
                                       London- Google Inc
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className=''>
                              <div className='flex space-x-2 items-center'>
                                 <div className='relative w-8 h-8 '>
                                    <Image
                                       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUScqW4YTyBJ0Lg5GHQYI9TuRsM7rXzNWzw&usqp=CAU'
                                       alt=''
                                       layout='fill'
                                       className='rounded-full drop-shadow'
                                    />
                                 </div>
                                 <div>
                                    <p className='font-semibold tracking-wider capitalize text-sm'>
                                       Google Virtual Schedular
                                    </p>
                                    <p className='text-[#948D8D] capitalize text-xs'>
                                       London- Google Inc
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Index;
