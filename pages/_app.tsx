// pages/_app.js
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
         <CSSReset />
         <Component {...pageProps} />
      </ChakraProvider>
   );
}

export default MyApp;
