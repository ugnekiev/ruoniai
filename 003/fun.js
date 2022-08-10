//DEKLARACIJA, ji consoleje neatsivaizduoja

// GERIAU NAUDOTI ANAONIMINE F-ja
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const valio = function() {

    const kitaFunkcija = function() {
        return 'Cia buvo kita funksija';
    }
    //if(rand(0, 1)) {
    //    return 'Valio!';
    //}
    //return 'Visai ne valio!';
    return kitaFunkcija();
}




console.log( valio() );

const ka = valio;

let dar = ka();

console.log(ka());


let spalva;

spalva = 'red';

function color() {

    console.log(spalva)
}

spalva = 'green';

color();

spalva = 'black';

color();

spalva = 'pink';






