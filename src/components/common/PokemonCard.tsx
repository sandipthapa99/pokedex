import React from "react";
import { PokemonProps } from "../../types/PokemonDetailProps";
import { ActionIcon, Box, Button, Flex, Text, Tooltip } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { getPokeId } from "../../utils";
import {
  IconSquareRoundedMinus,
  IconSquareRoundedPlus,
} from "@tabler/icons-react";
import DetailModal from "../DetailModal";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addToTeam, removeFromTeam } from "../../redux/slice/teamSlice";
import { hover } from "@testing-library/user-event/dist/hover";

const PokemonCard = ({ pokemon }: { pokemon: PokemonProps }) => {
  // media query for small devices
  const isSmall = useMediaQuery("(max-width:768px)");

  const { name, url } = pokemon;
  const id = getPokeId(url);

  // state variables for Modal pop up
  const [opened, { open, close }] = useDisclosure(false);

  const dispatch = useAppDispatch();
  const { data: myTeam } = useAppSelector((state) => {
    return state?.teamReducer;
  });
  const isInTeam =
    myTeam &&
    myTeam.filter((item: PokemonProps) => {
      return item.name === name;
    }).length > 0;

  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        py={24}
        pos={"relative"}
        sx={(theme) => ({
          borderRadius: "24px",
          cursor: "pointer",
          transition: "transform .3s ease",
          "&:hover": {
            transform: "scale(1.025)",
            "& img": {
              transform: "scale(1.05)",
            },
            ".add-btn": {
              visibility: "inherit",
              "& button": {
                fontFamily: "Raleway",
              },
            },
          },
          ".add-btn": {
            visibility: "hidden",
            [theme.fn.smallerThan("md")]: {
              visibility: "inherit",
            },
          },
        })}
        className="card"
        onClick={open}
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
              style={{
                transition: "transform .3s ease",
                filter: "drop-shadow(8px 10px 5px #373A40)",
              }}
            />
          </Box>
        </Flex>
        <Text
          component="h2"
          sx={{
            fontSize: "22px",
            textTransform: "capitalize",
            fontFamily: "Raleway",
          }}
        >
          {name}
        </Text>
        <Box sx={{ zIndex: 1 }} className="add-btn">
          {isInTeam ? (
            <Button
              color="red.6"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(removeFromTeam(url));
              }}
            >
              Remove from Team
            </Button>
          ) : (
            <Button
              color="green.6"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToTeam(pokemon));
              }}
            >
              Add to Team
            </Button>
          )}
        </Box>
      </Flex>
      {opened && <DetailModal opened={opened} close={close} url={url} />}
    </>
  );
};

export default PokemonCard;
