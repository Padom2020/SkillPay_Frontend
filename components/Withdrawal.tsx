import {Box, Button, Center, Checkbox, Flex, FormControl, HStack, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';

function Withdrawal(){
  return (
      <SimpleGrid spacing="10" gap={"5"}>
    <Flex flexDir={["column","column", "row"]} alignItems={["flex-start"]} gap="5" w={"full"} py="5"  >
    <Box p="2" gap="10">
        <Text className='text-primary font-bold'>  
       Withdraw
        </Text>
        <Flex justifyContent={"space-between"}>
        <Text className='space-x-1 text-sm text-primary font-bold'>
        You can withdraw directly into your wallet
        </Text>
        <Center flexDir={"column"} bg="white" w={"20"} h="10">
            <Text textColor={"gray.300"}>Balance:</Text>
        <Text className='space-x-1 text-sm rounded-md'>
         $3500
        </Text>
        </Center >
        </Flex>
        <Box gap="2" p={"3"}>
        <Text className='space-x-1 text-sm rounded-md' p={"2"}>
        Amount
        </Text>
        <FormControl >
             <Input placeholder="$1000" w={"600px"} size="md" bg={"white"} />
        </FormControl>
      </Box>
       <Box gap="2" p={"3"}>
        <Text className='space-x-1 text-sm rounded-md' p={"2"}>
        Wallet address 
        </Text>
        <FormControl >
             <Input placeholder="0xef507f72297e30B31............." w={"600px"} size="md" bg={"white"} />
        </FormControl>
      </Box>
    </Box>
</Flex>
    <Center justifyContent={"center"} >
        <Button  type="submit" bg="#F24726" alignSelf={"center"} w="200px" colorScheme={"orange"}>
        Connect Wallet
        </Button>
        </Center>
    </SimpleGrid>
  )
}

export default Withdrawal;