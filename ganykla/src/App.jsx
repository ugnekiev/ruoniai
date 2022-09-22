import { useEffect, useState } from "react";
import DataContext from "../../ganykla/src/Components/DataContext";
import "./App.scss";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import List from "./Components/List";

function App() {

  const [gyvunai, setGyvunai] = useState([]);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const lokalusSandelys = localStorage.getItem("tvartas");
    console.log(lokalusSandelys);
    if (lokalusSandelys) {
      console.log("if suveike");
      setGyvunai(JSON.parse(lokalusSandelys));
    }
  }, []);

    function destroy (key, id) {
    const lokalusSandelys = JSON.parse(localStorage.getItem(key)).filter((row, i) => i !== id)
    console.log(lokalusSandelys, id)
  
    setGyvunai(lokalusSandelys);
        
    localStorage.setItem("tvartas", JSON.stringify(lokalusSandelys));

}

  useEffect(() => {
    console.log('useeffect delete')
    if (null === deleteData) {
      return;
    }
    destroy("tvartas", deleteData);
    setDeleteData(null)
  
  }, [deleteData]);

  

  function edit (key, editData) {
    const copyGyvunai = [...gyvunai]
    copyGyvunai[editData.i]= {type: editData.tipas, kg: editData.svoris, color: copyGyvunai[editData.i].color, update: true}
console.log(copyGyvunai)

    // const lokalusSandelys = JSON.parse(localStorage.getItem(key)).filter((row, i) => i !== id)
    // console.log(lokalusSandelys, id)
  
    setGyvunai(copyGyvunai);
        
    localStorage.setItem(key, JSON.stringify(copyGyvunai));

}


  useEffect(() => {
    
    if (null === editData) {
      return;
    }
    edit("tvartas", editData);
    setDeleteData(null)
  
  }, [editData]);



  return (
    <DataContext.Provider value={{
      setGyvunai,
      gyvunai,
      setDeleteData,
      modalData,
      setModalData,
      setEditData
    }} >
     
    <div className="App">
      <header className="App-header">
        <div className="field">
            <div className="container"> 
            <h1>Mini Locale Storage CRUD</h1>
            <div className="row">
            <Create />
            <List />

              </div>
          </div>
          </div>
      </header>
    </div>
    <Edit />
  </DataContext.Provider>
  );
}

export default App;
