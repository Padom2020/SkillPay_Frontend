import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Button, Checkbox, Flex, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import WrapContent from "../Layout/WrapContent";
import { DeleteIcon, DownloadIcon } from "@chakra-ui/icons";
import { saveAs } from "file-saver";
import { BsFillCloudDownloadFill, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";



type Props = {
  children?: ReactNode;
  title?: string;
  pageTitle?: string;
};



const NotificationLayout = ({
  children,
  pageTitle,
  title = "Messages",
}: Props) => {
  const _DISPLAY = useBreakpointValue([false, false, true]);
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
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
                <Flex py="3" p="3" justifyContent={"space-between"}>
                    <Text>Notification (15)</Text>
                    <Flex alignItems={"baseline"} gap="1">
                    <DeleteIcon width={"3"} height="3"color={"#F24726"}/>
                    <Text color={"#F24726"}>Clear all</Text>
                    </Flex>
                </Flex>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3" backgroundColor="gray.200">
                <div className="flex space-x-3">
                <img src="/images/profilepix.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <Flex justifyContent={"space-between"}>
                    <p className="font-[500] text-[14px] md:text-[15px]">Contract Form</p>
                    <Text color={"#F24726"}>Now</Text>
                    </Flex>
                    <p className="font-[400] text-sm text-[16px]">Jane Brown sent you a contract form</p>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/profilepix.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <Flex justifyContent={"space-between"}>
                    <p className="font-[500] text-[14px] md:text-[15px]">New Profile View</p>
                    <Text>2 Hours ago</Text>
                    </Flex>
                    <p className="font-[400] text-sm text-[16px]">Dominic Akpan Just Viewed Your Profile</p>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/wallet.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <Flex justifyContent={"space-between"}>
                    <p className="font-[500] text-[14px] md:text-[15px]">You’ve been credited</p>
                    <Text>3 Days ago</Text>
                    </Flex>
                    <p className="font-[400] text-sm text-[16px]">You just receive N10,400 from James brown</p>
                </div>
                </div>
                </Box>
                <Box borderBlock={"1px solid"} borderColor="gray.200" py="3" p="3">
                <div className="flex space-x-3">
                <img src="/images/wallet.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                    <Flex justifyContent={"space-between"}>
                    <p className="font-[500] text-[14px] md:text-[15px]">You’ve been credited</p>
                    <Text>5 Days ago</Text>
                    </Flex>
                    <p className="font-[400] text-sm text-[16px]">You just receive N10,400 from James brown</p>
                </div>
                </div>
                </Box>
              </Box>
            )}
            <Stack w={["full", "full", "65%"]}>
              <HStack background={"gray.100"} p="5" borderBlock={"1px solid"} borderColor="gray.300" py={"5"} >                
                <div className="flex space-x-3">
                <img src="/images/profilepix.png" alt="" className="rounded-full w-12 h-12" />
                <div>
                <Flex justifyContent={"space-between"}>
                    <p className="font-[500] text-[14px] md:text-[15px]">Contract Form</p>
                    <Text color={"#F24726"}>Now</Text>
                </Flex>
                    <p className="font-[400] text-sm text-[16px]">Jane Brown sent you a contract form</p>
                </div>
                </div>
              </HStack>
                <Flex onClick={saveFile} flexDir={"column"} justifyContent={"center"} alignItems="center" background={"gray.100"} borderBlock={"1px solid"} borderColor="gray.300" p={"5"}>
                <BsFillCloudDownloadFill height={"15"} width="15" color={"#F24726"}/>
                 <Text >Download contract form </Text>
                </Flex>
                <Box p={"2"}>
                    <Checkbox value='Currently-studying'>By accepting offer, I read and agree to the contract form</Checkbox>
                </Box>
                <Flex p={"5"} justifyContent="space-between" alignItems={"flex-end"}>
                    <Button><BsFillPersonFill/>Decline offer</Button>
                    <Button bg={"#F24726"}><HiOutlineArrowRightOnRectangle/>Accept offer</Button>
                </Flex>
              <Box />
            </Stack>
          </Flex>
        </WrapContent>
      </Box>
    </div>
  );
};

export default NotificationLayout;
