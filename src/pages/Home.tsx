import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchPokemon } from "../redux/slice/pokemonSlice";
import { Grid } from "@mantine/core";
import PokemonCard from "../components/common/PokemonCard";
import { PokemonProps } from "../types/PokemonDetailProps";

const Home = () => {
  // state variables
  const [offset, setOffset] = useState(0);
  const limit = 20;

  // access state data
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => {
    return state?.pokemonReducer;
  });

  useEffect(() => {
    dispatch(fetchPokemon({ offset, limit: limit }));
  }, []);
  console.log("data: ", data);
  return (
    <>
      <Grid>
        {data?.results &&
          data?.results?.map((item: PokemonProps, index) => (
            <Grid.Col xl={3} lg={4} xs={6} key={index}>
              <PokemonCard pokemon={item} />
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
};

export default Home;
