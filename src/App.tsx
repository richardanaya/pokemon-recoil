import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { usePokemon } from "./actions/pokemon";
import PokemonList from "./PokemonList";

function App() {
  const { loadPokemon } = usePokemon();
  const [tog, setTog] = useState(false);
  function clickToggle() {
    setTog(!tog);
  }

  return (
    <div className="App">
      Pokemon:
      <button onClick={clickToggle}>toggle</button>
      {tog.toString()}
      <Suspense fallback={<div>loading</div>}>
        <PokemonList />
      </Suspense>
    </div>
  );
}

export default App;
