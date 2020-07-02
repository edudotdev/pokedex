import React, { useEffect, useState } from 'react';
import Pokedex from './components/Pokedex'
 
function App() {

  const [pokemon, setPokemon] = useState({})
  const [id, setId] = useState(1)



  useEffect(() => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => setPokemon(data))
 

  }, [id]) 
 
  return (

    <>
   
        <Pokedex 
          id={id}
          setId={setId}
          pokemon={pokemon}
        />
    
    </>

  );
}

export default App;
