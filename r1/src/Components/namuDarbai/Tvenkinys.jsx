import Daiktas from "./Daiktas";


function Tvenkinys({seaPlaners}) {
    const poriniai = [];
    const neporiniai = [];
    seaPlaners.forEach(element => {
        element.id % 2 === 0 ? poriniai.push(element) : neporiniai.push(element)
    });
    console.log(seaPlaners);
    return (
    <h1>Tvenkinys 
       Poriniai: <Daiktas pirmas={poriniai}/> 
     Neporiniai: <Daiktas antras={neporiniai}/>
    </h1>
    )
}
export default Tvenkinys;