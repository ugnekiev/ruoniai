import { useEffect } from "react";
import { useState } from "react";
import DataContext from "../../ganykla/src/Components/DataContext";
import "./App.scss";

function App() {
  const [gyvunai, setGyvunai] = useState([]);
  const [tipas, setTipas] = useState("");
  const [svoris, setSvoris] = useState(0);
  const [spalva, setSpalva] = useState("");


  useEffect(() => {
    const lokalusSandelys = localStorage.getItem("tvartas");
    console.log(lokalusSandelys);
    if (lokalusSandelys) {
      console.log("if suveike");
      setGyvunai(JSON.parse(lokalusSandelys));
    }
  }, []);



  const prideti = (e) => {
    e.preventDefault();
    const copyGyvunai = [...gyvunai];
    copyGyvunai.push({ type: tipas, kg: svoris, color: spalva });
    setGyvunai(copyGyvunai);

    localStorage.setItem("tvartas", JSON.stringify(copyGyvunai));
  };


  return (
    <DataContext.Provider>
     
    <div className="App">
      <header className="App-header">
        <div className="field">
            <div className="container"> 
            <h1>Mini Locale Storage CRUD</h1>
            <div className="row">
            <div className="col-4">
            <div className="card m-4">
            <h5 className="card-header">Pasirinkti</h5>
            <div className="card-body">
              <div class="mb-3">
                  <label className="form-label">Gyvūnai</label>
                  <select className="form-control" onChange={(e) => setTipas(e.target.value)} name="" id="">
                    <option>Antilopė</option>
                    <option>Antis</option>
                    <option>Avis</option>
                  </select>
              </div>
              <div class="mb-3">
                  <label className="form-label">Svoris</label>
                  <input className="form-control" id="lname" onChange={(e) => setSvoris(e.target.value)} type="number"/>
              </div>
              <div class="mb-3">
                  <label className="form-label">Spalva</label>
                  <input
                    className="form-control" id="lname" onChange={(e) => setSpalva(e.target.value)} type="text"/>
             </div>
                  <button onClick={prideti} className="btn btn-warning">Add</button>
            </div>
            </div>
            </div>

                <div className="col-8">
                <div className="card m-4">
                <h5 className="card-header">gyvūnų sąrašas</h5>
                <div className="card-body"></div>
                <ul className="list-group">
                {gyvunai.map((gyvunas, i) => (
                  <div className="mb-3">
                  <li className="list-group-item" key={i}>
                  <div className="movie">
                    <div className="movie__content">
                      <div className="movie__content__title"> {gyvunas.kg}</div>
                      <div className="movie__content__type"> {gyvunas.type}</div>
                      <div className="movie__content__color"> {gyvunas.color}</div>
                    </div>
                  <div className="movie__buttons">
                  <button type="button" class="button btn btn-outline-warning">Edit</button>
                  <button type="button" className="button btn btn-outline-danger">Delete</button>
                  </div>
                  </div>
                  </li>
                  </div>
                ))}
                </ul>
                </div>
                </div>
              </div>
          </div>
          </div>
      </header>
    </div>
  </DataContext.Provider>
  );
}

export default App;
