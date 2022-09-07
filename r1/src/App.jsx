import { useReducer } from "react";
import { useState } from "react";
import "./App.scss";
import StarContext from "./Components/019/StartContext";
import countReduser from "./Redusers/countReduser";
// import Tevelis from "./Components/019/Tevelis";



function App() {

const [star, setStar] = useState('');
const [plus, setPlus] = useState('');

const [count, countDispach] = useReducer(countReduser, 10);

const [number, setNumber] = useState(0);

const add1 = () => {
    const action = {
        type: 'add_one'
    }
    countDispach(action);
}
const rem1 = () => {
    const action = {
        type: 'remove_one'
    }
    countDispach(action);
}
const addSome = () => {
    const action = {
        type: 'add_+',
        payload: number
    }
    countDispach(action);
}
const remSome = () => {
    const action = {
        type: 'remove_-',
        payload: number
        }
    countDispach(action);
}

  return (
    <StarContext.Provider value={
        {
            star: star,
            plus,
            setPlus,
            setStar
        }
    }>
    <div className="App-header">
      <>
        <div>
          <h1>CONTEX + REDUCER {count}</h1>
          <div className="red-sq">
            {/* <button onClick={() => setStar(s => s + '*')}>Make star</button>
            <button onClick={() => setPlus(s => s + '+')}>Make plius</button>
            <Tevelis/> */}
            <button onClick={add1}>+1</button>
            <button onClick={rem1}>-1</button>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={addSome}>+</button>
            <button onClick={remSome}>-</button>
          </div>
          
        </div>
      </>
    </div>
    </StarContext.Provider>
  );
}

export default App;
