import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { login } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";

function Login() {
  const toast = useToast();
  const Dispatch = useDispatch()

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handelsetDetails = (e) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    Dispatch(login(userDetails))
      .then((res) => {
        if (res) {
          toast({
            title: "Login Successful!.",
            description: "success.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
            toast({
                title: "Login Error!.",
                description: "faliure.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Heading as="h1" size="2xl" noOfLines={1}>
        Login Here
      </Heading>
      <Container maxW="md">
        <form onSubmit={handelSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handelsetDetails}
            />
          </FormControl>
          <FormControl>
            <FormLabel>password Here</FormLabel>
            <Input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handelsetDetails}
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Login;
