/**
 * Ejecuta este script. 
 * Se crea una persona correctamente de nombre Ana y edad 28 años
 * Modifica la inicialización de la variable 'persona2' para que cree correctamente una persona de nombre John y edad 25 años
 */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona('Ana', 28);
const persona2 = new Persona(); // <--- MODIFICAR SOLAMENTE ESTA LÍNEA

const personas = [persona1, persona2];

personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});