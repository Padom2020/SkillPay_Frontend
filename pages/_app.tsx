// pages/_app.js
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
         <CSSReset />
         <Component {...pageProps} />
         <section className='bg-white pb-12'>
         </section>
      </ChakraProvider>
   );
}

export default MyApp;
