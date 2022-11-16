import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Button, Center, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

function MilestoneSetSuccessful (){
  return (
    <Stack alignItems={"center"} justifyContent={"center"} spacing="3" >
    <SimpleGrid spacing="10">
    <Center flexDir="column" gap="2">
    <CheckCircleIcon w={10} h={10} color="green" />
        <Text className='text-primary font-bold'>  
        Milestones set successfully
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        Deposit payment funds into our escrow contract
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        to confirm the project commencement
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

export default MilestoneSetSuccessful;