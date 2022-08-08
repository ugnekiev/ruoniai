/* ZENKLU VERTIMASIS / TAISYKLES

< --- >=
> --- <=
== ---!=
|| --- &&
&& --- ||

*/

console.log('-----WHILE------');

let turiu = 500;

//reikia parasyti kiek reikia tureti kad tureciau daugiau nei 1000
//parasyta priesingai teiginiui turiu 1000 (<=)

while(turiu <= 1000) {

    turiu = turiu + 100;

}

console.log(turiu);

console.log('-----RANDOM------');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(rand(1, 5));


console.log('-----DO WHILE------');

let iskrito;

do {

    iskrito = rand(0, 1) ? 'S' : 'H';
    console.log(iskrito);
} while (iskrito != 'H') // pirma parasyti ==, po to pakeisti neigini

