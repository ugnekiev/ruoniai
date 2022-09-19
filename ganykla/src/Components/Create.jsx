import { useContext } from "react";
import {  useState } from "react";
import DataContext from "./DataContext";


function Create() {
        
        
       const {setGyvunai, gyvunai} = useContext(DataContext);
       
        const [tipas, setTipas] = useState("");
        const [svoris, setSvoris] = useState(0);
        const [spalva, setSpalva] = useState("");

        const prideti = (e) => {
            e.preventDefault();
            const copyGyvunai = [...gyvunai];
            copyGyvunai.push({ type: tipas, kg: svoris, color: spalva });
            setGyvunai(copyGyvunai);
        
            localStorage.setItem("tvartas", JSON.stringify(copyGyvunai));
          };

return (

    <div className="col-4">
            <div className="card m-4">
            <h5 className="card-header">Pasirinkti</h5>
            <div className="card-body">
              <div className="mb-3">
                  <label className="form-label">Gyvūnai</label>
                  <select className="form-control" onChange={(e) => setTipas(e.target.value)} name="" id="">
                    <option>Antilopė</option>
                    <option>Antis</option>
                    <option>Avis</option>
                  </select>
              </div>
              <div className="mb-3">
                  <label className="form-label">Svoris</label>
                  <input className="form-control" id="lname" onChange={(e) => setSvoris(e.target.value)} type="number"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Spalva</label>
                  <input
                    className="form-control" id="lname" onChange={(e) => setSpalva(e.target.value)} type="text"/>
             </div>
                  <button onClick={prideti} className="btn btn-warning">Add</button>
            </div>
            </div>
            </div>
)

}

export default Create;