import { ChatIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  HStack,
  Icon,
  Image,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaBus, FaFacebookF, FaPaperPlane, FaWallet } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";
import FreelancerRating from "./FreelancerRating";
import FreelancerReview from "./FreelancerReview";
import WrapContent from "./Layout/WrapContent";


function ProductDetails() {
  const [reviews, setReviews] = useState([
    {
      avatar: "/images/review.svg", 
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit ",
      name: "James Peter",
      role: "Manager",
      workPlace: "@ DigitalAssest Ltd",
      rating: 1,
    },
    {
      avatar: "/images/review2.svg", 
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit ",
      name: "James Peter",
      role: "Manager",
      workPlace: "@ DigitalAssest Ltd",
      rating: 3,
    }
  ]);
  
  return (
    <Box>
        <WrapContent>
          <Flex flexDir={["column", "column", "row"]} gap="5" py="40px">
            <Stack spacing="5" w={["full", "full", "70%", "70%"]} border="1px solid" borderColor="gray.200" rounded="10px" p="2">
            <Text>3D Website Design</Text>
            <Stack className="py-5  shadow-xl" spacing={"3"} width="fit-content">
            <Box width={"fit-content"}>
              <Image src="/images/productsample.png" alt="" height={"full"} width="200px" objectFit={"inherit"}/>
            </Box>
            <div>
              <p className="font-[400] text-sm text-[16px]">$3500</p>
            </div>
            <div><FreelancerRating rating={3} /></div>
            </Stack>
            <Text className='text-black font-bold'>Product Description</Text>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien cursus aliquet eleifend malesuada feugiat. Varius in in accumsan, sed. Libero, mauris ornare mauris quam. Leo turpis laoreet at tristique massa sit elit. Morbi nisi lectus amet, integer elementum iaculis pretium molestie sit. Et sit facilisis eget lobortis hendrerit nullam. Sem nunc id suspendisse blandit. Erat fames viverra tortor at tellus ut elementum quis. Neque at amet porta orci semper amet enim.</p>
            </div>
            <Text className='text-black font-bold'>Owner</Text>
            <div className="flex space-x-3">
          <img src="/images/profilepix.png" alt="" className="rounded-full w-12 h-12" />
          <div>
            <p className="font-[500] text-[14px] md:text-[20px]">John Doe</p>
            <p className="font-[400] text-sm text-[16px]">Digital Marketer</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 pb-12 mt-3">
            {
              reviews?.map((review, index) => (<FreelancerReview review={review} key={++index} />))
            }
          </div>
            </Stack>

            <Stack w={"full"}>

            <Box >
              <Stack spacing="4" border="1px solid" borderColor={"gray.200"} p="3">
                <Text className='text-black font-bold'>Purchase</Text>
                <Stack justifyContent={"center"} gap="5">
                  <Box className="flex space-x-3" justifyContent={"space-between"}>
                    <Text>Amount</Text>
                    <Text>$3500</Text>
                  </Box>
                </Stack>
                <Center justifyContent={"center"} >
              <Button className='flex flex-row items-center px-2 py-1 space-x-1'  type="submit" bg="#F24726" alignSelf={"center"} w="200px" colorScheme={"orange"}>
              <FaWallet/>
              <Link href='#'>
                <Text className='text-xs'>Connect Wallet</Text>
                
              </Link>
              </Button>
              </Center>
              <Stack  border="1px solid" borderColor={"gray.200"} p="3" justifyContent={"space-between"} gap="5">
                <Flex justifyContent={"space-between"}>
                <Text>Download File</Text>
                <DownloadIcon width={"5"} height="5"/>
                </Flex>
              </Stack>
              </Stack>
            </Box>

            <Box >
              <Stack spacing="4" border="1px solid" borderColor={"gray.200"} p="3">
                <Text className='text-black font-bold'>Ask for modification</Text>
                <Stack justifyContent={"center"} gap="5">
                  <Box className="flex space-x-3" justifyContent={"space-between"}>
                    <Text>Amount</Text>
                    <Text>$----</Text>
                  </Box>
                </Stack>
                <Center justifyContent={"center"} >
                
              <Button className='flex flex-row items-center px-2 py-1 space-x-1'  type="submit" bg="#F24726" alignSelf={"center"} w="200px" colorScheme={"orange"}>
              <ChatIcon/>
              <Link href='#'>
                <Text className='text-xs'>Chat John Doe</Text>
              </Link>
              </Button>
              </Center>
              </Stack>
            </Box>

             <Box >
              <Stack spacing="4" border="1px solid" borderColor={"gray.200"} p="3">
                <Text className='text-black font-bold'>Share this product</Text>
                <div className='flex space-x-4 text-xs'>
                        <AiFillInstagram />
                        <BsTwitter />
                        <FaFacebookF />
                     </div>
              </Stack>
            </Box>
            </Stack>
          </Flex>
        </WrapContent>
    </Box>
  );
}

export default ProductDetails;

