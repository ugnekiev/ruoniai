const sp = [
  {id: 1, type: 'man', name: 'Lina', color: 'blue'},
  {id: 2, type: 'car', name: 'Opel', color: 'red'},
  {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
  {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
  {id: 5, type: 'man', name: 'Tomas', color: 'green'},
  {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
  {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
  {id: 8, type: 'car', name: 'MB', color: 'blue'},
  {id: 9, type: 'car', name: 'ZIL', color: 'red'},
  {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
];

//uzduotis ---> atspausdinti visus vardus

sp.forEach(el => console.log(el.name, el.color));


console.log('-----------------MAP-------------------');
//MAP ne tik praeina pro masyvo elementus (kai forEach), bet ir padaro modifikuota kopija, to, ka mes jam 
//pateikiam. nes pvz. buvo undefined, ir galime perduot "X"

//sp.map(el => console.log(el.name, el.color));
const map = sp.map(el => 'X');

console.log(map);

//MASYVAS, KURIS GRAZINA TIK VARDUS
const mapVardai = sp.map(el => el.name);
console.log(mapVardai)

//uzduotis ---> pries visus vardus uzrasyti X
//...el ---> spread operatorius. Jis isspreadino visa masyva sp tik mane overwritino su modifikacija 'X'.
//TOKIU BUDU GALIME MODIFIKUOTI VIENA KAZKURIA SAVYBE, bet galime ir prideti papildomu savybiu
const mapVardai1 = sp.map(el => ({...el, name: 'X ' + el.name, what: 'nu na'}));
console.log(mapVardai1)

//UZDUOTIS ---> sukurti masyva, kuriame yra skaiciai rand nuo 1 iki 100

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}
//tuscias array -->Array(10) --> tuscias[Array(10)] --> [...Array(10)]
const ats = [...Array(10)].map(_ => rand(1, 100));

//console.log([...Array(10)]);
//console.log(Array(10));
console.log(ats);

console.log('-----------------FILTER-------------------');
//atfiltruoja, kas yra true
//nera galimybes isfiltruoti ir ka nors prideti. pvz 'X'

//const filter = sp.filter(el => true)
const filter = sp.filter(el => el.type ==  'car');

console.log(filter);

//UZDUOTIS --> visus car padaryti ZIL
//taigi reikia ir filtro ir keitimo
const filter2 = sp.filter(el => el.type == 'car')
.map(el => ({...el,  color: 'red'}))
//.map(el => ({...el, name: 'zil'}))

console.log(filter2);

console.log('-----------------FIND-------------------');
//spalvos red suradimas pagal 'bebra"

const filter3 = sp.find(el => el.name == 'Bebras').color;
console.log(filter3);

//jei yra keli vienodi type ar name pagal ka ieskome el - tai pasiimt pirmaji.
//labai daznai find naudojamas ieskant su id

const filter4 = sp.find(el => el.id == 4);
console.log(filter4);

const filter5 = sp.find(el => el.color == "red" && el.type == "animal").id;
console.log(filter5);

console.log('-----------------FILTER/TRYNIMAS-------------------');
//UZDUOTIS --> istrinti bebra 

const trynimas = sp.filter(el => el.name != 'Bebras');
console.log(trynimas);

console.log('-----------------SORT-------------------');
//sortas viska sumakalioja, sukeicia ir nieko negrazina

console.log([...sp]);

/*sp.sort((a, b) => {

  if (a.name > b.name){
    return 1;
  }
  

  if (a.name < b.name) {
    return -1;
  }
    return 0

}); */

sp.sort((a, b) => a.name.localeCompare(b.name))

console.log(...sp);


console.log('-----------------REDUCE------------------');

const masyvas = [1, 2, 3, 4];

//console.log(masyvas.reduce((previousValue, curentValue) => previousValue + curentValue));

//su pradine reiksme

console.log(masyvas.reduce((previousValue, curentValue) => previousValue + curentValue, 100));





