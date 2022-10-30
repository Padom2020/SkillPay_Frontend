import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Center, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

function ApplicationUnSuccessful (){
  return (
    <Stack alignItems={"center"} justifyContent={"center"} spacing="3" >
    <SimpleGrid spacing="10">
    <Center flexDir="column" gap="2">
    <CloseIcon w={10} h={10} color="red" />
        <Text className='text-primary font-bold'>  
        You have exhausted your points
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        Proceed to purchase points to cotinue 
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        with your applications
        </Text>
    </Center>
    <HStack justifyContent={"center"} >
        <Button  type="submit" bg="#F24726" alignSelf={"center"} w="200px" colorScheme={"orange"}>
        Proceed
        </Button>
        </HStack>
    </SimpleGrid>
</Stack>
  )
}

export default ApplicationUnSuccessful