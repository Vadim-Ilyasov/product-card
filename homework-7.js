import { listOfComments } from "./comment.js"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const partOfNumbers = numbers.filter(numbers => numbers >= 5)
console.log(partOfNumbers)

const films = ['Я легенда', 'Терминатор', 'Spider man', 'Интерстеллар', 'Кто Я', 'Робокоп', 'Хищник']
const checkFilm = films.includes('Spider man')
console.log(checkFilm)

function reverseArray(array) {
    return array.reverse()
}

console.log(reverseArray(numbers))
console.log(reverseArray(films))

const commentsOfSpecificEmail = listOfComments.filter(comment => comment.email.includes(".com"))
console.log(commentsOfSpecificEmail)


const anotherListComments = listOfComments.map(comment => ({...comment, postId: comment.id <= 5 ? 2 : 1}))
console.log(anotherListComments)



const listOfShortComments = listOfComments.map(comment => ({id: comment.id, name: comment.name}))
console.log(listOfShortComments)


const isSizeBody = listOfComments.map(obj => ({...obj, isInvalid: obj.body > 180}))
console.log(isSizeBody)


const emailArrayWithReduce = listOfComments.reduce((accumulator,comment) => {
    accumulator.push(comment.email)
    return accumulator
}, []);

console.log(emailArrayWithReduce)

const emailArrayWithMap = listOfComments.map(comment => comment.email)
console.log(emailArrayWithMap)

const emailsString = emailArrayWithReduce.toString()
console.log(emailsString)

const emailsLine = emailArrayWithMap.join(" ")
console.log(emailArrayWithMap)