import { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilValue } from "recoil";
import { pokemonCountState, pokemonState } from "./state/pokemon";
import { usePokemon } from "./actions/pokemon";

function PokemonCount() {
  const p = useRecoilValue(pokemonCountState);

  return <>{p}</>;
}

export default PokemonCount;
