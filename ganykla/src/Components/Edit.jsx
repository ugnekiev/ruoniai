import { useContext } from "react";
import { useEffect } from "react";
import {  useState } from "react";
import DataContext from "./DataContext";


function Edit() {

    const {setModalData, modalData, setEditData} = useContext(DataContext);
       
    const [tipas, setTipas] = useState("");
    const [svoris, setSvoris] = useState(0);

    const save = () => {
      let i = modalData.i
      setEditData ({
        tipas,
        svoris,
        i

      });
      setModalData (null);
    }
    
    useEffect(() => {
      if (null === modalData) {
        return;
    }
    console.log(modalData.i)
    setTipas(modalData.type);
    setSvoris(modalData.kg)

    }, [modalData]);

    if (null === modalData) {
        return null;
    }


    return (
      <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">keisti svori</h5>
            <button onClick={() => setModalData(null)} type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            {/* cia isicopinam CREATE struktura */}
        
            <div className="card m-4">
            <h5 className="card-header">Pasirinkti</h5>
            <div className="card-body">
              <div className="mb-3">
                  <label className="form-label">Gyvūnai</label>
                  <select className="form-control" value={tipas} onChange={(e) => setTipas(e.target.value)} name="" id="">
                    <option>Antilopė</option>
                    <option>Antis</option>
                    <option>Avis</option>
                  </select>
              </div>
              <div className="mb-3">
                  <label className="form-label">Svoris</label>
                  <input className="form-control" id="lname" value={svoris} onChange={(e) => setSvoris(e.target.value)} type="number"/>
              </div>
            </div>
            </div>
            </div>
          
          <div class="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setModalData(null)}>Close</button>
            <button type="button" className="btn btn-primary" onClick={save}>Save changes</button>
          </div>
          </div>
        </div>
      </div>
  
    )
}

export default Edit;