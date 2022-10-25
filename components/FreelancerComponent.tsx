import Image from 'next/image';
import React from 'react';
import { freelancerTRype } from '../interfaces';
import { BsCheckCircle } from 'react-icons/bs';
import { BiMessageAltDetail } from 'react-icons/bi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
type Props = {};

const FreelancerComponent = ({ freelancer }) => {
   return (
      <div className='space-y-3 bg-gray-50 p-5 rounded-md'>
         <div className='flex space-x-2 items-center'>
            <div className='relative w-8 h-8 '>
               <Image
                  src={freelancer?.picture}
                  alt=''
                  layout='fill'
                  className='rounded-full'
               />
            </div>
            <div>
               <p className='font-semibold tracking-wider capitalize text-lg'>
                  {freelancer?.name}
               </p>
               <p className='text-gray-500 capitalize'>{freelancer?.title}</p>
            </div>
         </div>

         <p className='text-gray-500 text-sm truncate-line-clamp'>
            {freelancer?.Bio}
         </p>
         <div className='flex justify-between'>
            <div className='flex items-center space-x-1'>
               <BsCheckCircle className='text-green-600' />
               <p>1 job completed</p>
            </div>
            <div className='flex space-x-1'>
               {[1, 2, 3, 4, 5].map((rate, index) => (
                  <p key={index}>
                     <AiOutlineStar className='text-[#FFC303] w-5 h-5' />
                  </p>
               ))}
            </div>
         </div>
         <div className='flex space-x-2'>
            <button className='bg-white ring-1 ring-orange flex items-center space-x-2 justify-center py-1 rounded-sm w-full'>
               <BiMessageAltDetail className='text-orange' />
               <span className='text-orange'>Message</span>
            </button>
            <button className=' bg-orange ring-1 ring-orange flex items-center justify-center space-x-2 px-2 py-1 rounded-sm w-full'>
               <MdOutlinePersonOutline className='text-white' />
               <span className='text-white'>View Profile</span>
            </button>
         </div>
      </div>
   );
};

export default FreelancerComponent;
