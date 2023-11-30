import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
} from "@chakra-ui/react";
import { register } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    avatar: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
    console.log(userDetails)
    register(userDetails).then((res) => {
      navigate("/signin")
    })
    .catch((err)=>{
        console.log(err.message)
    })
  };

  return (
    <div>
      <Heading as="h1" size="2xl" noOfLines={1}>
        Signup Here
      </Heading>
      <Container maxW="md">
        <form onSubmit={handelSubmit}>
          <FormControl>
            <FormLabel>Add Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handelsetDetails}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Add Avatar</FormLabel>
            <Input
              type="text"
              name="avatar"
              value={userDetails.avatar}
              onChange={handelsetDetails}
            />
          </FormControl>
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

export default Register;
