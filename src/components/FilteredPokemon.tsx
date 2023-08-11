import { Grid, Pagination } from "@mantine/core";
import React, { useState } from "react";
import { useAppSelector } from "../hooks";
import PokemonCard from "./common/PokemonCard";

const FilteredPokemon = () => {
  // access filtered store data
  const { pokemon_species } = useAppSelector((state) => {
    return state?.filterPokemonReducer;
  });

  // state variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 20;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = pokemon_species.slice(indexOfFirstData, indexOfLastData);

  const paginate = (value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 10, behavior: "smooth" });
  };
  return (
    <>
      <Grid>
        {pokemon_species &&
          currentData.length > 0 &&
          currentData?.map((item, index) => (
            <Grid.Col xl={3} lg={4} md={6} xs={12} key={index}>
              <PokemonCard pokemon={item} />
            </Grid.Col>
          ))}
      </Grid>

      <Pagination
        sx={{ justifyContent: "center" }}
        radius={8}
        mt={28}
        total={
          pokemon_species
            ? (Math.ceil(pokemon_species?.length / dataPerPage) as number)
            : 0
        }
        value={currentPage}
        onChange={(val) => paginate(val)}
      />
    </>
  );
};

export default FilteredPokemon;
