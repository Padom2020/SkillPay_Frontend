import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea} from "@chakra-ui/react"
import WrapContent from "./Layout/WrapContent"


const ContractForm = () => {
  return (
<Stack spacing={"10"} gap="5" py="5">
   <WrapContent>
     <Flex flexDir={["column","column", "row"]} alignItems={["flex-start"]} gap="5" w={"full"} py="5" border={"1px solid"} borderColor="gray.200">
             <WrapContent>
                        <Text className='text-primary font-bold' py="2">  
                        Contract Form
                        </Text>
                        <Text className='space-x-1 text-sm rounded-md' py="2">
                        Need a professional logo with writing<br/> underneath for our...
                        </Text>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                            <FormLabel py="2">Contract Detail</FormLabel>
                               <Text>Project Name</Text>
                                <Input placeholder="Contract Name" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                            <FormLabel py="2">Contract Value</FormLabel>
                                <Text>Currency</Text>
                                <Input placeholder="Crypto-USDT" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>Email Address</Text>
                                <Input placeholder="Enter Email Address..." w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                                <Text>Value</Text>
                                <Input placeholder="$50000" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>Contact</Text>
                                <Input type='tel' placeholder="+234" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                                <Text>Est. taxes</Text>
                                <Input placeholder="$500" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                            <FormLabel py="2">Agreement Detail</FormLabel>
                               <Text>Payment Rate</Text>
                                <Input placeholder="Hourly" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                            <FormLabel py="2">Contract Type</FormLabel>
                                <Text>Type</Text>
                                <Input placeholder="Fixed Price" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"}  py="2">
                            <FormControl >
                            <FormLabel py="2">Commencement</FormLabel>
                               <Text>From</Text>
                                <Input placeholder="3 Jan 2022" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                            <FormLabel py="2">Completion</FormLabel>
                                <Text>To</Text>
                                <Input placeholder="16 Jan 2022" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Text>Project Description</Text>
                        <Textarea size='sm' placeholder='What the project entails' />
                        <Stack spacing={"2"} py="2">
                            <FormLabel >Contract termination</FormLabel>
                            <Box border={"1px solid"} p="4" borderColor={"gray.200"}>
                              <Checkbox value='There-is-delay'>There is delay</Checkbox>
                            </Box>
                            <Box border={"1px solid"} p="4" borderColor={"gray.200"}>
                              <Checkbox value='Slow-Response'>Slow Response</Checkbox>
                            </Box>
                        </Stack>
                        <HStack justifyContent={"flex-end"} py="20">
                            <Button  type="submit" bg="#F24726" alignSelf={"center"} w="150px" colorScheme={"orange"}>
                            Login
                            </Button>
                        </HStack>
             </WrapContent>     
       </Flex>
   </WrapContent>
</Stack>
  )
}

export default ContractForm




