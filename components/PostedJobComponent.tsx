import React from 'react';
import { MdWorkOutline, MdAccessTime } from 'react-icons/md';
import { BsBarChart } from 'react-icons/bs';
import Image from 'next/image';

type Props = {};

const PostedJobComponent = ({ postedJob }) => {
   return (
      <div className='space-y-2 bg-white drop-shadow-md  p-5 rounded-sm '>
         <div className='space-y-2 w-[90%] mx-auto'>
            <div className='justify-center flex items-center'>
               <div className='relative w-12 h-12  '>
                  <Image
                     src={postedJob?.jobLogo}
                     alt=''
                     layout='fill'
                     className=''
                  />
               </div>
            </div>
            <p className='text-sm text-center capitalize font-bold'>
               {postedJob?.jobTitle}
            </p>
            <p className='text-xs lg:text-[11px] text-center truncate-line-clamp'>
               {postedJob?.description}
            </p>
            <div className='flex items-center justify-evenly space-x-2 text-gray-400 text-xs lg:text-[10px] whitespace-nowrap'>
               <div className='flex items-center space-x-1'>
                  <MdWorkOutline />
                  <p>{postedJob?.jobType}</p>
               </div>
               <div className='flex items-center space-x-1'>
                  <BsBarChart />
                  <p>{postedJob?.jobLevel}</p>
               </div>
               <div className='flex items-center space-x-1'>
                  <MdAccessTime />
                  <p>{postedJob?.jobDuration}</p>
               </div>
            </div>
            <button className='w-full bg-white ring-1 ring-orange text-xs py-2 lg:py-1.5 text-orange font-semibold rounded-sm'>
               Read More
            </button>
         </div>
      </div>
   );
};

export default PostedJobComponent;
