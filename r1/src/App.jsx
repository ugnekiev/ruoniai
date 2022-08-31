//import { useEffect } from 'react';
import './App.scss';
import Animals from './Components/Uzduotis/Animals';
//import Pokemons from './Components/Uzduotis/Pokemons';


function App() {

    
    
  return (
    <div className="App1">
        <>
        <h1>UZDUOTIS</h1>
            <ol>
            <Animals />
            </ol>

            <h2>Užduotis su vienu API</h2>

         {/* <Pokemons />  */}

        
        </>
    </div>
  );
}

export default App;