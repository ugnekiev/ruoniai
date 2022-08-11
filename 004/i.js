console.log("------------1PVZ------------");

//deklaracijoje uzrasyti kintamieji vadinami parametrais (a, b)
//parametru gali buti daug, arba ne vieno
function fun(a, b) {
  let suma = a + b;

  return suma;
}
console.log(fun(5, 8));
//kai kvieciame funkcija, i tuos parametrus mes perduodame argumentus
//argumentai i parametrus paduodami eiles tvarka 5-->a, 8-->b

console.log("------------2PVZ------------");

function fun2(c, d) {
  let suma = c + d;

  return suma;
}
const u = 10;

console.log(fun2(u, 9));
//u perduodamas --> c
console.log(fun2(u, u));
//u perduodamas i a, ir b
console.log(fun2(u));
//jei bus paduodamas tik vienas kintamasis NaN, nes vienas bus 10, kitas undefined

console.log("------------3PVZ------------");

//galima prideti default reiksmes
function fun3(c = 50, d = 45) {
  let suma = c + d;

  return suma;
}
const t = 15;

console.log(fun3(t));
//prie t (t.y  15) prideda default reiksme 45. todel ir nerasome i iskvieciama f-ja.
console.log(fun3());
//pasiima abi c, d default reiksmes
console.log(fun3(t, 100));
//tada default neima, o pasiima is iskviestos f-jos

console.log("------------4PVZ------------");
console.log("-----------DAUGYBA / DALYBA(funkcija perduoda funkcija)---------");


const daugyba = function (a) {
  return a * 201;
};

console.log(daugyba());

const dalyba = function () {
  return 5 / 201;
};

function fun4(f) {
  const rez = f();

  return rez;
}

const ats = fun4(() => 5000 / 201);

console.log(ats)

console.log("-----------ARROW FUNKCIJA---------");

const daugybaR = () => 5000 / 201;


console.log("-----------ARROW FUNKCIJA---------");


console.log(fun4(daugyba));
//console.log(fun4(dalyba));

console.log("------------5PVZ------------");

console.log("-----------ESMINIS F-JU RASYMO BUDAS---------");


function fun34(f) {

    const rez = f();

    return rez;

}


// console.log(fun2(daugyba));

const ats3 = fun34(() => 5 * 1000);


console.log(ats);
