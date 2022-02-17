export interface PokemonApi {
  success: boolean;
  text: string;
  body: Body;
}

interface Body {
  pokemon: Pokemon;
}

export interface Pokemon {
  id: number;
  base_experience: number;
  height: number;
  name: string;
  sprites: string;
  stats: Stat2[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Stat;
}

interface Stat2 {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface Stat {
  name: string;
  url: string;
}
