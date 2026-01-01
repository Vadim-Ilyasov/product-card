import { Drink } from './Drink.js'

export class Tea extends Drink {
    constructor(name, size, price, typeOfLeaf, teaAdditive) {
        super(name, size, price);
        this.typeOfLeaf = typeOfLeaf;
        this.teaAdditive = teaAdditive;
    }

    getDrinkInfo() {
        return [this.name, this.size, this.price, this.typeOfLeaf, this.teaAdditive].toString();
    }

    getDrinkTemperature() {
        return super.getDrinkTemperature();
    }

    setDrinkTemperature(temperature) {
        super.setDrinkTemperature(temperature);
    }

    serveDrink() {
        super.serveDrink();
        console.log(`чай ${this.typeOfLeaf} и с ${this.teaAdditive} температура чая ${this.getDrinkTemperature()}°C`);
    }
}
