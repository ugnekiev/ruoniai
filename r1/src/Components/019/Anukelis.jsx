import { useContext } from "react";
import StarContext from "./StartContext";

function Anukelis () {

    const {star, plus, setPlus} = useContext(StarContext);
    
    return (
     <div className="red-sq">
        <h2>{star} <span style={{color: "blue"}}>{plus}</span></h2>
        <button onClick={() => setPlus(s => s + '+')}>Make plius</button>
    </div>
    )
}

export default Anukelis;