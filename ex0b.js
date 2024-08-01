/**
 * Existe otra forma de crear un array vacio mediante la creación de un nuevo objeto de la clase Array. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array . Cambia la inicialización de la varible 'numeros' y comprueba que el script sigue funcionando igual
 */

const numeros = new Array(); // <-- SOLAMENTE CAMBIAR ESTA LÍNEA
numeros.push(10, 20, 30, 40, 50);

const resultado = numeros.reduce((prev, acc) => prev + acc, 0);
console.log("🚀 ~ file: ex0b.js:9 ~ resultado:", resultado)
