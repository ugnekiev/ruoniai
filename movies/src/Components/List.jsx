import { useContext } from "react";
import DataContext from "./DataContext";
import Line from "./Line";

function List() {

    const {movies} = useContext(DataContext);
  return (
    <div className="card m-4">
      <h5 className="card-header">Movies List</h5>
      <div className="card-body"></div>
      <ul className="list-group">
        {
            movies?.map(m => <Line key={m.id} movie={m} />)
        }
      </ul>
    </div>
  );
}
export default List;
