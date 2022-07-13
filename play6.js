class Persona {
    constructor() {

    }

    hablar() {
        return "Hola!";
    }
}

class Gato {
    constructor() {

    }

    hablar() {
        return "Miau!";
    }
}

const animales = [];
animales.push(new Persona());
animales.push(new Gato());
animales.push(new Gato());
animales.push(new Persona());

console.log(animales);

animales.forEach((siguienteAnimal) => {

    console.log("Es el siguiente animal una Persona?", siguienteAnimal instanceof Persona)

    console.log(siguienteAnimal.hablar());

});
