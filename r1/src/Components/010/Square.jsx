import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

   function Square({color, name, size, show}) {
//square () <- color ir name pateks
        if(!show) {
            return null;
        }
    
        return (
            <div className="cat App-logo" style={{
                backgroundColor: size > 300 ? randColor() : color,
                width: rand(100, 200) + "px",
                height: rand(100, 200) + "px"
            }}>
    <span className="App-logo2">{name}</span>
    </div>
        )
    }
    
export default Square;