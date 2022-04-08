import { Suspense, useEffect } from "react";
import "./App.css";
import { usePokemon } from "./actions/pokemon";
import PokemonList from "./PokemonList";
import { useRecoilValue } from "recoil";
import { pokemonCountState } from "./state/pokemon";
import PokemonCount from "./PokemonCount";

function App() {
  const { loadPokemon } = usePokemon();
  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <div className="App">
      Pokemon:
      <Suspense fallback={<div>loading</div>}>
        <PokemonList />
      </Suspense>
    </div>
  );
}

export default App;
