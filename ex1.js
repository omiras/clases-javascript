// ex1: Completa el método toString de la siguiente clase. Este método debe devolver un 'string' con el siguiente formato : 'The price of the $product is $price €". Por ejemplo, para el objeto 'café', debería mostrar por consola 'The price of the café Bona is 5 €'

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    // 'The price of the café Bona is 5 €'
    return this.price; // INCOMPLETO
  }
}

const cafe = new Product("café Bonka", 5);
console.log(cafe.toString());
const bollo = new Product("bolleria industrial", 3);
console.log(bollo.toString());
