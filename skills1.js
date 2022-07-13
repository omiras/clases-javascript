// El nombre de la clase es totalmente arbitrario, pero deberíamos poner algo que represente lo que queremos construir o modelar

class Programador{
    constructor(nombre, dni, skills) {
        this.nombre = nombre
        this.idCard = dni // Normalmente la propiedad de la clase y el parámetro del constructor coinciden en nombre, pero no tienen por que.
        this.fechaAlta = new Date()
        this.fechaBaja = undefined // No está despedido, trabaja con nosotros
        this.skills = skills
    }

    aprender(skill) {
        this.skills.push(skill)
    }

    despedir() {
        this.fechaBaja = new Date() // para indicar que el trabajador ya no forma parte de Singushop :(
    }

    trabajaConNosotros() {
        return !(this.fechaBaja)
    }
}

class Skill {
    // nombre: string, rating: number de 1 a 5
    constructor(nombre, rating) {
        this.nombre = nombre
        this.rating = rating
    }
}

let html = new Skill('html', 3)

let minion_1 = new Programador("Didac", "48045346P", [html])
minion_1.nombre = "DÍDAC" // Con accento!!
minion_1.aprender(new Skill('css', 3))
minion_1.despedir()
console.log(minion_1)
console.log(minion_1.trabajaConNosotros())

//console.log(minion_1)
