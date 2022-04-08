export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  abilities: { ability: { name: string } }[];
  species: { name: string };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
}

export type PokemonDetailsMap = Map<string, PokemonDetails>;
