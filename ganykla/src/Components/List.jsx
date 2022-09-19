import DataContext from "./DataContext";
import { useContext } from "react";

function List() {

    const {setDeleteData, gyvunai} = useContext(DataContext);

    

    return (
        <div className="col-8">
                <div className="card m-4">
                <h5 className="card-header">gyvūnų sąrašas</h5>
                <div className="card-body"></div>
                <ul className="list-group">
                {gyvunai.map((gyvunas, i) => (
                  <div className="mb-3" key={i}>
                  <li className="list-group-item" >
                  <div className="movie">
                    <div className="movie__content">
                      <div className="movie__content__title"> {gyvunas.kg}</div>
                      <div className="movie__content__type"> {gyvunas.type}</div>
                      <div className="movie__content__color"> {gyvunas.color}</div>
                    </div>
                  <div className="movie__buttons">
                  <button type="button" className="button btn btn-outline-warning">Edit</button>
                  <button onClick={() => setDeleteData(i)}type="button" className="button btn btn-outline-danger">Delete</button>
                  </div>
                  </div>
                  </li>
                  </div>
                ))}
                </ul>
                </div>
                </div>

    )
}

export default List;