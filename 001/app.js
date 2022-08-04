console.log('Taip tikrai as esu!');

console.log([...Array(11)].map(_ => '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, 0)));

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(20, '.'));

const str2 = 'mano metai 1984'
console.log(str2.padEnd(18, ' 38'));

//Sukurkite du kintamuosius
//naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
//Didesnę reikšmę padalinkite iš mažesnės


console.log([...Array()].map(_ => Math.floor(Math.random() * 4)));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  //console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  //console.log(getRandomInt(1));
  // expected output: 0
  
  //console.log(Math.random());
  // expected output: a number from 0 to <1

  console.log('-----------');

    const min1 = 5;
    const max1 = 9;

 /*
    function getRandomArbitrary(min1, max1) {
    return Math.random() * (max1 - min1) + min1;

  }
  */
  console.log('-----0------');

    const skaicius = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }
    console.log(skaicius(0, 4));

  console.log('------1-----');

    const items = [2, 4];
    console.log([...Array(2)].map(_ => Math.floor(Math.random() * 4)));
    //const index = Math.floor(Math.random() * items.length);
    //console.log(items[index]); 

console.log('------2-----');

console.log([...Array(3)].map(_ => Math.floor(Math.random() * 25)));




//kaip palyginti reiksmes? kaip jas issivesti i const?

console.log('------3-----');

const krastine = Math.floor(Math.random() * 10) + 1;
const krastine2 = Math.floor(Math.random() * 10) + 1;
const krastine3 = Math.floor(Math.random() * 10) + 1;

console.log(krastine);
console.log(krastine2);
console.log(krastine3);

const skaiciai = [krastine, krastine2, krastine3]

function checkValidity(krastine, krastine2, krastine3)
{
    // check condition
    if (krastine + krastine2 < krastine3 || krastine + krastine3 < krastine2 || krastine2 + krastine3 < krastine)
        return `Trikampio negalima sudaryti`;
    else
        return `Galima sudaryti trikampį`;
}
console.log(checkValidity(krastine, krastine2, krastine3));
   