// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash
})

// Open Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if(answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  console.log(message)
}

// Вывод главного заголовка в консоли

const mainHeading = document.getElementsByTagName('h3')[0]
mainHeading.addEventListener('mouseover', function () {
  console.log('Выбери свой продукт')
})

// Кнопка меняющая цвет с одного на другой

const changeColor = document.getElementById('change-color-button');

changeColor.addEventListener('click', () => {
  changeColor.classList.toggle('after')
})




