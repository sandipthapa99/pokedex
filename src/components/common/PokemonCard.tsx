import React from "react";
import { PokemonProps } from "../../types/PokemonDetailProps";
import { ActionIcon, Box, Flex, Text, Tooltip } from "@mantine/core";
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
        sx={{
          borderRadius: "24px",
          cursor: "pointer",
        }}
        className="card"
        onClick={open}
      >
        {myTeam && myTeam.length < 7 && (
          <Tooltip
            label={isInTeam ? "Remove from Team" : "Add to Team"}
            position="left"
            withArrow
            events={{ hover: true, focus: false, touch: false }}
          >
            <Box pos={"absolute"} top={16} right={16} sx={{ zIndex: 1 }}>
              <ActionIcon variant="transparent" size={"lg"}>
                {isInTeam ? (
                  <IconSquareRoundedMinus
                    color={"#FF6B6B"}
                    size={48}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(removeFromTeam(url));
                    }}
                  />
                ) : (
                  <IconSquareRoundedPlus
                    color={"#0d9f6a"}
                    size={48}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToTeam(pokemon));
                    }}
                  />
                )}
              </ActionIcon>
            </Box>
          </Tooltip>
        )}
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
