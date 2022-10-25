import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import React, { useState } from "react";
  import { FaFacebook, FaGoogle } from "react-icons/fa";
  
  function LoginForm() {
    const [data, setData] = useState({ username: "", password: "" });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    };
  
    return (
        
      <Stack alignItems={"center"} justifyContent={"center"} spacing="5" maxWidth={"600px"}>

        <Stack spacing="5" as="form" onSubmit={handleSubmit}>

            <Center flexDir="column">
            <Text className='text-primary font-bold'>
            Sign Up
          </Text>
          <Text className='space-x-1 text-sm rounded-md'>
          Enter your information to create your account
          </Text>
            </Center>
            <FormControl isRequired>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="name"
              placeholder="enter full name"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="email"
              placeholder="enter email address"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="password"
              type="password"
              placeholder="create password"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="password"
              type="conf password"
              placeholder="confirm password"
            />
          </FormControl>
          <Button type="submit" bg="#F24726">
            Sign Up Now
          </Button>
          <Center gap={5} justifyContent={"space-between"}>
            <Text> Already have an account? </Text>
            <Box color='tomato' as="span" >
              <Link href="/signin">Login</Link>
            </Box>

          </Center>
          <Center>
          <Text className=' space-x-1 text-sm rounded-md'>
            Or
          </Text>
          </Center>
          
        </Stack>

        
        
        <Center className="space-y-4" flexDir="column" width={"full"} >
          <Button width={"full"} leftIcon={<FaGoogle />} bgColor="white" border={"1px solid gray"}>
            Connect with Google
          </Button>

          <Button width={"full"} className='flex flex-row items-center bg-blue border px-2 py-1 space-x-1 text-sm rounded-md' bg="#1877F2" leftIcon={<FaFacebook />} >
            Connect with facebook
          </Button>
        </Center>
      </Stack>
    );
  }
  
  export default LoginForm;
  