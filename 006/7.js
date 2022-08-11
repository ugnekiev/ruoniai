//Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
//o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį 
//kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const size = rand(10, 30);
// kiek kartu kartosim

//cia yra, ka vis pridesim i kiekviena masyva
let add = 0;

//naudosim for nes zinom kiek kartu kartsoim (nuo 10 iki 30)
for(let i = 0; i < size; i++){
    let arr = [...Array(rand(10, 20))].map(_ => rand(0, 10));
    arr[arr.length - 1] = add;
    add = arr;
    
}
console.log(add);

//REKURSIJA

function run(n) {
    console.log('enter:', n)
    if(n < 3) {
        run(n + 1);
    }
    console.log('exit:', n)
}
run(1);
