import { PokemonProps } from "./PokemonDetailProps";

export interface FilterPokemonProps {
  name: string;
  pokemon_species: PokemonProps[];
  isLoading: boolean;
  isError: boolean;
}
