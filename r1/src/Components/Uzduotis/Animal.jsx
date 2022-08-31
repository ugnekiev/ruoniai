import randColor from '../../Functions/randColor';

function Animal ({urlas, vardas}){
    const setBg = randColor();

    
    return <> 
    <figure>
       <img style={{width: '30%'}}src={urlas} alt={vardas + '-animal'}/>
       <figcaption style={{backgroundColor: setBg}}>{vardas}</figcaption>
    </figure>
    </>

}

export default Animal;