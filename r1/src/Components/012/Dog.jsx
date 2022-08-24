
import { useState } from "react";
import randColor from '../../Functions/randColor';
import rand from '../../Functions/rand';

function Dog() {

    const [size, setSize] = useState(30);
    const [text, setText] = useState('small');
    const [color2, setColor2] = useState(randColor());
    const [sq, setSq] = useState([]);
   

    const doIt = () => {
        // setSize(90);
        // setText('BIG');

        //EDITAI
        setSize(s => s === 30 ? 40 : 30);
        setText(t => t === 'small' ? 'BIG' : 'small');

        //INSERTAI
        setColor2(randColor());
    };

    const add = () => {
        setSq(s => [...s, {color: randColor(), 
                    nr: rand(100, 999),
                    row: s.length,
                    show: true

                
                }]);
                    
    }


    const doSort = () => {
        setSq(s => [...s].sort((a, b) => a.nr - b.nr));
    }

    const doSort2 = () => {
        setSq(s => [...s].sort((a, b) => b.nr - a.nr));
    }
    
    const doSortDefault = () => {
        setSq(s => [...s].sort((a, b) => a.row - b.row));
    }

    const doFilterMore500 = () => {
        setSq(s => s.map(sq => sq.nr > 500 ? {...sq, show: true} : {...sq, show: false}))
    }

    const showAll = () => {
        setSq(s => s.map(sq => ({...sq, show: true})))
    }

 
    return (
        <>
        <h2 style={{
            color: color2,
            fontSize: size + 'px'
        }}>Im {text} dog</h2>
        <button onClick={doIt}>Press this button, please</button>
        <div className="dog-bin">
            {
                sq.map((c, i) => c.show ? <div style={{backgroundColor: c.color}} className="dog sq" key={i}>{c.nr}</div> : null)
            }
        </div>
        <button onClick={add}>[]</button>
        <button onClick={doSort}>sortAZ</button>
        <button onClick={doSort2}>sortZA</button>
        <button onClick={doSortDefault}>sortdefault</button>
        <button onClick={doFilterMore500}>sort more 500</button>
        <button onClick={showAll}>showAll</button>
        </>
    );


}

export default Dog;