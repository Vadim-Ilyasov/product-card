
export class Cafe {

  constructor(name, location) {
    this.cafeName = name;
    this.location = location;
  }

  getInfoAboutCafe() {
    return [this.cafeName, this.location].toString();
  }

  orderDrink(drink) {
    drink.serveDrink();
  }

}