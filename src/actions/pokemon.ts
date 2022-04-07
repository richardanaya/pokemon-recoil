import { useSetRecoilState } from "recoil";
import { fetchPokemon } from "../client/pokemonClient";
import { pokemonState } from "../state/pokemon";

export function usePokemon() {
  const setPokemon = useSetRecoilState(pokemonState);
  async function loadPokemon() {
    console.log("fetching");
    setPokemon(await fetchPokemon());
  }
  return {
    loadPokemon,
  };
}
