import React from "react";
import { PokemonProps } from "../../types/PokemonDetailProps";
import { ActionIcon, Box, Flex, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { getPokeId } from "../../utils";
import { IconSquareRoundedPlus } from "@tabler/icons-react";
import DetailModal from "../DetailModal";

const PokemonCard = ({ pokemon }: { pokemon: PokemonProps }) => {
  const { name, url } = pokemon;
  const id = getPokeId(url);

  // state variables for Modal pop up
  const [opened, { open, close }] = useDisclosure(false);

  // media query for small devices
  const isSmall = useMediaQuery("(max-width:768px)");
  return (
    <>
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
        onClick={open}
      >
        <Box pos={"absolute"} top={16} right={16} sx={{ zIndex: 1 }}>
          <ActionIcon variant="transparent">
            <IconSquareRoundedPlus
              color={"#0d9f6a"}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </ActionIcon>
        </Box>
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
      {opened && <DetailModal opened={opened} close={close} url={url} />}
    </>
  );
};

export default PokemonCard;
