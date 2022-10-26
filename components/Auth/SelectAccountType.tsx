import { Box, Center, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";


function SelectAccountType() {
    
    return(

<Stack alignItems={"center"}  spacing="10">
    <Center flexDir="column">
        <Text className='text-primary font-bold'>  
           Sign Up
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
           Sign up as a freelancer or an employer
        </Text>
    </Center>
<SimpleGrid columns={[1,2,2]} spacing={8}>
    <Link href={"/signup"}>
    <Center data-group _hover={{bgColor:"#F24726", color:"white", transition:"all .8s ease"}} flexDir={"column"} p='4' className=" bg-white  rounded-md border" >
      <Box w="50px" h="50px">
        <Image
          src="/images/employersignup.png"
          w={"full"}
          h="full"
          objectFit={"contain"}/>    
        </Box>
    <Stack spacing='3' textAlign={"center"}>
     <Text _groupHover={{color:'#020648'}} className='pace-x-1 font-bold text-black'>
     Sign up as an employer
     </Text>
     <Text className='space-x-1 text-sm rounded-md'>
     Find and hire expert freelancer <br/> for any projects
     </Text>
     </Stack>      
    </Center>
    </Link>
    <Link href={"/signup"}>
    <Center data-group _hover={{bgColor:"#F24726", color:"white", transition:"all .8s ease"}} flexDir={"column"} p='4' className=" bg-white  rounded-md border" >
      <Box w="50px" h="50px">
        <Image
          src="/images/freelancersignup.png"
          w={"full"}
          h="full"
          objectFit={"contain"}/>    
        </Box>
    <Stack spacing='3' textAlign={"center"}>
     <Text _groupHover={{color:'#020648'}} className='pace-x-1 text-black font-bold'>
     Sign up as an freelancer
     </Text>
     <Text className='space-x-1 text-sm rounded-md'>
     Find work and get hired <br/> by a employers
     </Text>
     </Stack>      
    </Center>
    </Link>
          </SimpleGrid>
</Stack>
        
    )
}

export default SelectAccountType;