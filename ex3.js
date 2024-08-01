

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está caducado o no
    estaCaducado() {
        const hoy = new Date();
        const fechaCaducidad = new Date(this.caducidad);
        return hoy > fechaCaducidad;
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
        const dniRegex = /^[0-9]{8}[A-Za-z]$/;
        return dniRegex.test(this.numero);
    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
        // Es un algoritmo del gobierno -> copiado de Internet
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = parseInt(this.numero);
        const indice = numero % 23;
        return letras[indice];
    }
}

// el DNI está caducado y el formato es válido
console.log("--------------------Dni de Pedro------------------")
const midni = new DNI("Pedro Vallés", "40162516A", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());

// el DNI no está caducado u el formato es 
console.log("--------------------Dni de Maria------------------")
const otroDni = new DNI("Maria Robles", "40162516A", "2026-10-10");
console.log(otroDni.estaCaducado());
console.log(otroDni.esDniFormatoValido());


