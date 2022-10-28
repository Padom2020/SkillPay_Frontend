import { Box, Button, Center, Container, HStack, Image, Select, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";


function ConnectWallet() {
    
    return(

<Stack alignItems={"center"} justifyContent={"center"} spacing="3" w="full">
    <Center flexDir="column">
        <Text className='text-primary font-bold'>  
        Connect wallet
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        Enter your information to create your account
        </Text>
    </Center>
    <Stack spacing="8" w="full" maxWidth={"500px"}>
        <Container maxW="container.lg" w="full" px={8} mx="auto">
    <Text>
        Select Network to Connect
    </Text>
    <Box flexDir={"column"} className=" bg-white  rounded-md border" w="full">
    <Select icon={<MdArrowDropDown />} placeholder='Select Network' w="full" size={"lg"}>
        <option value='Tron' >Tron Network</option>
        <option value='Polygon'>Polygon Network</option>
        <option value='Conflux'>Conflux Network</option>
        <option value='Binance'>Binance Network</option>
        <option value='Etheruem'>Etheruem Network</option>
    </Select>
    </Box>
        </Container>
    <Button type="submit" bg="#F24726" alignSelf={"center"} w="300px">
       Login
    </Button>
    </Stack>
</Stack>
        
    )
}

export default ConnectWallet;