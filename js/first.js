/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
"Az teszt mindkét függvény esetén hibára fut, viszont mindkét függvény működik"

'use strict'

//const brutto = (arrNr) => {
//    const bruttoArrNr = arrNr.map((item)=>item*1.27);
//    const sumBruttoArrNr =bruttoArrNr.reduce((previousValuse, currentValue) => (previousValuse + currentValue));
//    const finalSum = Math.round(sumBruttoArrNr);
//    return finalSum
//};

const brutto = (arrNr) => {
    return Math.round(arrNr.map((item)=>item*1.27).reduce((previousValuse, currentValue) => (previousValuse + currentValue)));

};



