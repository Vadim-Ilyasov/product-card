import { Drink } from './Drink.js'

export class Cocoa extends Drink {

  constructor(name, size, price, typeOfMilk) {
    super(name, size, price);
    this.milk = typeOfMilk;
  }

  getDrinkInfo() {
    return [super.getDrinkInfo(), this.milk].toString();
  }

  getDrinkTemperature() {
    return super.getDrinkTemperature();
  }

  setDrinkTemperature(temperature) {
    super.setDrinkTemperature(temperature);
  }

  serveDrink() {
    super.serveDrink();
    console.log(`также добавлено ${ this.milk } и температура какао напитка ${ this.getDrinkTemperature() }°C`);
  }

}
