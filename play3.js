class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Podemos asignarles valor a las propiedades como si fuera un objeto (es que lo son!)
const persona1 = new Persona("Pedro");
console.log(persona1);
let persona_otra = persona1;
persona1.nombre = "Eduardo";
console.log(persona_otra);


