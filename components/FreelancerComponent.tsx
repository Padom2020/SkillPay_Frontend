import Image from 'next/image';
import React from 'react';
import { freelancerTRype } from '../interfaces';
type Props = {};

const FreelancerComponent = ({ freelancer }) => {
   return (
      <div>
         <div>
            <div className='relative w-8 h-8 '>
               <Image
                  src={freelancer?.picture}
                  alt=''
                  layout='fill'
                  className='rounded-full'
               />
            </div>
            <div>
               <p>name</p>
               <p>job title</p>
            </div>
         </div>

         <p>description</p>
         <div>
            <div>
               <p>Completed icon</p>
               <p>Job count and job completed</p>
            </div>
            <div>
               <p>Rating</p>
            </div>
         </div>
         <div>
            <button>
               <p>button icon</p>
               <span>Message</span>
            </button>
            <button>
               <p>button icon</p>
               <span>View Profile</span>
            </button>
         </div>
      </div>
   );
};

export default FreelancerComponent;
