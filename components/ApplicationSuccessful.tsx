import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Button, Center, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

function ApplicationSuccessful (){
  return (
    <Stack alignItems={"center"} justifyContent={"center"} spacing="3" >
    <SimpleGrid spacing="10">
    <Center flexDir="column" gap="2">
    <CheckCircleIcon w={10} h={10} color="green" />
        <Text className='text-primary font-bold'>  
        Application Submitted
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        Your application has been successfully
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
             submitted 
        </Text>
    </Center>
    <Center justifyContent={"center"}>
            <Button type="submit" bg="#F24726">
            Complete My Profile
          </Button>
    </Center>
    </SimpleGrid>
</Stack>
  )
}

export default ApplicationSuccessful