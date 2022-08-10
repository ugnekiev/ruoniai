
function fun(a = 200, b = 42) {

    let suma = a + b;

    return suma;

}
//a = u;
//b = 8;

const u = 10;



// 1 
const daugyba = function(a) {
    return a * 201;
}
// 2
const daugybaR = a => a * 201;


const daugybaB = () => 5 * 201;
//console.log(daugybaB());


// const daugybaR = (a) => {
//     return a * 201;
// }

const dalyba = function() {
    return 5 / 201;
}

function fun2(f) {

    const rez = f();

    return rez;

}

//console.log(fun2(daugyba));

const ats = fun2(() => 5 * 1000);


console.log(ats);


// console.log(fun(u, u));




