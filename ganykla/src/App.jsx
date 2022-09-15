import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";

function App() {
  const [gyvunai, setGyvunai] = useState([]);
  const [tipas, setTipas] = useState("");
  const [svoris, setSvoris] = useState(0);

  useEffect(() => {
    const lokalusSandelys = localStorage.getItem('tvartas')
    console.log(lokalusSandelys)
    if(lokalusSandelys){
      console.log('if suveike')
      setGyvunai(JSON.parse(lokalusSandelys))
    }
  },[])

  const prideti = (e) => {
    e.preventDefault();
    const copyGyvunai = [...gyvunai];
    copyGyvunai.push({ type: tipas, kg: svoris });
    setGyvunai(copyGyvunai);

    localStorage.setItem('tvartas', JSON.stringify(copyGyvunai))
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="field">
          {/* Ganykla. tuscias mayvas state, kuri return viduj pramapinam
 Turim trijų rūšių gyvulius: avis, antis ir antilopes. (tai yra select(html elementas) su 3 options(avis, antis, antilope))
 Kiekvienas gyvulys turi savo svorį. (tai yra objektas, gyvuno tipas ir svori yra key; pvz antis 45 )
Parašyti localStorage CRUD aplikaciją, kurioje būtų galima pridėti naujus gyvulius su jų svoriais į ganyklą, 
ištrinti iš ganyklos ir redaguoti kiekvieno jų svorį. */}

          <h1>Mini CRUD</h1>
          <div>
            <form>
              <label htmlFor="htmlFor">Gyvunai</label>
              <select onChange={(e) => setTipas(e.target.value)} name="" id="">
                <option>Antilope</option>
                <option>Antys</option>
                <option>Avys</option>
              </select>
              <label htmlFor="htmlFor">Svoris</label>
              <input
                id="lname"
                onChange={(e) => setSvoris(e.target.value)}
                type="number"
              />
              <button onClick={prideti}>prideti</button>
            </form>
            {gyvunai.map((gyvunas, i) => (
              <p key={i}>
                {gyvunas.kg} {gyvunas.type}
              </p>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
