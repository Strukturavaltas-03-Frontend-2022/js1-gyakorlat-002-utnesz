/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
"Az teszt mindkét függvény esetén hibára fut, viszont mindkét függvény működik"

'use strict'

const amountArray = [10, 20, 27, 127, 1000];
const bruttoSum = amountArray.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(Math.round(bruttoSum * 1.27));


const numericArray = [10, 20, 30, 40, 50];
const brutto = numericArray.map(item => item * 1.27);
console.log(Math.round(brutto.reduce((previousValue, currentValue) => previousValue + currentValue)));

