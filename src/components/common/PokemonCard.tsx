import React from "react";
import { PokemonProps } from "../../types/PokemonDetailProps";
import { Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getPokeId } from "../../utils";

const PokemonCard = ({ pokemon }: { pokemon: PokemonProps }) => {
  const { name, url } = pokemon;
  const id = getPokeId(url);

  // media query for small evices
  const isSmall = useMediaQuery("(max-width:768px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 0",
        borderRadius: "24px",
        cursor: "pointer",
      }}
      className="card"
      // onClick={open}
      pos={"relative"}
    >
      <Box
        className="card__wrap"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <figure
          className="circle"
          //   id={`circle-${getPokeId(url)}`}
          style={{
            zIndex: 1,
            borderRadius: "50%",
            padding: "24px",
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt="Car model"
            className="object-contain"
            height={isSmall ? "160" : "240"}
            width={isSmall ? "160" : "240"}
          />
        </figure>
      </Box>
      <Text
        component="h2"
        sx={{
          fontSize: "22px",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Text>
    </Box>
  );
};

export default PokemonCard;
