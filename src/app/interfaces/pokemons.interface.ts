
export interface PokemonsApi {
  success: boolean;
  text: string;
  body: Body;
}

export interface Body {
  pokemons: Pokemon[];
}

export interface Pokemon {
  name: string;
  img: string;
  type: TypePokemon;
}

interface TypePokemon {
  types: Type[];
  id: number;
}

interface Type {
  name: string;
  url: string;
}


