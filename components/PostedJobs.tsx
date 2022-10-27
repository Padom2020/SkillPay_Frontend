import React from 'react';
import { postedJobs } from '../mockData';
import PostedJobComponent from './PostedJobComponent';

type Props = {};

const PostedJobs = () => {
   return (
      <div className='w-full px-2 lg:px-0 md:max-w-[90%] lg:max-w-[80%] xl:max-w-[65%] mx-auto mt-4 pb-7 lg:pb-10'>
         <div className='flex items-center justify-between px-1 py-5'>
            <p className='capitalize font-bold text-sm md:text-base'>
               Recently Posted Jobs
            </p>
            <p className='text-xs md:text-sm font-medium text-gray-500 capitalize'>
               View all Jobs
            </p>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 '>
            {postedJobs?.slice(0, 6).map((postedJob) => (
               <div key={postedJob?.id} className='w-[95%] mx-auto'>
                  <PostedJobComponent postedJob={postedJob} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default PostedJobs;
