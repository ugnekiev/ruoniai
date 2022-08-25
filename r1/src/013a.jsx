import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';


function App() {


const [skaicius, setSkaicius] = useState(null);
const [bo, setBo] = useState(true);



useEffect (() => {
    console.log('I AM READY!');
}, []);

//GALI STEBETI STAT'A
useEffect (() => {
    if (skaicius === null) {
        setSkaicius (3);
    };



    console.log('Skaicius pasikeicia');

}, [skaicius]);

useEffect (() => {
    console.log('PASPAUSTAS');
     }, [bo]);

const mult5 = () => {
    setSkaicius (skaicius => skaicius * 5)

}

const reset = () => {
    setSkaicius (3);

}

const cha = () => {
    setBo (b => !b);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>USE EFFECT</h1>

        <h2 style={{color: bo ? 'crimson' : 'skyblue'}}>count: {skaicius ?? 'NERA'}</h2>
        
        <button onClick={mult5}>M1</button>
        <button onClick={reset}>M2</button>
        {/* cha atvaizduosime count spalva */}
        <button onClick={cha}>CHA</button>
            
       

      </header>
    </div>
  );
}

export default App;