import { Cafe } from './Cafe.js';
import { Coffee } from './Coffee.js';
import { Tea } from './Tea.js';
import { Cocoa } from './Cocoa.js';

const cafe = new Cafe('Чашечка кофе', 'Уфа');
const coffee = new Coffee('Арабика', 0.1, 70, 'молоко пониженной жирности');
const tea = new Tea('Indi', 0.3, 24, 'Крупнолистовой', 'лимон');
const cacao = new Cocoa('Chocochino', 0.2, 90, 'молоко средней жирности');
coffee.setDrinkTemperature(80);
tea.setDrinkTemperature(90);
cacao.setDrinkTemperature(87);
cafe.orderDrink(tea);
console.log(tea.getDrinkInfo());
cafe.orderDrink(coffee);
console.log(coffee.getDrinkInfo());
cafe.orderDrink(cacao);
console.log(cacao.getDrinkInfo());
console.log(cafe.getInfoAboutCafe());

