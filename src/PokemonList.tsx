import { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilValue } from "recoil";
import { pokemonState } from "./state/pokemon";
import { usePokemon } from "./actions/pokemon";

function PokemonList() {
  const p = useRecoilValue(pokemonState);

  return (
    <>
      {p.map((_) => (
        <div key={_.name}>{_.name}</div>
      ))}
    </>
  );
}

export default PokemonList;
