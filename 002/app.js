let ka;

if (15 > 7 && 1000 > 100) {
    ka = 'jo';
} else {
    ka = 'ne jo';
}

console.log(8 && 222);
//222
//1-as yra T - tai tada eina i antra - patikrina i jei true pasiima
console.log(0 && 222);
//0
// 1-as yra F, tai toliau ir netikrina - iskart ir grazina 0 (false)
console.log(0 || 222);
//222
//1-as yra F - tai eina tikrinti ir antra
console.log(222 || 0);
//222

//ternary

let ka1;

ka1 =  15 < 7 && 1000 > 100 ?  'jo' : 'ne jo';
//ka1 =  (15 < 7 && 1000 > 100) ?  'jo' : 'ne jo';
console.log(ka1);

console.log('-------------------');

let sa = 4; 

51 > 7 ? sa++ : sa--;

console.log(sa);

console.log('-------------------');
   
const age = 17;

const arGalimaAklo = age >= 26 ? 'alko' : 'sultys';

console.log(arGalimaAklo);
    
const pasveikinimas = (person) => {
    const name = person ? person.name : 'stranger'
    return `Kaip laikais ${person.name}`;
}
console.log(pasveikinimas ({name: 'Anele'}));
//console.log(pasveikinimas (null));

if (2 > 8) {
    ka = 'jo';
} else if (8 > 16) {
    ka = 'liutas';
} else {
    ka = 'ne jo'
}

console.log(ka);

console.log('------SWITCH------');

const kas = 'A';

switch (kas) {
    case 'A':
        console.log('A');
    case 'B':
        console.log('B');
    case 'C':
        console.log('C');

}

const pastomatas = 'M';

switch (pastomatas) {
    case 'XS':
        console.log('Tikriname XS');
    case 'S':
        console.log('Tikriname S');
    case 'M':
        console.log('Tikriname M');
    case 'L':
        console.log('Tikriname L');
    
}




console.log('------ND------');
console.log('------1------');
console.log('-A-');

const a = 6;
const b = 22;
const c = 14;

const suma = a + b + c;
console.log(suma);

console.log('--B--');

console.log([`${a}`, `${b}`, `${c}`]);
console.log('6', '22', '14');

console.log('--C--');

console.log([`${a}`, `${b}`, `${c}`, `${suma}`]);

console.log('------2------');

//Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

let min = 5;
let max = 10;
      
//Generate random int value from 5 to 10 
 
let random = Math.floor(Math.random()*(max-min+1)+min);
console.log(random);

console.log('------3------');

//Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;


for (let i = 0; i < 5; i++) {
    const sakyk = 'Labas';
    console.log(sakyk);
}

console.log('------4------');
//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
for (let i = 0; i < 7; i++) {
    console.log(random);
}

console.log('------5------');
//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
for (let i = 0; i < random; i++) {
    console.log(random);
}

console.log('------6------');
//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
for (let i = 0; i < random; i++) {
    if(random > 7) {
        console.log(random);
    } else {
        console.log("Netinkama reiksme");
    }
    }

console.log('------7------'); 
//Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let saugiklis = 100;

console.log('------C------'); 
//let skaicius;
let tarpine = '';
//skaicius = (rand(10, 20));
//et kartai = 0;


for (let i = 0; i < 5; i++) {
    tarpine = tarpine + rand(10, 20) + ' ';

}
    console.log(tarpine);





console.log('------A------'); 
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
const naujasSkaicius = skaicius;
console.log(naujasSkaicius);

console.log('------B------'); 
//Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

//Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
let numberiai;
numberiai = d;
numberiai = e;


do {
    if(d <= 12){
        numberiai;
    } else {
        kartai = 0;
    }
    
} while (condition);





    