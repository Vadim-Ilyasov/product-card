import { productCards } from "./product-cards.js";

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');



function showCards(value) {
  if(value <= productCards.length) {
    for(let i = 0; i < value; i++) {
    const product = productCards[i];
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-img').src = `/images/${product.img}.png`
    productClone.querySelector('.product-category').textContent = product.category
    productClone.querySelector('.product-name').textContent = product.name
    productClone.querySelector('.product-description').textContent = product.description
    productClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li>${item}</li>`).join("")
    productClone.querySelector('.product-price-label').textContent = product.priceLabel
    productClone.querySelector('.product-price').textContent = `${product.price} ₽`
    productList.appendChild(productClone) 
    }
    return value; 
  } else {
  return;
  }
}



const cardsName = productCards.reduce((acc, product) => (acc + (acc ? "; " : "") + product.name))
console.log(cardsName)


const namesLikeKeys = productCards.reduce((acc, product) => {
    const key = product.name
    if (!acc[key]) {
    acc[key] = []; 
  }
    acc[key].push(product.description)
    return acc
}, [])

console.log(namesLikeKeys)



  
const requestAmountCards = productCards.reduce((acc, answer) => {
  answer = prompt('Сколько карточек отобразить? От 1 до 5');
  const regex = /[0-9]/
  if( regex.test(answer)) {
    if(answer >= 1 && answer <= 5) {
      acc.push(showCards(answer))
      return acc
    } else {
      return alert('количество карточек меньше требуемого запроса')
    }
  } else {
   alert('Не было введено число или строка пустая')
  }   
})


console.log(requestAmountCards)