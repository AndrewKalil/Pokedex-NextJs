export interface PokemonsData {
  count: number;
  next?: string;
  previous?: string;
  results: SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}
