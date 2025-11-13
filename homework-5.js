// Функция принимающая два параметра : город и температура воздуха.

function getOutsideTemperatureInfo(cityName, temperature) {
    return `Сейчас в ${cityName} температура  — ${temperature} градусов по Цельсию`
}

const message = getOutsideTemperatureInfo('Уфа', -7)
console.log(message)

// функция которая сравнивает со скоростью звука и выводит соответсвующий результат


function checkSpeedOfSound(speed) {
    const SPEED_OF_SOUND = 343
    if (speed > SPEED_OF_SOUND) {
        console.log('Сверхзвуковая скорость')
    } else if (speed === SPEED_OF_SOUND) {
        console.log('Скорость звука')
    } else {
        console.log('Дозвуковая скорость')
    }
}

checkSpeedOfSound(327)

// функция проверяющая текущий бюджет на необходимое количество для покупки товара

const productName = 'грейпфрут'
const productPrice = 500

function buyProduct(amountBudget) {
    if (amountBudget > productPrice) {
        console.log(`${productName} приобретен.Спасибо за покупку!`)
    } else {
        const residual = productPrice - amountBudget
        console.log(`Вам не хватает ${residual}, пополните баланс`)
    }

}

buyProduct(600)

// функция преобразующая введенные данные в индекс массы тела и сравнивающая результат  

function checkBodyMassIndex(weight, height) {
    const index = weight / (height * height)
    if (index <= 18.5) {
        console.log('Недостаточная масса тела')
    } else if (index > 18.5 && index <= 25) {
        console.log('Масса и рост соответсвуют норме')
    } else {
        console.log('Избыточная масса тела')
    }
}

checkBodyMassIndex(77, 1.78)

// переменные на свой выбор

const SPEED_OF_LIGHT = 299792458
const animalName = 'Giraffe'
const carName = 'Toyota'

console.log(SPEED_OF_LIGHT)
console.log(animalName)
console.log(carName)
