export interface PokemonProps {
  name: string;
  url: string;
}

export interface PokemonAPIProps {
  count: number;
  next: string;
  previous: any;
  results: PokemonProps[];
}

export interface PokemonDetailProps {
  data: PokemonAPIProps | null | undefined;
  isLoading: boolean;
  isError: boolean;
}
