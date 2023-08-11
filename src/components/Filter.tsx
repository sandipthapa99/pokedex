import { Select } from "@mantine/core";
import React, { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../hooks";
import { filterPokemon, reset } from "../redux/slice/filterPokemonSlice";

const Filter = ({
  setIsFiltered,
}: {
  setIsFiltered: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Select
      placeholder={"Filter by Generation"}
      clearable
      miw={150}
      rightSectionWidth={30}
      radius={8}
      styles={{ rightSection: { pointerEvents: "none" } }}
      onChange={(value) => {
        value ? dispatch(filterPokemon(value)) : dispatch(reset());
        value ? setIsFiltered(true) : setIsFiltered(false);
      }}
      w={"15%"}
      data={[
        { value: "1", label: "Generation I" },
        { value: "2", label: "Generation II" },
        { value: "3", label: "Generation III" },
        { value: "4", label: "Generation IV" },
        { value: "5", label: "Generation V" },
        { value: "6", label: "Generation VI" },
        { value: "7", label: "Generation VII" },
        { value: "8", label: "Generation VIII" },
        { value: "9", label: "Generation IX" },
      ]}
      mb={24}
    />
  );
};

export default Filter;
