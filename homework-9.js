import { Modal } from './Modal.js'
import { Form } from './Form.js'

//выводить консоль лог в виде объекта:  { email: 'введенная почта' }

const outputEmail = document.querySelector('#email-form');
outputEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

//Модальное окно

const openModal = document.querySelector('.register-button');
const closeModal = document.querySelector('.modal-close-button');
const modalWindow = document.querySelector('.modal');

const modal = new Modal('modal');
openModal.addEventListener('click', () => {
  modal.openModal();
  console.log(modal.isOpenModal());
})
closeModal.addEventListener('click', () => {
  modal.closeModal();
  console.log(modal.isOpenModal());
})



// Форма регистрации

let user = undefined;
const registrForm = new Form('register-form');
registrForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!registrForm.isValidData()) {
    alert('Неверный формат заполнения');
    return;
  }
  const personForm = registrForm.getFormValue();
  if (personForm.password !== personForm.repeatPassword) {
    alert('Пароли не совпадают');
    return;
  }
  user = personForm;
  user.createOn = new Date();
  console.log(user);
  modalWindow.classList.remove('modal-showed');
})




