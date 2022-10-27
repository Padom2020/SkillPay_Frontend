import Image from 'next/image';
import React from 'react';
import { categoryies } from '../mockData';

type Props = {};

const Category = (props: Props) => {
   return (
      <div className='px-4 lg:px-0 md:max-w-[90%] lg:max-w-[80%] xl:max-w-[65%] mx-auto space-y-4'>
         <h2 className='text-center font-bold'>Choose Different Category</h2>
         <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-2 lg:gap-x-1 gap-y-4 md:grid-cols-3 xl:grid-cols-4 '>
            {categoryies?.map((category) => (
               <div key={category?.id} className=''>
                  <div className='relative w-full h-52'>
                     <Image
                        src={category?.catImage}
                        alt=''
                        layout='fill'
                        className='opacity-80 hover:opacity-100 duration-300 ease-in rounded-sm object-cover'
                     />
                     <p className='absolute top-1/2 left-14 sm:left-24 md:left-14 lg:left-20 text-sm text-white font-bold'>
                        {category?.catTitle}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Category;
