import { Box, Flex, Group, Modal, ScrollArea, Tabs, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getColor, getPokeId } from "../utils";
import { fetchPokemonDetail } from "../redux/slice/pokemonDetailSlice";
import { IconArrowLeft } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const DetailModal = ({
  opened,
  close,
  url,
}: {
  opened: boolean;
  close: () => void;
  url: string;
}) => {
  const { data } = useAppSelector((state) => {
    return state?.pokemonDetailReducer;
  });

  const isSmall = useMediaQuery("(max-width:48em)");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemonDetail(url));
  }, []);

  const backgroundColor = getColor(`circle-${getPokeId(url)}`);
  return (
    <Modal
      opened={opened}
      onClose={() => {
        close();
      }}
      centered
      size={"lg"}
      withCloseButton={false}
      closeOnClickOutside={false}
      sx={{
        ".mantine-Modal-inner": {
          width: "90%",
          ".mantine-Paper-root": {
            backgroundColor: `${backgroundColor}`,
            padding: 0,
            borderRadius: 24,
          },
          ".mantine-Modal-body": {
            padding: 0,
            fontFamily: "Poppins",
          },
        },
      }}
    >
      <Box
        pos={"absolute"}
        top={26}
        left={20}
        onClick={() => close()}
        sx={{
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <IconArrowLeft color="#fff" size={30} />
      </Box>

      <Text
        component="h1"
        size={isSmall ? 120 : 200}
        pos={"absolute"}
        top={isSmall ? 70 : 0}
        right={isSmall ? 0 : 15}
        opacity={0.1}
        color="#fff"
        weight={600}
        m={0}
        sx={{
          letterSpacing: "3px",
        }}
      >
        #{data?.id.toString().padStart(4, "0")}
      </Text>
      <Flex align={"center"} justify={"center"} direction={"column"}>
        <Text
          component="h2"
          transform="capitalize"
          p={16}
          color="#fff"
          size={32}
          weight={700}
          m={0}
          sx={{
            fontFamily: "Poppins",
          }}
        >
          {data?.name}
        </Text>
        <Group sx={{ gap: 8 }}>
          {data?.types &&
            data?.types?.map((item, index) => (
              <Text
                key={index}
                py={2}
                px={16}
                sx={{
                  background: "#ffffff50",
                  borderRadius: 24,
                  textTransform: "capitalize",
                  color: "#f1f1f1",
                  fontWeight: 600,
                }}
              >
                {item?.type?.name}
              </Text>
            ))}
        </Group>
        <Box component="figure" sx={{ zIndex: 1 }}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
            alt="Car model"
            className="object-contain"
            height={"264"}
            width={"264"}
          />
        </Box>
      </Flex>
      <Box
        p={16}
        bg={"#fff"}
        sx={{
          borderRadius: "16px 16px 0 0",
        }}
      >
        <Tabs
          defaultValue="about"
          radius={"lg"}
          sx={(theme) => ({
            ".mantine-Tabs-tabLabel": {
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "Poppins",
              color: theme.colors.dark[7],
            },
            "& p": {
              textTransform: "capitalize",
              fontWeight: 500,
              color: theme.colors.dark[9],
            },
          })}
        >
          <Tabs.List sx={{}}>
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="stats">Base Stats</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about" pt="xs" px={24}>
            <ScrollArea h={180} scrollbarSize={3} scrollHideDelay={500}>
              <p>Height : {data?.height ?? "Data Not Available"}</p>
              <p>Weight : {data?.weight ?? "Data Not Available"}</p>
              <p>
                Abilities :{" "}
                {data?.abilities
                  ? data?.abilities.map((item, index: number) => (
                      <span key={index}>
                        {item?.ability?.name}
                        {index === data?.abilities.length - 1 ? "" : ","}{" "}
                      </span>
                    ))
                  : "Data Not Available"}
              </p>
              <p>
                Types :{" "}
                {data?.types
                  ? data?.types.map((item, index: number) => (
                      <span key={index}>
                        {item?.type?.name}
                        {index === data?.abilities.length - 1 ? "" : ","}{" "}
                      </span>
                    ))
                  : "Data Not Available"}
              </p>
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="stats" pt="xs" px={24}>
            <ScrollArea h={180} scrollbarSize={3} scrollHideDelay={500}>
              {data?.stats
                ? data?.stats.map((item, index) => (
                    <p key={index}>
                      {item?.stat?.name} : <span>{item?.base_stat}</span>
                    </p>
                  ))
                : "No Data Available"}
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Modal>
  );
};

export default DetailModal;
