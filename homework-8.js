import { productCards } from "./product-cards.js";
const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function viewCards(count) {
  const showCards = productCards.slice(0, count)
  showCards.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.product-img').src = `/images/${product.img}.png`
  productClone.querySelector('.product-category').textContent = product.category
  productClone.querySelector('.product-name').textContent = product.name
  productClone.querySelector('.product-description').textContent = product.description
  productClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li>${item}</li>`).join("")
  productClone.querySelector('.product-price-label').textContent = product.priceLabel
  productClone.querySelector('.product-price').textContent = `${product.price} ₽`
  productList.appendChild(productClone) 
  })
}

const cardsName = productCards.reduce((acc, product) => (acc + (acc ? "; " : "") + product.name))
console.log(cardsName)

const namesLikeKeys = productCards.reduce((acc, product) => {
  acc.push({[product.name]: product.description})
  return acc
}, [])

console.log(namesLikeKeys)

const requestAmountCards = productCards.reduce((acc, answer) => {
  answer = prompt('Сколько карточек отобразить? От 1 до 5');
  const amount = Number(answer)
    if(amount >= 1 && amount <= 5) {
      acc.push(viewCards(amount))
      return acc
    } else {
      return alert('количество карточек меньше требуемого запроса')
    } 
})

console.log(requestAmountCards)