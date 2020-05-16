import React, { useState } from 'react';
import './App.css';
import { Button, Grid } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState(null)
  
  const handlePokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => setPokemon(res.data.results))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <Grid
        //container
        direction="row"
        justify="center"
        alignItems="center"
        >
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
      </Grid>
    </div>
  );
}

export default App;
