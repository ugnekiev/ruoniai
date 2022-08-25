import { useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function NamuDog () {


 
    const [sq, setSq] = useState(true);
    const [nr, setNr] = useState(rand(5, 25));


    const [size, setSize] = useState(50);
    const [text, setText] = useState('small');
    const [color2, setColor2] = useState(randColor());

    const doIt = () => {
        // setSize(90);
        // setText('BIG');

        setSize(s => s === 30 ? 40 : 30);
        setText(t => t === 'small' ? 'BIG' : 'small');
        setColor2(randColor());
        
    }

    const change = () => {
        setSq(!sq);
    }

    const random = () => {
        setNr(rand(5, 25));
    
    }

    const [nr2, setNr2] = useState(0);


    const plius = () => {
        setNr2(nr2 + 1);
    }

    const minus = () => {
        setNr2(nr2 - 3);
    }

    const [sqN, setSqN] = useState([]);
    //const [color3, setColor3] = useState('blue');


    const add = () => {
        setSqN (s => [...s, ''])

    };

    const [skaicius, setSkaicius] = useState(3);

    const mult5 = () => {
        setSkaicius (skaicius => skaicius * 5)

    }

    const reset = () => {
        setSkaicius (3);

    }


    return (
    <>
    <h2 style={{
        color: color2,
        fontSize: size + 'px',
        }}>I am {size} {text} Namu Dog</h2>
        <button onClick={doIt}>Press this button, please</button>

        <div className="dog-bin">
            {
                <div className={sq ? "dog cc" : "dog sq"}><h1>{nr}</h1></div>
            }
        
        </div>
        <button onClick={change}>Press change</button>
        <button onClick={random}>Random nr</button>
        
        <div className="dog-bin">
            {
                <h1>{nr2}</h1>
            }
        
        </div>
        <button onClick={plius}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={add}>pridek!</button>
        
      


        <div className="dog-bin">
            {
                sqN.map((_, i) => <div className=  "dog sq" key={i}>{sqN} </div>)
            }
        
        </div>
        
           
                    {
                        <h1>count: {skaicius}</h1>
                    }
                
                
                <button onClick={mult5}>M1</button>

                {
                        <h1>{skaicius}</h1>
                    }
                
                
                <button onClick={reset}>M2</button>
    </>
    );
    }
export default NamuDog;