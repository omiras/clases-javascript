class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.gato = undefined;
        this.apellidos = apellidos
    }

    adoptar(gato) {
        this.gato = gato;
    }

    apellidos() {
        console.log("Hola hola!");
    }


}


class Gato {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        return "Miau!";
    }
}

const pedro = new Persona("Pedro", "Saramiento");
console.log(pedro.apellidos());