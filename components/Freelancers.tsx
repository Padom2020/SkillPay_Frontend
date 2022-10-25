import React from 'react';
import { freelancers } from '../mockData';

import FreelancerComponent from './FreelancerComponent';

type Props = {};

const Freelancers = () => {
   return (
      <div className='max-w-[70%] mx-auto mt-4'>
         <div className='flex items-center justify-between py-3'>
            <p className='capitalize font-semibold'>
               Check out some expert freelancers
            </p>
            <p className='text-sm text-gray-500'>View all</p>
         </div>
         <div>
            {freelancers?.map((freelancer) => (
               <div key={freelancer?.id}>
                  <FreelancerComponent freelancer={freelancer} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Freelancers;
