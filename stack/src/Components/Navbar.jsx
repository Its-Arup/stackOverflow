import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Stack direction="row" m={"auto"}>
        <Link to={"/singup"}>SignUp</Link>
        <Link to={"/signin"}>SignIn</Link>
        <Link to={"/forum"}>Forum</Link>
      </Stack>
    </div>
  );
}

export default Navbar;
