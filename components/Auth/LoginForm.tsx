import {
    Box,
    Button,
    Center,
    FormControl,
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
            Hi, Welcome Back!
          </Text>
          <Text className='space-x-1 text-sm rounded-md'>
            Login to your account
          </Text>
            </Center>
        
          <FormControl isRequired>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="email"
              placeholder="enter Email Address"
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              onChange={handleInputChange}
              bg="white"
              color="brand.100"
              name="password"
              type="password"
              placeholder="enter password"
            />
          </FormControl>
            <Center justifyContent={"space-between"}>
          <Text>Forgotten Password?</Text>
            <Box color='tomato'>
            <Link  href="/forgot-password" >Reset Password</Link>
            </Box>
            </Center>
  
          <Button type="submit" bg="#F24726">
            Login
          </Button>
          <Center gap={5} justifyContent={"space-between"}>
            <Text> Don’t have an account yet? </Text>
            <Box color='tomato' as="span" >
              <Link href="/signup">Create account</Link>
            </Box>

          </Center>
          <Center>
          <Text className=' space-x-1 text-sm rounded-md'>
            OR
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
  