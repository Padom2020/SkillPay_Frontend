import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

type Props = {};

const Newsletter = (props: Props) => {
   return (
      <div className='px-2 lg:px-0 w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[65%] mx-auto space-y-4'>
         <div className='pt-5'>
            <h2 className='font-bold text-center'>Newsletter</h2>
            <p className='text-center w-full px-3 sm:px-0 sm:w-[80%] lg:w-[60%] mx-auto text-xs md:text-sm pb-5'>
               It is a long established fact that a reader will be distracted by
               the readable content of a page when looking at its layout.
            </p>
            <div className='flex space-x-1 sm:space-x-3 w-full px-3 sm:w-[80%] lg:w-[50%] mx-auto'>
               <div className='w-full relative'>
                  <input
                     type='text'
                     placeholder='Enter your email address'
                     className='pl-7 pr-9 py-1 w-full rounded-sm placeholder:text-gray-300 placeholder:text-xs outline-none bg-white text-gray-800 ring-1 ring-gray-200 text-sm md:text-base'
                  />
                  <AiOutlineMail className='absolute top-1.5 lg:top-2.5 left-2 text-gray-300' />
               </div>
               <button className=' bg-orange px-3 py-1 text-white rounded-sm lg:rounded-md right-2 text-sm ring-1 ring-orange'>
                  Subscribe
               </button>
            </div>
         </div>
      </div>
   );
};

export default Newsletter;
