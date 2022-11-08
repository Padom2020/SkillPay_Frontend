import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import WrapContent from "../Layout/WrapContent";

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
                w="30%"
                border="1px solid"
                borderColor="gray.300"
                h="fit-content">
              </Box>
            )}
            <Box w={["full", "full", "65%"]}>
              <Box
                p="3"
                roundedTop="15px"
                border="1px solid"
                borderColor="gray.300"
              >
              </Box>

              <Box
                p="3"
                roundedBottom="15px"
                border="1px solid"
                borderColor="gray.300"
              >
                {children}
              </Box>
              <Box py="20px" />
            </Box>
          </Flex>
        </WrapContent>
      </Box>
    </div>
  );
};

export default ChatLayout;
