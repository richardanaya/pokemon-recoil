import { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilValue } from "recoil";
import { pokemonDetailsState, pokemonState } from "./state/pokemon";
import { usePokemon } from "./actions/pokemon";

function PokemonList() {
  const p = useRecoilValue(pokemonDetailsState);
  const { loadPokemon } = usePokemon();

  return (
    <>
      {Array.from(p.entries()).map(([name, details]) => (
        <div key={name}>
          {name}: {details.abilities.map((_) => _.ability.name).join(", ")}
        </div>
      ))}
    </>
  );
}

export default PokemonList;
