import { Box, Button, Checkbox, CheckboxGroup, Flex, FormControl, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import JobDescEditor from "./JobDescEditor"
import WrapContent from "./Layout/WrapContent"


const PostJobForm = () => {
  return (
    <Box>
      <WrapContent>
        <FormFieldLayout title={"Job title"} desc={"A job title mut decribe one poition only"}>
        <FormControl >
             <Input placeholder="eg front end development" w={"full"} size="lg"/>
            </FormControl>
        </FormFieldLayout>
        <FormFieldLayout title={"Job description"} desc={"provide a hort decription about the job, keep it hort and to he point"}>
        <JobDescEditor/>
        </FormFieldLayout>
        <FormFieldLayout title={"Employment type"} desc={"provide a hort decription about the job, keep it hort and to he point"}>
        <CheckboxGroup>
        <Stack spacing={"3"}>
          <Box border={"1px solid"} p="4" borderColor={"gray.200"}>
          <Checkbox value='Full-time'>Full-time</Checkbox>
          </Box>
          <Box border={"1px solid"} p="4" borderColor={"gray.200"}>
          <Checkbox value='Part-time'>Part-time</Checkbox>
          </Box>
          <Box border={"1px solid"} p="4" borderColor={"gray.200"}>
          <Checkbox value='on-demand'>on demand</Checkbox>
          </Box>
        </Stack>
        </CheckboxGroup>
        </FormFieldLayout>
        <FormFieldLayout title={"Working schedule"} desc={"provide a hort decription about the job, keep it hort and to he point"}>
          <FormControl>
          <Input type={"number"} placeholder="Estimated Number of days" w={"full"} size="lg"/>
          </FormControl>
        </FormFieldLayout>
        <FormFieldLayout title={"Salary"} desc={"provide a hort decription about the job, keep it hort and to he point"}>
          <FormControl>
          <Input type={"number"} placeholder="$1000" w={"full"} size="lg"/>
          <Checkbox value='Negotiable'>Is it Negotiable?</Checkbox>
          </FormControl>
        </FormFieldLayout>
        <HStack justifyContent={"flex-end"} py="20">
        <Button  type="submit" bg="#F24726" alignSelf={"center"} w="200px" colorScheme={"orange"}>
         Login
        </Button>
        </HStack>
      </WrapContent>
    </Box>
  )
}

export default PostJobForm



const FormFieldLayout = ({children, title, desc}) => {
  return (
    <Flex flexDir={["column","column", "row"]} alignItems={["flex-start"]} gap="5" w={"full"} py="5" borderBlock={"1px solid"} borderColor="gray.200">
    <Box w={["full", "full", "40%"]}>
      <Text as="h2" fontWeight={"bold"}>
       {title}
      </Text>
      <Text>
      {desc}
      </Text>
    </Box>
    <Box w={["full", "full", "60%"]}>
      {children}
    </Box>
  </Flex>  )
}
