import logo from './logo.svg';
import './App.css';
import SearchBar from './component/search-bar/search-bar';
import { useState } from 'react';
import PokemonDetail from './component/pokemon-detail/pokemon-detail';

function App() {

  const [pokemonName, setPokemonName] = useState("25")

  const searchPokemon = (p) => {
    setPokemonName(p)
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchPokemon}/>
      <PokemonDetail pokemonName={pokemonName}/>
    </div>
  );
}

export default App;
