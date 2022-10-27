import React from 'react';
import { freelancers } from '../mockData';

import FreelancerComponent from './FreelancerComponent';

type Props = {};

const Freelancers = () => {
   return (
      <div className='w-full px-2 lg:px-0 md:max-w-[90%] lg:max-w-[80%] xl:max-w-[65%] mx-auto mt-4'>
         <div className='flex items-center justify-between px-1 py-5'>
            <p className='capitalize font-bold text-sm md:text-base'>
               Check out some expert freelancers
            </p>
            <p className='text-xs font-medium md:text-sm text-gray-500'>
               View All
            </p>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3'>
            {freelancers?.map((freelancer) => (
               <div key={freelancer?.id} className='w-[95%] mx-auto'>
                  <FreelancerComponent freelancer={freelancer} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Freelancers;
