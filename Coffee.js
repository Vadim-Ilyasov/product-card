import { Drink } from './Drink.js'

export class Coffee extends Drink {

  constructor(name, size, price, typeOfMilk) {
    super(name, size, price);
    this.typeOfMilk = typeOfMilk;
  }

  getDrinkInfo() {
    return [super.getDrinkInfo(), this.typeOfMilk].toString();
  }

  getDrinkTemperature() {
    return super.getDrinkTemperature();
  }

  setDrinkTemperature(temperature) {
    super.setDrinkTemperature(temperature);
  }

  serveDrink() {
    super.serveDrink();
    console.log(`также добавлено ${ this.typeOfMilk } и температура кофе ${ this.getDrinkTemperature() }°C`);
  }

}