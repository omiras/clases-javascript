/**
 * Ejercicio: Usa el contructor new Date adecuadamente para crear un objeto de tipo Date que se inicialice con tu fecha de nacimiento https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
 */
const fechaNacimiento = new Date('1982-05-19'); // <--- SOLAMENTE DEBES MODIFICAR ESTA LÍNEA

// NO MODIFICAR A PARTIR DE AQUÍ
const fechaActual = new Date();

let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
const m = fechaActual.getMonth() - fechaNacimiento.getMonth();
if (m < 0 || (m === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
    edad--;
}

console.log(`Tu edad es: ${edad} años.`);