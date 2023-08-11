import { Button, Grid } from "@mantine/core";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PokemonProps } from "../types/PokemonDetailProps";
import PokemonCard from "./common/PokemonCard";
import { fetchPokemon } from "../redux/slice/pokemonSlice";
import { IconArrowDown } from "@tabler/icons-react";

const AllPokemon = () => {
  // state variables for page data sizes
  const [offset, setOffset] = useState(0);
  const limit = 20;

  // access state data
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => {
    return state?.pokemonReducer;
  });

  const loadMore = (offset: number) => {
    dispatch(fetchPokemon({ offset: offset, limit: limit }));
  };
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
      {data?.results && data?.results?.length > 0 && (
        <Button
          mt={24}
          onClick={() => {
            setOffset(offset + limit);
            loadMore(offset + limit);
          }}
          variant="outline"
          loading={isLoading}
          rightIcon={<IconArrowDown size={20} />}
          sx={{
            zIndex: 2,
          }}
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default AllPokemon;
