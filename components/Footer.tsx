import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineMail } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { FiPhoneCall } from 'react-icons/fi';

type Props = {};

const Footer = (props: Props) => {
   return (
      <div className='px-4 lg:px-0 w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[65%] mx-auto'>
         {/* footer for main view */}
         <div className='pt-7 hidden lg:flex justify-between space-x-10'>
            <div className='w-full'>
               <h3 className='flex-1 text-sm font-semibold pb-2'>
                  <span className='text-primary font-semibold'>Skill</span>
                  <span className='text-orange font-semibold'>Pay</span>
               </h3>
               <p className='text-gray-600 text-xs'>
                  It is a long established fact that a reader will be distracted
                  a page when looking at its layout.
               </p>
            </div>
            <div className='w-full -mt-1'>
               <p className='font-semibold pb-2'>For Clients</p>
               <div className='text-xs text-gray-600 space-y-1'>
                  <ul>Find Freelancers</ul>
                  <ul>Post Project</ul>
                  <ul>Refund Policy</ul>
                  <ul>Privacy Policy</ul>
               </div>
            </div>
            <div className='w-full -mt-1'>
               <p className='font-semibold pb-2'>For Freelancers</p>
               <div className='text-xs text-gray-600 space-y-1'>
                  <ul>Find Work</ul>
                  <ul>Create Account</ul>
               </div>
            </div>
            <div className='w-full -mt-1'>
               <p className='font-semibold pb-2'>Contact Us</p>
               <div className='text-sm text-gray-600 space-y-2'>
                  <div className='flex items-center space-x-2'>
                     <SlLocationPin />
                     <p className='text-xs'>Port Harcourt</p>
                  </div>
                  <div className='flex items-center space-x-2'>
                     <FiPhoneCall />
                     <p className='text-xs'>+1234567890</p>
                  </div>
                  <div className='flex items-center space-x-2'>
                     <AiOutlineMail />
                     <p className='text-xs'>bluelance@gmail.com</p>
                  </div>
               </div>
            </div>
         </div>
         {/* footer for mobile view */}
         <div className=' lg:hidden pt-5 space-y-3'>
            <div className='w-full'>
               <h3 className='flex-1 text-sm font-semibold pb-2 text-center'>
                  <span className='text-primary font-semibold'>Skill</span>
                  <span className='text-orange font-semibold'>Pay</span>
               </h3>
               <p className='text-gray-600 text-xs text-center'>
                  It is a long established fact that a reader will be distracted
                  a page when looking at its layout.
               </p>
            </div>
            <div className='flex flex-row justify-evenly space-x-2'>
               <div className='-mt-1'>
                  <p className='font-semibold pb-2 text-sm'>For Clients</p>
                  <div className='text-xs text-gray-600 space-y-1'>
                     <ul>Find Freelancers</ul>
                     <ul>Post Project</ul>
                     <ul>Refund Policy</ul>
                     <ul>Privacy Policy</ul>
                  </div>
               </div>
               <div className='-mt-1'>
                  <p className='font-semibold pb-2 text-sm'>For Freelancers</p>
                  <div className='text-xs text-gray-600 space-y-1'>
                     <ul>Find Work</ul>
                     <ul>Create Account</ul>
                  </div>
               </div>
               <div className='-mt-1'>
                  <p className='font-semibold pb-2 text-sm'>Contact Us</p>
                  <div className='text-sm text-gray-600 space-y-2'>
                     <div className='flex items-center space-x-2'>
                        <SlLocationPin />
                        <p className='text-xs'>Port Harcourt</p>
                     </div>
                     <div className='flex items-center space-x-2'>
                        <FiPhoneCall />
                        <p className='text-xs'>+1234567890</p>
                     </div>
                     <div className='flex items-center space-x-2'>
                        <AiOutlineMail />
                        <p className='text-xs'>bluelance@gmail.com</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
