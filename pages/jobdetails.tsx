import Image from 'next/image';
import React, { useState } from 'react';
import { BsBarChart, BsCurrencyEuro, BsTwitter } from 'react-icons/bs';
import { MdAccessTime, MdWorkOutline } from 'react-icons/md';
import Layout from '../components/Layout';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

type Props = {};

const JobDetails = (props: Props) => {
   const [modal, setModal] = useState(false);
   //open and close modal
   const handleModal = () => {
      setModal((current) => !current);
   };
   return (
      <Layout>
         <div className='sm:max-w-[90%] md:max-w-[85%] xl:max-w-[75%] mx-auto '>
            {/* jobdetail top */}
            <div className='flex justify-between px-5 md:px-0 py-10 items-center'>
               <div className='space-y-2'>
                  <h2 className='md:text-lg lg:text-xl font-semibold'>
                     Logo Designer
                  </h2>
                  <div className='flex items-center justify-evenly space-x-2 text-gray-400 text-xs lg:text-sm whitespace-nowrap'>
                     <div className='flex items-center space-x-1'>
                        <MdWorkOutline />
                        <p>Remote</p>
                     </div>
                     <div className='flex items-center space-x-1'>
                        <BsBarChart />
                        <p>Senior Level</p>
                     </div>
                     <div className='flex items-center space-x-1'>
                        <MdAccessTime />
                        <p>Contract</p>
                     </div>
                  </div>
                  <div className='flex items-center space-x-2 font-semibold text-xs md:text-sm'>
                     <div className='relative w-6 h-6  '>
                        <Image
                           src='https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                           alt=''
                           layout='fill'
                           className='rounded-full'
                        />
                     </div>
                     <h3>Dsignz Gloabal Concept</h3>
                  </div>
               </div>
               <div className='flex flex-col space-y-2'>
                  <button
                     className='bg-orange px-5 md:px-8 py-1 text-white text-xs md:text-sm'
                     onClick={handleModal}
                  >
                     Apply Now
                  </button>
                  <span className='text-xs text-[#9ca3af]'>
                     Posted 5 minutes ago
                  </span>
               </div>
            </div>
            {/* jobdetail body */}
            <div className='flex flex-col md:justify-between md:space-x-10 md:flex-row '>
               <div className='space-y-4 w-full md:w-[70%] border px-5 pt-5 pb-5 sm:pb-10 md:pb-20 lg:pb-28 border-[#e5e7eb]'>
                  <div>
                     <h3 className='font-semibold'>Description</h3>
                     <p className='text-xs lg:text-sm'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                     </p>
                  </div>
                  <div>
                     <h3 className='font-semibold'>Job Overview</h3>
                     <p className='text-xs lg:text-sm'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                     </p>
                  </div>
                  <div className='space-y-3'>
                     <h3 className='font-semibold'>Your Role</h3>
                     <div className='space-y-1 text-xs lg:text-sm pl-4'>
                        <p>
                           There are many variations of passages of Lorem Ipsum
                           available, but the majority have suffered alteration
                           in
                        </p>
                        <p>
                           There are many variations of passages of Lorem Ipsum
                           available, but the majority have suffered alteration
                           in
                        </p>
                        <p>
                           There are many variations of passages of Lorem Ipsum
                           available, but the majority have suffered alteration
                           in
                        </p>
                     </div>
                  </div>
               </div>
               <div className='w-full md:w-[40%] space-y-2'>
                  <div className='border py-5 px-5 md:px-2 border-[#e5e7eb]'>
                     <div className='flex items-center justify-between'>
                        <div>
                           <h4 className='text-sm font-semibold'>Job Type</h4>
                           <span className='text-xs text-[#6b7280]'>
                              Full Time
                           </span>
                        </div>
                        <div>
                           <h4 className='text-sm font-semibold'>Deadline</h4>
                           <span className='text-xs text-[#6b7280]'>
                              18 Aug, 2022
                           </span>
                        </div>
                        <div>
                           <h4 className='text-sm font-semibold'>Salary</h4>
                           <span className='text-xs text-[#6b7280]'>$780</span>
                        </div>
                     </div>
                     <p className='py-4 font-medium'>Sounds like a match?</p>
                     <button
                        className='bg-orange w-full rounded-sm py-1 text-white text-sm'
                        onClick={handleModal}
                     >
                        Apply Now
                     </button>
                  </div>
                  <div className='border px-5 md:px-2 py-3 space-y-2'>
                     <h3 className='font-medium text-sm'>Share this job</h3>
                     <div className='flex space-x-4 text-xs'>
                        <AiFillInstagram />
                        <BsTwitter />
                        <FaFacebookF />
                     </div>
                  </div>
                  <div className='pt-3 space-y-3 px-5 md:px-0 pb-7 md:pb-0'>
                     <h3 className='font-semibold'>Related Jobs</h3>
                     <div className='space-y-3'>
                        <div className='space-y-1'>
                           <h3 className='font-semibold text-sm'>
                              Logo Designer
                           </h3>
                           <p className='text-xs'>
                              There are many variations of passages of Lorem
                              Ipsum available,
                           </p>
                        </div>
                        <div className='space-y-1'>
                           <h3 className='font-semibold text-sm'>
                              Logo Designer
                           </h3>
                           <p className='text-xs'>
                              There are many variations of passages of Lorem
                              Ipsum available,
                           </p>
                        </div>
                        <div className='space-y-1'>
                           <h3 className='font-semibold text-sm'>
                              Logo Designer
                           </h3>
                           <p className='text-xs'>
                              There are many variations of passages of Lorem
                              Ipsum available,
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* the application modal */}
         {modal && (
            <div className='absolute top-0 bg-primary/30 w-full h-screen '>
               <div className='max-w-2xl bg-white mx-auto mt-12 p-5'>
                  <p
                     className='text-end text-[#d1d5db] pb-2 cursor-pointer'
                     onClick={handleModal}
                  >
                     x
                  </p>
                  <div className='border p-3 space-y-2'>
                     <div>
                        <h4 className='font-semibold tracking-wider text-sm'>
                           Logo Designer
                        </h4>
                        <p className='text-xs'>
                           Need a professional logo with writing underneath for
                           our...
                        </p>
                     </div>
                     <div className='space-y-2'>
                        <div className='flex flex-col space-y-1'>
                           <label className='text-sm text-[#9ca3af]'>
                              Email address
                           </label>
                           <input
                              type='text'
                              placeholder='Your email address'
                              className='bg-white placeholder:text-xs text-xs outline-none px-3 border rounded-sm py-1'
                           />
                        </div>
                        <div className='flex flex-col space-y-1'>
                           <label className='text-xs text-[#9ca3af]'>
                              First Name
                           </label>
                           <input
                              type='text'
                              placeholder='Your first name'
                              className='bg-white placeholder:text-xs text-xs outline-none px-3 border rounded-sm py-1'
                           />
                        </div>
                        <div className='flex flex-col space-y-1'>
                           <label className='text-xs text-[#9ca3af]'>
                              Surname
                           </label>
                           <input
                              type='text'
                              placeholder='Your surname'
                              className='bg-white placeholder:text-xs text-xs outline-none px-3 border rounded-sm py-1'
                           />
                        </div>
                        <div className='flex flex-col space-y-1'>
                           <label className='text-xs text-[#9ca3af]'>
                              Prefered Job Title
                           </label>
                           <input
                              type='text'
                              placeholder='Job title'
                              className='bg-white placeholder:text-xs text-xs outline-none px-3 border rounded-sm py-1'
                           />
                        </div>
                        <div className='flex flex-col space-y-1'>
                           <label
                              title='CV File'
                              htmlFor='pdfFile'
                              className='text-xs text-[#9ca3af] space-y-1'
                           >
                              <p>CV File</p>
                              <p className='bg-white  text-xs outline-none px-3 border rounded-sm py-1 text-[#9ca3af]'>
                                 Upload your CV here
                              </p>
                              <input
                                 hidden
                                 type='file'
                                 id='pdfFile'
                                 name='pdfFile'
                                 placeholder='Your surname'
                                 accept='.pdf'
                                 className='bg-white placeholder:text-xs text-xs outline-none px-3 border rounded-sm py-1'
                              />
                           </label>
                        </div>
                        <div className='flex flex-col space-y-1'>
                           <label className='text-xs text-[#9ca3af]'>
                              Cover Letter/Message
                           </label>
                           <textarea
                              style={{ resize: 'none' }}
                              id='message'
                              rows={5}
                              name='message'
                              placeholder='Your Cover Letter'
                              className='border px-2 py-1 text-xs outline-none'
                           />
                        </div>
                        <div className='space-y-1'>
                           <label
                              htmlFor='check'
                              className='flex text-xs space-x-2 items-center'
                           >
                              <input
                                 type='checkbox'
                                 className='text-sm'
                                 id='check'
                              />
                              <span className='text-xs'>
                                 Save my CV for future application
                              </span>
                           </label>
                           <label
                              htmlFor='check'
                              className='flex text-xs space-x-2 items-center'
                           >
                              <input
                                 type='checkbox'
                                 className='text-sm'
                                 id='check'
                              />
                              <span className='text-xs'>
                                 Notify me when similar jobs are available
                              </span>
                           </label>
                        </div>
                        <div className='flex justify-center py-3'>
                           <button className='text-xs rounded-sm bg-orange bg-oange text-white px-6 py-1'>
                              Apply Now
                           </button>
                        </div>
                        <p className='text-xs pb-10'>
                           Remember, legitimate employers will never ask you for
                           your financial information when applying, or to make
                           a payment for a job application. Please note
                           JobLookup is not responsible for any external website
                           content.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </Layout>
   );
};

export default JobDetails;
