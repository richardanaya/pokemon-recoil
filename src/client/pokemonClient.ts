import { Pokemon } from "../model/pokemon";

export async function fetchPokemon() {
  return (
    await fetch("https://pokeapi.co/api/v2/pokemon/").then((_) => _.json())
  ).results as Pokemon[];
}
