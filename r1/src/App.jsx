
import "./App.scss";
import ButtonsGroup from "./Components/ButtonsGroup/ButtonsGroup";
import Square from "./Components/Square/Square";
import { useState } from "react";
import { useEffect } from "react";
import randColor from "./Functions/randColor";



function App() {

  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
      setColor(randColor());
  }, [number]);

    return (
    <div className="App-header">
    
        <div>
          <h1>Total Recall</h1>
          
          <Square color = 'crimson'/>
          <h2 style={{color: color}}>{number}</h2>
          <ButtonsGroup setNumber={setNumber} t={0} c={100}/>
          <ButtonsGroup setNumber={setNumber} t={100} c={20} />
          <ButtonsGroup setNumber={setNumber} t={120}  c={5}/>
        </div>

        
   
    </div>

  );
}

export default App;
