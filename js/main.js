/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), 
- és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
const content = ['ecc', 'pecc', 'kimehetsz'];
const generateList = () => {content.filter('<ul> <li> ' +  + '</li> <li>' +  + '</li> <li>' +  + '</li> </ul>');
console.log(generateList);
};
