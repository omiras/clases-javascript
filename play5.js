class Persona {
    constructor(nombre, habilidades) {
        this.nombre = nombre;
        this.habilidades = habilidades;
    }

    nuevaHabilidad(habilidad) {
        this.habilidades.push(habilidad)
    }
   
    tieneHabilidad(habilidad) {
        return this.habilidades.includes(habilidad);
    }
}

const maria = new Persona("Maria", ["jardineria", "bricolaje", "nodejs"]);

if (maria.tieneHabilidad("nodejs") && maria.tieneHabilidad("php")) {
    console.log(`${maria.nombre} sabe un montón de progrmación!`)
}

else  {
    console.log(`${maria.nombre} tiene todas estas habilidades: ${maria.habilidades}`);
}