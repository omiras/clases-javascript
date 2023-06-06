/**
 * Aircoolers
 */

/**
 * Mitshumichi
 *
 * Temp min, max, actual
 */

let michi = {
  name: "Mitshumichi",
  tempMin: 16,
  tempMax: 29,
  currentTemp: 21,
  powerOn: false,
  color: 'white',
  powerConsum: 220,

  switchOn() {
    /** 'this' Hace referencia al objeto actual */
    this.powerOn = true;
  },

  switchOff() {
    /** 'this' Hace referencia al objeto actual */
    this.powerOn = false;
  },
};

/**
 * LG
 */

let LG = {
  name: "LG",
  tempMin: 13,
  tempMax: 29,
  currentTemp: 21,
  powerOn: false,

  switchOn() {
    /** 'this' Hace referencia al objeto actual */
    this.powerOn = true;
  },
};

LG.switchOn();
console.log(LG);
