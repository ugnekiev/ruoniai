import { useState } from "react";

function Select() {

    const [select, setSelect] = useState(2);
    //sitas stat'as skirtas kontroliuoti ir sokinet paskui select values

    //jei reiktu button'o SUBMIT reiktu ir jam naujo state

  return (
    <div className="card m-5">
      <div className="card-body">
        <h5 className="card-title">Select</h5>
        <select value={select} onChange={e => setSelect(e.target.value)} className="form-control">
          <option selected>Open this select menu</option>
          <option value="1">Krokodilai</option>
          <option value="2">Begemotai</option>
          <option value="3">Drugeliai</option>
          <option value="4">Kaciukai</option>
          <option value="5">Voriukai</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
