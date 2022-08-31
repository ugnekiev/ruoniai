import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon";

const Pokemons = () => {

    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('')

    useEffect (() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then((res) => res.json())
        .then(
            (result) => {
                // console.log(result.results);
                setData(result.results);

            },

            (error) => {
                setErrorMsg(error.message);

            }
        )

    },[])
       
    return <ul>
        {errorMsg ? errorMsg : "nera error'o"}
        {data.map((pokemon, index) => (
        <Pokemon key={index} vardas={pokemon.name} urlas={pokemon.url}/>
    ))}  
    </ul>
    ;
    
  };
  
  export default Pokemons;
  