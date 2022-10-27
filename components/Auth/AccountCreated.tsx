import { Box, Button, Center, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {CheckCircleIcon } from '@chakra-ui/icons'

function AccountCreated() {
    
    return(

<Stack alignItems={"center"} justifyContent={"center"} spacing="3" >
    <SimpleGrid spacing="10">
    <Center flexDir="column" gap="2">
    <CheckCircleIcon w={10} h={10} color="green" />
        <Text className='text-primary font-bold'>  
        Account Created
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        Your account has been successfully created
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
        complete your profile details
        </Text>
    </Center>
    <Center justifyContent={"space-between"}>
            <Box color='tomato'>
            <Link  href="/home" >Later</Link>
            </Box>
            <Button type="submit" bg="#F24726">
            Complete My Profile
          </Button>
    </Center>
    </SimpleGrid>
</Stack>
        
    )
}

export default AccountCreated;