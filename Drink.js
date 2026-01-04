export class Drink {

  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getDrinkInfo() {
    return [this.name, this.size, this.price].toString();
  }

  getDrinkTemperature() {
    return this.#temperature
  }

  setDrinkTemperature(drinkTemperature) {
    this.#temperature = drinkTemperature;
  }

  #prepareDrink() {
    console.log(`${ this.name } в объеме ${ this.size } литров стоит ${ this.price } ₽ и готов к выдаче`);
  }

  serveDrink() {
    this.#prepareDrink();
  }

}
