class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const persona1 = new Persona("Pedro");
console.log(this.nombre);
