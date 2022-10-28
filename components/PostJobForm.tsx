import { Box, Flex, FormControl, Input, Text, Textarea } from "@chakra-ui/react"
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
