import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Button, Flex, FormControl, HStack, Image, Input, Link, Stack, Text, Textarea, useBreakpointValue } from "@chakra-ui/react";
import WrapContent from "../Layout/WrapContent";
import { freelancers } from "../../mockData";
import Freelancer from "../Freelancer";
import Router from "next/router";
import { FiSend } from "react-icons/fi";

type Props = {
  children?: ReactNode;
  title?: string;
  pageTitle?: string;
};



const ChatLayout = ({
  children,
  pageTitle,
  title = "Messages",
}: Props) => {
  const _DISPLAY = useBreakpointValue([false, false, true]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <WrapContent>
          <Flex w="full" height={"90vh"} pt="40px" >
            {_DISPLAY && (
              <Box
                w="50%"
                border="1px solid"
                borderColor="gray.300"
                h="fit-content">
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/profilepix2.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <p className="font-[500] text-[14px] md:text-[20px]">James Brown</p>
                    <p className="font-[400] text-sm text-[16px]">UI/UX Designer, Web Developer</p>
                    <Text>Lorem ipsum dolor sit amet, consec tetuhd adipiscing elit.</Text>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/profilepix.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <p className="font-[500] text-[14px] md:text-[20px]">James Brown</p>
                    <p className="font-[400] text-sm text-[16px]">UI/UX Designer, Web Developer</p>
                    <Text>Lorem ipsum dolor sit amet, consec tetuhd adipiscing elit.</Text>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/productsample.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <p className="font-[500] text-[14px] md:text-[20px]">James Brown</p>
                    <p className="font-[400] text-sm text-[16px]">UI/UX Designer, Web Developer</p>
                    <Text>Lorem ipsum dolor sit amet, consec tetuhd adipiscing elit.</Text>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/profilepix3.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <p className="font-[500] text-[14px] md:text-[20px]">James Brown</p>
                    <p className="font-[400] text-sm text-[16px]">UI/UX Designer, Web Developer</p>
                    <Text>Lorem ipsum dolor sit amet, consec tetuhd adipiscing elit.</Text>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/productsample.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <p className="font-[500] text-[14px] md:text-[20px]">James Brown</p>
                    <p className="font-[400] text-sm text-[16px]">UI/UX Designer, Web Developer</p>
                    <Text>Lorem ipsum dolor sit amet, consec tetuhd adipiscing elit.</Text>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/profilepix3.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <p className="font-[500] text-[14px] md:text-[20px]">James Brown</p>
                    <p className="font-[400] text-sm text-[16px]">UI/UX Designer, Web Developer</p>
                    <Text>Lorem ipsum dolor sit amet, consec tetuhd adipiscing elit.</Text>
                </div>
                </div>
                </Box>
              </Box>
            )}
            <Box w={["full", "full", "65%"]}>
              <HStack background={"gray.100"} p="3" borderBlock={"1px solid"} borderColor="gray.300" >
                 
                <div className="flex space-x-3">
                <img src="/images/profilepix3.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <p className="font-[500] text-[14px] md:text-[20px]">James Brown</p>
                    <p className="font-[400] text-sm text-[16px]">UI/UX Designer, Web Developer</p>
                </div>
                </div>
              </HStack>

              <div className="my-4">
              <div className="flex space-x-3">
                <Image src="/images/profilepix3.png" alt="" className="rounded-full w-8 h-8" />
                <Stack>
                <Text background={"gray.50"} className="p-2 rounded-tl-2xl rounded-br-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. </Text>
                <Text fontWeight={"light"} fontSize="10">3min ago</Text>
                </Stack>
              </div>
              <div className="flex space-x-3 pl-20 my-4" >
                <Stack>
                <Text className="p-2 rounded-tl-2xl rounded-br-2xl border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. </Text>
                <div className="flex justify-end"><Text fontWeight={"light"} fontSize="10">2min ago</Text></div>
                </Stack>
                <Image src="/images/profilepix3.png" alt="" className="rounded-full w-8 h-8" />
              </div>
              </div>
              <div className="my-4">
              <div className="flex space-x-3">
                <Image src="/images/profilepix3.png" alt="" className="rounded-full w-8 h-8" />
                <Stack>
                <Text background={"gray.50"} className="p-2 rounded-tl-2xl rounded-br-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. </Text>
                <Text fontWeight={"light"} fontSize="10">3min ago</Text>
                </Stack>
              </div>
              <div className="flex space-x-3 pl-20 my-4" >
                <Stack>
                <Text className="p-2 rounded-tl-2xl rounded-br-2xl border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. </Text>
                <div className="flex justify-end"><Text fontWeight={"light"} fontSize="10">2min ago</Text></div>
                </Stack>
                <Image src="/images/profilepix3.png" alt="" className="rounded-full w-8 h-8" />
              </div>
              </div>
              <div className="flex pl-20 my-4">
              <Input placeholder="Type your message here..." w={"400px"} size="lg"/>
              <div className="flex justify-end">
              <Button className='flex flex-row items-center space-x-2'  type="submit" bg="#F24726" alignSelf={"center"} w="100px" colorScheme={"orange"}>
              <FiSend />
              <Text className='text-xs'>Send</Text>
              </Button>
              </div>
              </div>
              <Box />
            </Box>
          </Flex>
        </WrapContent>
      </Box>
    </div>
  );
};

export default ChatLayout;
