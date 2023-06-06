// palabra reservada 'class' NombreDeLaClase
class AirCooler {
  // método especial para las clases que permite inicializar el objeto que estás creando
  constructor(name, tempMin, tempMax) {
    // Definimos todas las propiedades que queremos crear para este objeto

    // creame en este objeto una variable que se llama 'name' y asignale el valor del parámetro 'name'
    this.name = name;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    // Por defecto, quiero que el aire acondicionado esté apagado. Creo una propiedad y le asigno el valor 'false'
    this.powerOn = false;
    this.blades = "closed"; // 'open', 'closed', 'semi-open'
  }

  switchOn() {
    this.powerOn = true;
    this.blades = "semi-open";
  }

  switchOff() {
    this.powerOn = false;
    this.blades = "closed";
  }
}

const michi = new AirCooler("Mitshumichi", 16, 29);
const lg = new AirCooler("LG", 14, 28);
const balay = new AirCooler("Balay", 15, 31);

console.log(michi);
michi.switchOn();
console.log(michi);

/**
 * name: "LG",
  tempMin: 13,
  tempMax: 29,
  currentTemp: 21,
  powerOn: false,

 */
