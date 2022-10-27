import { Box, Button, Center, Container, Image, Select, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";


function ConnectWallet() {
    
    return(

<Stack alignItems={"center"} justifyContent={"center"} spacing="3" maxWidth={"600px"}>
    <Center flexDir="column">
        <Text className='text-primary font-bold'>  
        Connect wallet
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        Enter your information to create your account
        </Text>
    </Center>
    <SimpleGrid spacing="8">
        <Container maxW="container.lg" w="full" px={8} mx="auto">
    <Text>
        Select Network to Connect
    </Text>
    <Center flexDir={"column"} p='4' className=" bg-white  rounded-md border" >
    <Stack spacing='3' textAlign={"center"}>
    <Select icon={<MdArrowDropDown />} placeholder='Select Network'>
        <option value='Tron'>Tron Network</option>
        <option value='Polygon'>Polygon Network</option>
        <option value='Conflux'>Conflux Network</option>
        <option value='Binance'>Binance Network</option>
        <option value='Etheruem'>Etheruem Network</option>
    </Select>
     </Stack>      
    </Center>
        </Container>
    <Button type="submit" bg="#F24726">
       Login
    </Button>
    </SimpleGrid>
</Stack>
        
    )
}

export default ConnectWallet;