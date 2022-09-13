import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import Create from "./Components/Create";
import DataContext from "./Components/DataContext";
import List from "./Components/List";
import { create } from "./Functions/localStorage";

const key = "movies";

function App() {
  const [movies, setMovies] = useState(null);
  const [createData, setCreateData] = useState(null);

  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
  }, [createData]);

  return (
    <DataContext.Provider
      value={{
        setCreateData,
        movies
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
