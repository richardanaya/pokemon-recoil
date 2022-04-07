import { atom, selector } from "recoil";
import { Pokemon } from "../model/pokemon";

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
