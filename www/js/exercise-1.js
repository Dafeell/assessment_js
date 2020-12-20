/**
 * #############################
 * ##  E J E R C I C I O   1  ##
 * #############################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético.
 *
 * Resultado esperado: ["adipisicing", "amet", "consectetur", "dolor", "elit", "ipsum", "lorem", "sit"]
 *
 */
'use strict';

const text = 'Lorem Ipsum Dolor Sit Amet Consectetur, ¡Adipisicing Elit!.';

///////////////////////////////////////////////////
const newText = text.replace(/[^\w\s]|_/g, '').toLowerCase();

const arrayText = newText.split(' ');

arrayText.sort();
console.log(arrayText);

/////////////////////////////////////////////////

const newTextV2 = text
  .replace(/[^\w\s]|_/g, '')
  .toLowerCase()
  .split(' ')
  .sort();

console.log(newTextV2);
