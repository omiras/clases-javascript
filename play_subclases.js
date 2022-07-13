// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mover() {
        console.log("El animal se mueve");
    }
}

// Definir dos subclases de Animal: Persona y Arañas
class Persona extends Animal {
    constructor(nombre) {
        // Super viene de 'superclase'. Invocamos el constructor de Animal pasándole el nombre para que pueda inicilizar el objeto
        super(nombre);
    }

    mover() {
        console.log("La persona camina con sus dos pies.");
    }
}

// Araña
class Araña extends Animal {
    constructor(nombre, intensidadVeneno) {
        // Super viene de 'superclase'. Invocamos el constructor de Animal pasándole el nombre para que pueda inicilizar el objeto
        super(nombre);

        this.intensidadVeneno = intensidadVeneno;
    }

    mover() {
        console.log("La araña se mueve con sus 8 patitas.");
    }

    inocularVeneno() {
        console.log(`${this.nombre} ha inoculado ${this.intensidadVeneno} intensidad de veneno.`);
    }
}

const persona = new Persona("María");
persona.mover();


const araña = new Araña("Telitas", 50);
araña.inocularVeneno();