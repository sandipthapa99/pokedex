import { ActionIcon, Box, Container, Grid, Title } from "@mantine/core";
import React from "react";
import { useHomeStyles } from "../styles/HomeStyles";
import Empty from "../components/common/Empty";
import { useAppSelector } from "../hooks";
import { PokemonProps } from "../types/PokemonDetailProps";
import PokemonCard from "../components/common/PokemonCard";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const { classes } = useHomeStyles();
  const { data } = useAppSelector((state) => {
    return state?.teamReducer;
  });

  const navigate = useNavigate();

  const hasTeam = data && data.length > 0;

  return (
    <Container size={1568}>
      <Box m={"64"} className={classes.gridContainer} pos={"relative"}>
        {hasTeam && (
          <>
            <ActionIcon
              pos={"absolute"}
              left={0}
              top={4}
              color="blue"
              size={"lg"}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => navigate(-1)}
            >
              <IconArrowLeft />
            </ActionIcon>
            <Title
              order={2}
              sx={(theme) => ({
                fontFamily: `Raleway, ${theme.fontFamily}`,
                color: theme.colors.gray[7],
              })}
              weight={600}
              align="center"
              mb={32}
            >
              My Team
            </Title>
          </>
        )}
        <Grid>
          {hasTeam ? (
            data.map((item: PokemonProps, index: number) => (
              <Grid.Col xl={3} lg={4} md={6} xs={12} key={index}>
                <PokemonCard key={index} pokemon={item} />
              </Grid.Col>
            ))
          ) : (
            <Empty
              title="Your Team is Empty. "
              description="Add your favourite Pokémon to the team now."
              btnTitle="Create Team"
              link="/"
            />
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Team;
