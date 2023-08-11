import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchPokemon } from "../redux/slice/pokemonSlice";
import { Box, Button, Container, Flex, Grid } from "@mantine/core";
import PokemonCard from "../components/common/PokemonCard";
import { PokemonProps } from "../types/PokemonDetailProps";
import { useHomeStyles } from "../styles/HomeStyles";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

const Home = () => {
  // state variables
  const [offset, setOffset] = useState(0);
  const limit = 20;

  // access state data
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => {
    return state?.pokemonReducer;
  });

  const { classes } = useHomeStyles();

  useEffect(() => {
    dispatch(fetchPokemon({ offset, limit: limit }));
  }, []);
  console.log("data: ", data);
  return (
    <>
      <Container size={1568} className={classes.gridContainer}>
        <Flex
          gap={16}
          justify={"space-between"}
          sx={{
            "@media (max-width: 350px)": {
              flexDirection: "column-reverse",
              alignItems: "center",
            },
          }}
        >
          <Filter />
          <Link to={"/my-team"}>
            <Button color="yellow.8" radius="md" rightIcon={<IconArrowRight />}>
              My Team
            </Button>
          </Link>
        </Flex>

        {
          <Grid>
            {data?.results &&
              data?.results?.map((item: PokemonProps, index) => (
                <Grid.Col xl={3} lg={4} xs={6} key={index}>
                  <PokemonCard pokemon={item} />
                </Grid.Col>
              ))}
          </Grid>
        }
      </Container>
    </>
  );
};

export default Home;
