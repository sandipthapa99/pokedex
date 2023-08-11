import { Box, Container, Grid, Title } from "@mantine/core";
import React from "react";
import { useHomeStyles } from "../styles/HomeStyles";
import Empty from "../components/common/Empty";
import { useAppSelector } from "../hooks";
import { PokemonProps } from "../types/PokemonDetailProps";
import PokemonCard from "../components/common/PokemonCard";

const Team = () => {
  const { classes } = useHomeStyles();
  const { data } = useAppSelector((state) => {
    return state?.teamReducer;
  });

  const hasTeam = data && data.length > 0;

  return (
    <Container size={1568}>
      <Box m={"64"} className={classes.gridContainer}>
        {hasTeam && (
          <Title
            order={2}
            sx={(theme) => ({
              fontFamily: `Poppins, ${theme.fontFamily}`,
              color: theme.colors.gray[7],
            })}
            weight={600}
            align="center"
            mb={32}
          >
            My Team
          </Title>
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
