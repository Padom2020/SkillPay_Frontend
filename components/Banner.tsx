import Image from 'next/image';
import React from 'react';
import BannerImage from '../assets/images/bannergirlnew.png';
import { MdWorkOutline, MdGroups } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';

type Props = {};

const Banner = (props: Props) => {
   return (
      <div className='bg-primary h-[450px]'>
         <div className='max-w-[70%] mx-auto flex flex-row h-full items-center'>
            <div className='text-white w-[60%] pt-5'>
               <h2 className='capitalize font-bold text-4xl pb-2'>
                  Find & Hire{' '}
               </h2>
               <h2 className='capitalize font-bold text-4xl pb-2'>
                  Expert Freelancers With Ease
               </h2>
               <p className='text-sm font-thin w-[80%] pb-5'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
               </p>
               <div className='flex items-center space-x-3 pb-6'>
                  <button className='flex items-center space-x-1 bg-orange px-3 py-2 rounded-sm'>
                     <MdWorkOutline className='text-white' />
                     <span className='font-medium'>Post Job</span>
                  </button>
                  <div className='w-[70%] relative'>
                     <input
                        type='text'
                        placeholder='Search for freelancers'
                        className='pl-3 pr-9 py-2 rounded-sm w-full placeholder:text-gray-200 placeholder:text-xs outline-none bg-white text-gray-800'
                     />
                     <button className='absolute top-2 bg-orange p-1 rounded-sm right-2'>
                        <BiSearch />
                     </button>
                  </div>
               </div>
               <div className='flex space-x-4'>
                  <div className='flex flex-col px-6 border border-purple-600 py-2 rounded-md'>
                     <div className='flex items-center space-x-2'>
                        <MdWorkOutline className='text-white w-5 h-5' />
                        <span className='font-medium text-xl'>21.9k</span>
                     </div>
                     <p className='text-sm'>Posted Jobs</p>
                  </div>
                  <div className='flex flex-col px-6 border border-purple-600 py-2 rounded-md'>
                     <div className='flex items-center space-x-2'>
                        <MdGroups className='text-red-500 w-6 h-6' />
                        <span className='font-medium text-xl'>21.9k</span>
                     </div>
                     <p className='text-sm'>Posted Jobs</p>
                  </div>
                  <div className='flex flex-col px-6 border border-purple-600 py-2 rounded-md'>
                     <div className='flex items-center space-x-2'>
                        <BsCheckCircle className='text-green-600 w-6 h-6' />
                        <span className='font-medium text-xl'>21.9k</span>
                     </div>
                     <p className='text-sm'>Posted Jobs</p>
                  </div>
               </div>
            </div>
            <div className='w-[40%] pt-3 '>
               <div className='relative w-[430px] h-[440px]'>
                  <Image src={BannerImage} layout='fill' alt='' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
