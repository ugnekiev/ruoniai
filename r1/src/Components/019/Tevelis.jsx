import { useContext } from "react";
import Anukelis from "./Anukelis";
import StarContext from "./StartContext";

function Tevelis () {

    const {setStar} = useContext (StarContext);

    return (
    <div className="red-sq">
        <Anukelis />
        <button onClick={() => setStar(s => s + '*')}>Make star</button>
    </div>
 )

}

export default Tevelis;