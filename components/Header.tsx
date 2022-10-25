import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLogin } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import WrapContent from './Layout/WrapContent';

type Props = {};

const Header = (props: Props) => {
   const router = useRouter();

   return (
      <Box as="header">
         <WrapContent >
      <div className='mx-auto flex flex-row items-start xl:items-center sticky top-0 py-3'>
         <h2 className='flex-1'>
            <span className='text-primary font-semibold'>Skill</span>
            <span className='text-orange font-semibold'>Pay</span>
         </h2>
         <div className='flex flex-row space-x-10'>
            <div className='flex items-center space-x-4'>
               <Link href='/'>
                  <a className={router.pathname == '/' ? 'text-orange' : ''}>
                     Home
                  </a>
               </Link>
               <Link href='/about'>
                  <a
                     className={
                        router.pathname == '/about' ? 'text-orange' : ''
                     }
                     >
                     Find Work
                  </a>
               </Link>
               <Link href='/about'>
                  <a className={router.pathname == '#' ? 'text-orange' : ''}>
                     Find Freelancers
                  </a>
               </Link>
               <Link href='/about'>
                  <a className={router.pathname == '#' ? 'text-orange' : ''}>
                     Courses
                  </a>
               </Link>
            </div>
            <div className='flex flex-row items-center space-x-2'>
               <button className='flex flex-row items-center bg-white border border-gray-400 px-2 py-1 space-x-1 text-sm rounded-md'>
                  <BsPerson />
                  <Link href="/signup">
                  <span>Sign Up</span>
                  </Link>
               </button>
               <button className='flex flex-row items-center bg-orange text-white px-2 py-1 space-x-1 text-sm rounded-md'>
                  <AiOutlineLogin />
                  <Link href="/signin">
                  <span>Login</span>
                  </Link>
               </button>
            </div>
         </div>
      </div>
         </WrapContent>
      </Box>
   );
};

export default Header;
