import { atom, selector } from "recoil";
import { Pokemon, PokemonDetails, PokemonDetailsMap } from "../model/pokemon";

export const pokemonState = atom<Pokemon[]>({
  key: "Pokemon",
});

export const pokemonCountState = selector<number>({
  key: "PokemonCount",
  get: ({ get }) => {
    const list = get(pokemonState);
    return list.length;
  },
});

export const pokemonDetailsState = selector<PokemonDetailsMap>({
  key: "PokemonDetails",
  get: async ({ get }) => {
    const list = get(pokemonState);
    const details = (await Promise.all(
      list.map((_) => fetch(_.url).then((_) => _.json()))
    )) as PokemonDetails[];
    const pokemonDetals: PokemonDetailsMap = new Map();
    list.forEach((_, i) => {
      pokemonDetals.set(_.name, details[i]);
    });
    return pokemonDetals;
  },
});
