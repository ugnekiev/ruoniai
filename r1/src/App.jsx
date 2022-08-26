
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Books from './Components/013/Books';
import axios from 'axios';

//UZDAVINYS: pasiimti is serverio knygu sarasa ir atvaizduoti knygu pavadinimus kaip sarasa

function App() {

    const [books, setBooks] = useState(null);
    //tuscias [] reikstu kad mes nieko neturime ir mums gali serveris grazinti tuscia masyva
    //null reiksia kad mes pradzioje nieko neturime

    useEffect (() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data))
        .catch(_ => setBooks('ERROR'))

    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <>
        <h1>USE EFFECT</h1>

        <Books books={books} />

        </>

      </header>
    </div>
  );
}

export default App;