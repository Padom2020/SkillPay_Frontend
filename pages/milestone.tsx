import React from 'react';
import Layout from '../components/Layout';
import { BiBookAdd } from 'react-icons/bi';
import JobDescEditor from '../components/JobDescEditor';

type Props = {};

const Milestone = (props: Props) => {
   return (
      <Layout>
         <div className='max-w-[80%] mx-auto'>
            <div className='flex justify-between items-center py-3'>
               <h3 className='font-semibold'>Milestones</h3>
               <div className='flex items-center space-x-2'>
                  <BiBookAdd />
                  <span className='text-sm font-semibold'>Add Milestone</span>
               </div>
            </div>
            <h4 className='font-semibold py-2'>Stage 1</h4>
            <div className='flex space-x-5'>
               {/* left side */}
               <div className='w-[20%]'>
                  <p className='border p-2 text-sm font-semibold rounded-sm border-[#f3f4f6]'>
                     Starting-Role description
                  </p>
                  <p className='text-xs py-2 text-orange font-semibold'>
                     + Add more to this
                  </p>
                  <div className='flex items-center space-x-3 pb-2 '>
                     <div className='flex flex-col space-y-1'>
                        <label className='text-xs font-semibold text-[#6b7280]'>
                           From
                        </label>
                        <input
                           type='text'
                           className='border rounded-md bg-white placeholder:text-xs px-2 py-1 w-full'
                           placeholder='Jan 2022'
                        />
                     </div>
                     <div className='flex flex-col space-y-1'>
                        <label className='text-xs font-semibold text-[#6b7280]'>
                           To
                        </label>
                        <input
                           type='text'
                           className='border rounded-md bg-white placeholder:text-xs px-2 py-1 w-full'
                           placeholder='Jan 2022'
                        />
                     </div>
                  </div>
                  <div className='flex flex-col space-y-1'>
                     <label className='text-xs font-semibold text-[#6b7280]'>
                        Amount
                     </label>
                     <input
                        type='text'
                        className='border rounded-md bg-white placeholder:text-xs px-2 py-1'
                        placeholder='Amount'
                     />
                  </div>
               </div>
               {/* right side */}
               <div className='w-[80%]'>
                  <JobDescEditor />
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Milestone;
