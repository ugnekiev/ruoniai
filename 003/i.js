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



let saugiklis = 10000;

let kartai = 0;

do {

    if(!(saugiklis--)) break; //maksimaliai gali padaryti 100 ciklu; sitas kodas pades sustoti. NAUDOTI!!!

    let iskrito; // tuscia deklaracija
    iskrito = rand(0, 1) ? 'S' : 'H';
    //if('S' == iskrito) {
    //    kartai ++;
    //}
    if('H' == iskrito){
        kartai++;
    } else {
        kartai = 0;
    }
    console.log(iskrito);

} while (kartai != 5); // pirma parasyti ==, po to pakeisti neigini !=




