import Image from 'next/image';
import React from 'react';
import BannerImage from '../assets/images/bannergirlnew.png';
import { MdWorkOutline, MdGroups } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';

type Props = {};

const Banner = (props: Props) => {
   return (
      <div className='bg-primary h-[250px] md:h-[370px] lg:h-[450px]'>
         <div className='w-full px-3 md:max-w-[90%] lg:max-w-[70%] md:mx-auto lg:px-0 flex flex-row h-full items-center'>
            <div className='text-white sm:w-[60%] pt-3 md:pt-5'>
               <h2 className='capitalize font-bold text-2xl lg:text-4xl md:pb-2'>
                  Find & Hire{' '}
               </h2>
               <h2 className='capitalize font-bold text-2xl lg:text-4xl pb-2'>
                  Expert Freelancers With Ease
               </h2>
               <p className='text-xs md:text-sm font-thin w-[80%] pb-2 md:pb-5'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
               </p>
               <div className='flex items-center space-x-3 pb-3 md:pb-6'>
                  <button className='flex items-center space-x-1 bg-orange px-3 py-1 md:py-2 rounded-sm'>
                     <MdWorkOutline className='text-white w-3 h-3 lg:w-6 lg:h-6' />
                     <span className='font-medium text-xs md:text-sm lg:text-base whitespace-nowrap'>
                        Post Job
                     </span>
                  </button>
                  <div className='w-full md:w-[60%] lg:w-[70%] relative'>
                     <input
                        type='text'
                        placeholder='Search for freelancers'
                        className='pl-3 pr-9 py-1 md:py-2 rounded-sm w-full placeholder:text-gray-200 placeholder:text-xs outline-none bg-white text-gray-800 text-xs md:text-sm lg:text-base'
                     />
                     <button className='absolute top-1 md:top-1.5 lg:top-2 bg-orange p-1 rounded-sm right-1 md:right-2'>
                        <BiSearch className='w-3 h-3 md:w-4 md:h-4' />
                     </button>
                  </div>
               </div>
               <div className='flex space-x-4'>
                  <div className='flex flex-col px-2 md:px-4 lg:px-6 border border-purple-600 py-1 md:py-3 rounded-md h-full'>
                     <div className='flex items-center space-x-2'>
                        <MdWorkOutline className='text-white w-4 h-4 lg:w-6 lg:h-6' />
                        <span className='font-medium text-sm lg:text-xl'>
                           21.9k
                        </span>
                     </div>
                     <p className='text-xs lg:text-sm whitespace-nowrap'>
                        Posted Jobs
                     </p>
                  </div>
                  <div className='flex flex-col px-2 md:px-4 lg:px-6 border border-purple-600 py-1 md:py-3 rounded-md h-full'>
                     <div className='flex items-center space-x-2'>
                        <MdGroups className='text-red-500 w-4 h-4 lg:w-6 lg:h-6' />
                        <span className='font-medium text-sm lg:text-xl'>
                           21.9k
                        </span>
                     </div>
                     <p className='text-xs lg:text-sm whitespace-nowrap'>
                        Posted Jobs
                     </p>
                  </div>
                  <div className='flex flex-col px-2 md:px-4 lg:px-6 border border-purple-600 py-1 md:py-3 rounded-md h-full'>
                     <div className='flex items-center space-x-2'>
                        <BsCheckCircle className='text-green-600 w-4 h-4 lg:w-6 lg:h-6' />
                        <span className='font-medium text-sm lg:text-xl'>
                           21.9k
                        </span>
                     </div>
                     <p className='text-xs lg:text-sm whitespace-nowrap'>
                        Posted Jobs
                     </p>
                  </div>
               </div>
            </div>
            <div className='sm:w-[40%] sm:pt-5 lg:pt-3 '>
               <div className='relative hidden sm:block sm:w-[220px] sm:h-[230px] md:w-[320px] md:h-[350px] lg:w-[430px] lg:h-[440px]'>
                  <Image src={BannerImage} layout='fill' alt='' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
