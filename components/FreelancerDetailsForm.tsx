import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea} from "@chakra-ui/react"
import WrapContent from "./Layout/WrapContent"


const FreelancerDetailsForm = () => {
  return (
<Stack spacing={"10"} gap="5" py="5">
   <WrapContent>
     <Flex flexDir={["column","column", "row"]} alignItems={["flex-start"]} gap="5" w={"full"} py="5" border={"1px solid"} borderColor="gray.200">
             <WrapContent>
                        <Text className='text-primary font-bold' py="2">  
                        Personal Details
                        </Text>
                        <Text className='space-x-1 text-sm rounded-md' py="2">
                        Input all your details as you will want it appear on your profile<br/> appear on your profile
                        </Text>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>First name</Text>
                                <Input placeholder="First name" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                                <Text>last name</Text>
                                <Input placeholder="last name" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>Email Address</Text>
                                <Input placeholder="Enter Email Address..." w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                           <FormControl >
                               <Text>Contact</Text>
                                <Input type='tel' placeholder="+234" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                                <Text>Location</Text>
                                <Input placeholder="Location" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>Skills</Text>
                                <Textarea placeholder="Skills" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Text className='text-primary font-bold' py="2">  
                        Add Experience
                        </Text>
                        <Text className='space-x-1 text-sm rounded-md' py="2">
                        89% recruiter says they firt notice your experience
                        </Text>
                        <Flex>
                        <FormControl >
                                <Text>Job Title</Text>
                                <Input placeholder="Frontend Developer" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>Responsibilities</Text>
                                <Textarea placeholder="Project Manager..." w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"}  py="2">
                            <FormControl >
                               <Text>From</Text>
                                <Input placeholder="3 Jan 2020" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                                <Text>To</Text>
                                <Input placeholder="16 December 2022" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Box border={"1px solid"} p="4" borderColor={"gray.200"}>
                              <Checkbox value='There-is-delay'>Currently Working there</Checkbox>
                        </Box>
                        <Text className='text-primary font-bold' py="2">  
                        Add Education
                        </Text>
                        <Text className='space-x-1 text-sm rounded-md' py="2">
                        Education increases 37% chance to get noticed
                        </Text>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>Institution</Text>
                                <Input placeholder="Harvard University" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                                <Text>Degree</Text>
                                <Input placeholder="Computer Science" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex>
                        <FormControl >
                                <Text>Major</Text>
                                <Input placeholder="Ex. Software Engineer" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"} py="2">
                            <FormControl >
                               <Text>Description</Text>
                                <Textarea placeholder="What have you learned or experienced?" w={"full"} size="lg"/>
                            </FormControl>
                        </Flex>
                        <Flex  alignItems={["center"]} gap="5" w={"full"}  py="2">
                            <FormControl >
                               <Text>From</Text>
                                <Input placeholder="3 Jan 2022" w={"full"} size="lg"/>
                            </FormControl>
                            <FormControl >
                                <Text>To</Text>
                                <Input placeholder="16 Jan 2022" w={"full"} size="lg"/>
                            </FormControl>
                           </Flex>
                            <Box border={"1px solid"} p="4" borderColor={"gray.200"}>
                              <Checkbox value='Currently-studying'>Currently studying</Checkbox>
                            </Box>
                        <HStack justifyContent={"flex-end"} py="20">
                            <Button  type="submit" bg="#F24726" alignSelf={"center"} w="150px" colorScheme={"orange"}>
                            Save
                            </Button>
                        </HStack>
             </WrapContent>     
       </Flex>
   </WrapContent>
</Stack>
  )
}

export default FreelancerDetailsForm;




