import {Modal} from './Modal.js'
import {Form} from './Form.js'

//выводить консоль лог в виде объекта:  { email: 'введенная почта' }

const outputEmail = document.querySelector('#email-form');
outputEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
  console.log(data)
})





//Модальное окно

const openModal = document.querySelector('.register-button')
const closeModal = document.querySelector('.modal-close-button')
const modalWindow = document.querySelector('.modal')

const modal = new Modal('modal','.modal-close-button')
modal.initOpen(openModal)
modal.initClose(closeModal)

// Форма регистрации

// let user = undefined
// const registrForm = document.querySelector('#register-form')
// registrForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   if (!registrForm.checkValidity()) {
//     alert('Неверный формат заполнения')
//     return
//   }
//   const form = event.target
//   const formData = new FormData(form)
//   const formInfo = Object.fromEntries(formData.entries())
//   if (formInfo.password !== formInfo.repeatPassword) {
//     alert('Пароли не совпадают')
//     return
//   }
//   user = formInfo
//   user.createOn = new Date()
//   console.log(user)
//   modalWindow.classList.remove('modal-showed')
// })

const form = new Form('register-form')
form.isCheckData()
form.getAllData()

//Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). 
// Придумайте свою структуру и реализуйте наследуемость классов


