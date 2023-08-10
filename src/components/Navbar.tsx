import { Box, Flex } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box w={"100%"}>
      <Flex justify={"center"} align={"center"} m={"0 auto"} px={64} py={4}>
        <Link to={"/"}>
          <img
            src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
            alt="pokedex"
            height={160}
            width={240}
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
