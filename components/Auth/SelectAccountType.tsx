import { Center, Stack, Text } from "@chakra-ui/react";


function SelectAccountType() {
    
    return(

<Stack alignItems={"center"} justifyContent={"center"} spacing="5" maxWidth={"600px"}>
        <Center flexDir="column">
        <Text className='text-primary font-bold'>
            
           Sign Up
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
           Sign up as a freelancer or an employer
        </Text>
    </Center>
</Stack>
        
    )
}

export default SelectAccountType;