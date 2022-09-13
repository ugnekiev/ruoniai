
import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import axios from 'axios';



function App() {
    const [trees, setTress] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3003/trees/3/?sort=1')
        .then(res => 
            {
                setTress(res.data)
            })
    }, []);
     

    return (
    <div className="App-header">
      <>
        <div>
          <h1>SERVER</h1>
          <ul>
            {
                trees.map(t=> <li key={t.id}>{t.title}<i></i> {t.height}</li>)
            }
          </ul>
        </div>
      </>
    </div>

  );
}

export default App;
