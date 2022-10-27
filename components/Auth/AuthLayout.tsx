import { Center } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from '../Header';
import WrapContent from '../Layout/WrapContent';

type Props = {
   children?: ReactNode;
   title?: string;
};

const AuthLayout = ({ children, title = 'This is the default title' }: Props) => (
   <div>
    <Header />
    <WrapContent >
      <Center w="full" bg="gray.50" py="10">
      {children}
      </Center>
    </WrapContent>
   </div>
);

export default AuthLayout;
