import React from "react";
import { PokemonProps } from "../../types/PokemonDetailProps";
import { Box, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getPokeId } from "../../utils";

const PokemonCard = ({ pokemon }: { pokemon: PokemonProps }) => {
  const { name, url } = pokemon;
  const id = getPokeId(url);

  // media query for small evices
  const isSmall = useMediaQuery("(max-width:768px)");
  return (
    <Flex
      justify={"center"}
      align={"center"}
      direction={"column"}
      py={24}
      pos={"relative"}
      sx={{
        borderRadius: "24px",
        cursor: "pointer",
      }}
      className="card"
      // onClick={open}
    >
      <Flex justify={"center"} align={"center"} pos={"relative"}>
        <Box
          component="figure"
          className="circle"
          id={`circle-${getPokeId(url)}`}
          p={24}
          sx={{
            zIndex: 1,
            borderRadius: "50%",
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt="Car model"
            height={isSmall ? "160" : "240"}
            width={isSmall ? "160" : "240"}
          />
        </Box>
      </Flex>
      <Text
        component="h2"
        sx={{
          fontSize: "22px",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Text>
    </Flex>
  );
};

export default PokemonCard;
