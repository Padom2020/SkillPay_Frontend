import React from 'react';
import { MdOutlinePersonOutline, MdWorkOutline } from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';

type Props = {};

const HowItWorks = (props: Props) => {
   return (
      <div className='flex flex-col items-center justify-center mt-3 px-3 lg:px-0 md:max-w-[70%] md:mx-auto'>
         <h2 className='font-bold text-base md:text-lg whitespace-nowrap'>
            How it works
         </h2>
         <p className='text-center text-sm text-gray-400 w-[70%] lg:w-[50%] mx-auto'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
         </p>
         <div className='flex space-x-3 md:space-x-5 lg:space-x-7 mt-4'>
            <div className='flex flex-col items-center bg-white drop-shadow-md p-3 md:p-5 h-full space-y-1'>
               <span className='bg-orange p-2 rounded-full'>
                  <MdOutlinePersonOutline className='text-white' />
               </span>
               <p className='font-bold text-xs md:text-sm lg:text-base'>
                  Create Account
               </p>
               <p className='text-xs text-gray-400 lg:w-1/2 text-center'>
                  First you have to create an account here
               </p>
            </div>
            <div className='flex flex-col items-center bg-white drop-shadow-md p-3 md:p-5 h-full space-y-1'>
               <span className='bg-primary p-2 rounded-full'>
                  <MdWorkOutline className='text-white' />
               </span>
               <p className='font-bold text-xs md:text-sm lg:text-base'>
                  Search Work
               </p>
               <p className='text-xs text-gray-400 lg:w-1/2 text-center'>
                  First you have to create an account here
               </p>
            </div>
            <div className='flex flex-col items-center bg-white drop-shadow-md p-3 md:p-5 h-full space-y-1'>
               <span className='bg-[#0CA789] p-2 rounded-full'>
                  <AiOutlineSave className='text-white' />
               </span>
               <p className='font-bold text-xs md:text-sm lg:text-base'>
                  Save and apply
               </p>
               <p className='text-xs text-gray-400 lg:w-1/2 text-center'>
                  First you have to create an account here
               </p>
            </div>
         </div>
      </div>
   );
};

export default HowItWorks;
