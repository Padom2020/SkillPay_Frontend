import {Box, Button, Center, Flex, FormControl, HStack, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'

function PurchasePoint(){
  return (
      <SimpleGrid spacing="10">
    <Flex flexDir={["column","column", "row"]} alignItems={["flex-start"]} gap="5" w={"full"} py="5"  >
    <Box p="2" gap="10">
    <Center flexDir="column" gap="2" >
        <Text className='text-primary font-bold'>  
        Purchase points
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        5 points is approximately 1 Usdt
        </Text>
    </Center>
    <Box gap="2">
        <Text className='space-x-1 text-sm rounded-md'>
        Points 
        </Text>
        <FormControl >
             <Input placeholder="Ex 5, 10, 15, 20" w={"600px"} size="md" bg={"white"} />
        </FormControl>
        <Text className='space-x-1 text-sm rounded-md'>
        100 USDT 
        </Text>
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

export default PurchasePoint;