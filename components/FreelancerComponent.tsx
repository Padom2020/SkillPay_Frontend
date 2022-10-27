import Image from 'next/image';
import React from 'react';
import { freelancerTRype } from '../interfaces';
import { BsCheckCircle } from 'react-icons/bs';
import { BiMessageAltDetail } from 'react-icons/bi';
import { MdOutlinePersonOutline, MdOutlineVerified } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
type Props = {};

const FreelancerComponent = ({ freelancer }) => {
   //max rating
   const MAX_RATING = 5;

   return (
      <div className='space-y-2 bg-white drop-shadow-md px-7 py-5 rounded-sm'>
         <div className='flex justify-between '>
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
                  <p className='font-semibold tracking-wider capitalize text-sm md:text-base'>
                     {freelancer?.name}
                  </p>
                  <p className='text-gray-500 capitalize text-xs md:text-sm'>
                     {freelancer?.title}
                  </p>
               </div>
            </div>
            {freelancer?.verified && (
               <div className='mt-2'>
                  <MdOutlineVerified className='w-4 h-4 text-[#0ca789]' />
               </div>
            )}
         </div>

         <p className='text-gray-500 text-xs truncate-line-clamp'>
            {freelancer?.Bio}
         </p>
         <div className='flex justify-between'>
            <div className='flex items-center space-x-1'>
               <BsCheckCircle className='text-green-600' />
               <p className='text-xs capitalize'>
                  <b>{freelancer?.jobCompleted}</b> Job completed
               </p>
            </div>
            {freelancer?.rating !== 0 ? (
               <div className='flex items-center'>
                  {Array(freelancer?.rating)
                     // @ts-expect-error
                     .fill()
                     .map((_, i) => (
                        <AiFillStar
                           key={i}
                           className='text-[#FFC303] w-4 h-4'
                        />
                     ))}
                  {Array(MAX_RATING - freelancer?.rating)
                     // @ts-expect-error
                     .fill()
                     .map((_, i) => (
                        <AiOutlineStar
                           key={i}
                           className='text-[#FFC303] w-4 h-4'
                        />
                     ))}
               </div>
            ) : (
               <div className='flex items-center'>
                  {Array(MAX_RATING)
                     // @ts-expect-error
                     .fill()
                     .map((_, i) => (
                        <AiOutlineStar
                           key={i}
                           className='text-[#FFC303] w-5 h-5'
                        />
                     ))}
               </div>
            )}
         </div>
         <div className='flex space-x-5'>
            <button className='bg-white ring-1 ring-orange flex items-center space-x-1 justify-center  rounded-sm w-full text-xs py-1'>
               <BiMessageAltDetail className='text-orange' />
               <span className='text-orange'>Message</span>
            </button>
            <button className=' bg-orange ring-1 ring-orange flex items-center justify-center space-x-1  rounded-sm w-full text-xs py-1'>
               <MdOutlinePersonOutline className='text-white' />
               <span className='text-white'>View Profile</span>
            </button>
         </div>
      </div>
   );
};

export default FreelancerComponent;
