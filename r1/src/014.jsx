import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss'
function App() {

//mygtukas kuris daro 1, 2, 3, 4, 5, 6....
    const [count, setCount] = useState(1);

    const [read, setRead] = useState(null);

    //KONTROLIUOJAMA INPUTAS
    const [text1, setText1] = useState('');

    const [color, setColor] = useState('#57ac30');

    const [backgr, setBackgr] = useState ('#57ac30');

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


    useEffect (() => {
        localStorage.setItem('text', text1);

    }, [text1]);


        const changeText1 = (e) => {
            // console.log('bandau keisti', e.target.value)
            setText1(e.target.value);
        }
//e.target rodo kas ta eventa iskviete


    return (
        <div className="App">
          <header className="App-header" style={{backgroundColor: backgr}}>
            <>
           
            <h1>Pirmadienis Nr: {count} Nuskaityta Nr: {read}</h1>
            <div className="dog-bin">
            <button onClick={() => setCount (c => c + 1)}>+1</button>
            <button onClick={save}>save</button>
            <button onClick={readNumber}>read</button>
            <button onClick={() => setBackgr(color)}>DO BACKGR</button>

            </div>

            <input type="text" value={text1} onChange={changeText1}></input>
            <input type="color" value={color} onChange={e => setColor(e.target.value)}></input>
    
         </>
          </header>
        </div>
      );
    }
    
    export default App;