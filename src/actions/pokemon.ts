import { differenceInMilliseconds, secondsToMilliseconds } from "date-fns";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { fetchPokemon } from "../client/pokemonClient";
import { pokemonState } from "../state/pokemon";
let lastRetrieved: Date | undefined;
export function usePokemon() {
  const setPokemon = useSetRecoilState(pokemonState);

  useEffect(() => {
    loadPokemon();
  }, []);

  if (lastRetrieved) {
    const difference = differenceInMilliseconds(new Date(), lastRetrieved);
    if (difference > secondsToMilliseconds(5)) {
      console.log("cache has been used more than 5 seconds, reload");
      loadPokemon();
    }
  }

  async function loadPokemon() {
    lastRetrieved = new Date();
    setPokemon(await fetchPokemon());
    console.log("fetched");
  }
  return {
    loadPokemon,
  };
}
