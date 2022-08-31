import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss'
function App() {

//mygtukas kuris daro 1, 2, 3, 4, 5, 6....
    const [count, setCount] = useState(1);

    const [read, setRead] = useState(null);

    const save = () => {
        localStorage.setItem('number', count);
        const jobj = JSON.stringify ({cat: 'big'});
        localStorage.setItem('obj', jobj)
    }

    const readNumber = () => {
        setRead(localStorage.getItem('number'));
        const obj = JSON.parse(localStorage.getItem('obj'))
        console.log(obj.cat)
    }
    

//kodas, kai READ atsiranda perkrovus puslapi
    useEffect(() => {
        setRead(localStorage.getItem('number'));
        const obj = JSON.parse(localStorage.getItem('obj'));
        if(null === obj) {
            console.log('cats gone');
        } else {
            console.log(obj.cat);
        }
    }, []);
//kai tik uzsikrauna puslapis nukaito sia reiksme: setRead(localStorage.getItem('number')

    return (
        <div className="App">
          <header className="App-header">
            <>
           
            <h1>Pirmadienis Nr: {count}</h1>
            <h2>Nuskaityta Nr: {read}</h2>
            <button onClick={() => setCount (c => c + 1)}>+1</button>
            <button onClick={save}>save</button>
            <button onClick={readNumber}>read</button>
    
    
         </>
          </header>
        </div>
      );
    }
    
    export default App;