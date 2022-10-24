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
      <Stack alignItems={"center"} justifyContent={"center"} spacing="5" w="full">

        <Stack spacing="5" as="form" onSubmit={handleSubmit} w={["full", "80%"]}>

            <Center flexDir="column">
            <Text className='text-primary font-bold'>
            Hi, Welcome Back!
          </Text>
          <Text className='space-x-1 text-sm rounded-md'>
            Login to your account
          </Text>
            </Center>
        
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="username"
              placeholder="enter username"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="password"
              type="password"
              placeholder="enter password"
            />
          </FormControl>
          <HStack pb="5" justifyContent={"flex-end"} textDecoration="underline">
            <Link href="/forgot-password">Forgot password?</Link>
          </HStack>
  
          <Button type="submit" bg="#F24726">
            Login
          </Button>
          <Center gap="100" flexDir="row">
            <Text> Doesn’t have an account yet? </Text>
            <Box as="span" textDecor={"underline"}>
              <Link href="/signup">Create account</Link>
            </Box>

          </Center>
          <Center>
          <Text className=' space-x-1 text-sm rounded-md'>
            OR
          </Text>
          </Center>
          
        </Stack>

        
        
        <Center className="space-y-4" flexDir="column" >
          <Button  className='flex flex-row items-center bg-white border  px-2 py-1 space-x-1 text-sm rounded-md' leftIcon={<FaGoogle />} >
            Connect with Google
          </Button>

          <Button className='flex flex-row items-center bg-blue border px-2 py-1 space-x-1 text-sm rounded-md' bg="#1877F2" leftIcon={<FaFacebook />} >
            Connect with facebook
          </Button>
        </Center>
      </Stack>
    );
  }
  
  export default LoginForm;
  