import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

function App() {
  const [pokemon, setPokemon] = useState(null)
  
  const handlePokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
  }
  
  return (
    <div className="App">
      <Button 
        variant = "contained"
        onClick = {handlePokemon}
        >Fetch Pokemon</Button>
      {
        pokemon ? <div>
                    <ul className="list-group">
                        {pokemon.length > 0 && pokemon.map((pokemon, i) => {
                          return (<ListItem alignItems="center" key={i}>{pokemon.name}</ListItem>)
                      })}
                    </ul>
                  </div>
                : <p>Click Button to fetch pokemon!</p>
      }
    </div>
  );
}

export default App;
