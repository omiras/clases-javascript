/**
 * Creamos una clase, que se llama Persona
 * El nombre de las clases va en mayúsculas
 */
class Persona {
    /**
     * Todas las clases implementan un método llamado 'constructor'. 
     * Permite "construir" una clase, pasándole un número determinado de argumentos.  
     * 
     * @param {string} nombre Nombre de la persona
     */
    constructor(nombre) {
        this.nombre = nombre;
    }
}

/**
 * INSTANCIAMOS dos OBJETOS de la clase PERSONA. Los objetos son completamente diferentes! Son entidades independientes.
 */
const persona1 = new Persona("Pedro");
const persona2 = new Persona("Maria");

console.log(persona1.nombre);
console.log(persona2.nombre)