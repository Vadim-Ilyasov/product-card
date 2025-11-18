// создание объекта на основе моих данных
const person = {
    name: "Vadim",
    surname: "Ilyasov",
    age: 36,
    email: "vadim_ilyas@gmail.com",
    job: "multifunctional complex",
    jobTitle: "mechanic-repairman",
    country: "Russia",
    city: "Sibay",
    relationshipStatus: "married"
}

console.log(person)

// объект, который хранит данные об автомобиле
const car = {
    carMake: "hyundai",
    carModel: "accent",
    yearOfManufacture: 2009,
    carColor: "silver",
    boxType: "mechanical"
}

// добавление свойства вледелец авто в объект car одним значением

const updateInfoCar = {...car, owner: {...person}}

console.log(updateInfoCar)

// функция, которая проверяет на наличие строки "максимальная скорость и если его нет то добавляет"

function getMaxSpeedAndUpdateInfoCar(anotherCar) {
    if ('maxSpeed' in anotherCar) {
        return anotherCar
    } else {
        return anotherCar = {...anotherCar, maxSpeed: 180}
    }
}

const updatedCar = getMaxSpeedAndUpdateInfoCar(car);
console.log(updatedCar)

//функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта 
// и выводит его значение.

function getProperty(objectName, partProperty) {
    return objectName[partProperty]
}

console.log(getProperty(car, 'carColor'))


//массив, который содержит названия продуктов

const vegetables = ['cucumber', 'onion', 'tomato', 'potato', 'garlic', 'carrot', 'beet']

// массив, состоящий из объектов

const russianBooks = [
    {
        bookName: 'Мертвые души', 
        author: 'Н.В.Гоголь', 
        yearOfEdition: 1842, 
        coverColor: 'зеленая', 
        genre: 'роман'
    },
    {   bookName: 'Война и Мир', 
        author: 'Л.Н.Толстой', 
        yearOfEdition: 1867, 
        coverColor: 'серая', 
        genre: 'роман-эпопея'
    },
    {   
        bookName: 'Тихий Дон', 
        author: 'М.А.Шолохов', 
        yearOfEdition: 1928, 
        coverColor: 'синяя', 
        genre: 'роман-эпопея'
    }
]

const englishBooks = [
    {
        bookName: '1984', 
        author: 'George Orwell', 
        yearOfEdition: 1949, 
        coverColor: 'red', 
        genre: 'novel'
    },
    {
        bookName: 'Robinson Crusoe', 
        author: 'Daniel Defoe', 
        yearOfEdition: 1731, 
        coverColor: 'yellow', 
        genre: 'novel'
    },
    {
        bookName: 'Gulliver`s Travels', 
        author: 'Jonathan Swift', 
        yearOfEdition: 1726, 
        coverColor: 'white', 
        genre: 'novel'
    },
    {
        bookName: 'The Lord of the Rings', 
        author: 'John Ronald Reuel Tolkien', 
        yearOfEdition: 2003, 
        coverColor: 'blue', 
        genre: 'novel'
    }
]

// объединение массивов

const mergeBooks = [...russianBooks, ...englishBooks]
console.log(mergeBooks)

//функция которая добавляет свойство к объекту



const isRareBooks = mergeBooks.map(obj => {
    return {
        ...obj, isRare: obj.yearOfEdition >= 2000
    }
})


console.log(isRareBooks)