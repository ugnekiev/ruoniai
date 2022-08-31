import { useEffect, useState } from "react";

const Pokemons = () => {

    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(
        (result) => {
        
        setPokemons(result.results);
    },
        (error) => {
        
            console.log(error);
        }
    )
    
}, []);
    

    return <> {pokemons.map((p) => p.name)} </>;
    
  };
  
  export default Pokemons;
  