import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLogin } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import WrapContent from './Layout/WrapContent';
import { TiThMenu } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

type Props = {};

const Header = (props: Props) => {
   const router = useRouter();

   //menu toggle
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <div>
         <Box as='header'>
            <WrapContent>
               <div className='mx-auto flex flex-row items-start xl:items-center sticky top-0 py-3 border-b border-[#f3f4f6]'>
                  <Link href='/'>
                     <h2 className='flex-1 text-sm cursor-pointer'>
                        <span className='text-primary font-semibold'>
                           Skill
                        </span>
                        <span className='text-orange font-semibold'>Pay</span>
                     </h2>
                  </Link>
                  <div className='flex flex-row space-x-10'>
                     <div className='hidden sm:flex items-center sm:space-x-4 text-sm'>
                        <Link href='/'>
                           <a
                              className={
                                 router.pathname == '/' ? 'text-orange' : ''
                              }
                           >
                              Home
                           </a>
                        </Link>
                        <Link href='/jobs'>
                           <a
                              className={
                                 router.pathname == '/jobs'
                                    ? 'text-orange'
                                    : ''
                              }
                           >
                              Find Work
                           </a>
                        </Link>
                        <Link href='/freelancers'>
                           <a
                              className={
                                 router.pathname == '/freelancers' ? 'text-orange' : ''
                              }
                           >
                              Find Freelancers
                           </a>
                        </Link>
                        <Link href='/'>
                           <a
                              className={
                                 router.pathname == '/' ? 'text-orange' : ''
                              }
                           >
                              Courses
                           </a>
                        </Link>
                     </div>
                     <div className='flex flex-row items-center space-x-2'>
                        <button className='flex flex-row items-center bg-white border border-gray-400 px-2 py-1 space-x-1 text-sm rounded-sm md:rounded-md'>
                           <BsPerson className='w-3 h-3' />
                           <Link href='/selectaccount'>
                              <span className='text-xs'>Sign Up</span>
                           </Link>
                        </button>
                        <button className='flex flex-row items-center bg-orange text-white border border-orange px-2 py-1 space-x-1 text-sm rounded-sm md:rounded-md'>
                           <AiOutlineLogin className='w-3 h-3' />
                           <Link href='/signin'>
                              <span className='text-xs'>Login</span>
                           </Link>
                        </button>
                     </div>
                     <div
                        className='sm:hidden duration-300 ease-in'
                        onClick={() => setOpenMenu((current) => !current)}
                     >
                        {openMenu ? (
                           <MdClose className='w-6 h-6 text-orange' />
                        ) : (
                           <TiThMenu className='w-6 h-6 text-orange' />
                        )}
                     </div>
                  </div>
               </div>
            </WrapContent>
         </Box>
         {/* mobile nav */}
         <MobileNavbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
   );
};

export default Header;
