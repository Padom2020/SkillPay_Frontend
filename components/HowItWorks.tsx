import React from 'react';
import { MdOutlinePersonOutline, MdWorkOutline } from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';

type Props = {};

const HowItWorks = (props: Props) => {
   return (
      <div className='flex flex-col items-center justify-center mt-3'>
         <h2 className='font-bold text-lg'>How it works</h2>
         <p className='text-center text-sm text-gray-400'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
         </p>
         <div className='flex space-x-7 mt-4'>
            <div className='flex flex-col items-center'>
               <span className='bg-orange p-2 rounded-full'>
                  <MdOutlinePersonOutline className='text-white' />
               </span>
               <p className='font-bold'>Create Account</p>
               <p className='text-xs text-gray-400'>
                  First you have to create an account here
               </p>
            </div>
            <div className='flex flex-col items-center'>
               <span className='bg-primary p-2 rounded-full'>
                  <MdWorkOutline className='text-white' />
               </span>
               <p className='font-bold'>Search Work</p>
               <p className='text-xs text-gray-400'>
                  First you have to create an account here
               </p>
            </div>
            <div className='flex flex-col items-center'>
               <span className='bg-[#0CA789] p-2 rounded-full'>
                  <AiOutlineSave className='text-white' />
               </span>
               <p className='font-bold'>Save and apply</p>
               <p className='text-xs text-gray-400'>
                  First you have to create an account here
               </p>
            </div>
         </div>
      </div>
   );
};

export default HowItWorks;
