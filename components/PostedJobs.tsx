import React from 'react';
import { postedJobs } from '../mockData';
import PostedJobComponent from './PostedJobComponent';

type Props = {};

const PostedJobs = () => {
   return (
      <div className='w-full px-2 lg:px-0 md:max-w-[65%] mx-auto mt-4'>
         <div className='flex items-center justify-between px-1 py-5'>
            <p className='capitalize font-bold'>
               Check out some expert freelancers
            </p>
            <p className='text-sm text-gray-500'>View all</p>
         </div>
         <div className='grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 '>
            {postedJobs?.map((postedJob) => (
               <div key={postedJob?.id} className='w-[95%] mx-auto'>
                  <PostedJobComponent postedJob={postedJob} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default PostedJobs;
