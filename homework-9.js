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

openModal.addEventListener('click', () => {
  modalWindow.classList.add('modal-showed');
})

closeModal.addEventListener('click', () => {
  modalWindow.classList.remove('modal-showed')
})

//  Все поля должны иметь валидацию. Если пользователь ввел два разных пароля или форма невалидна 
//  (используем метод checkValidity()) - мы должны предупредить его о том, что регистрация отклонена. 
//  Если регистрация успешна - выводим значения формы в лог, как в задании №4. 
//  Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания 
//  (используем сущность new Date()). 
//  Также создайте внешнюю переменную user и присвойте ей этот объект. 
//  После успешной регистрации - модалка должны закрыться. 
let user = undefined
const registrForm = document.querySelector('#register-form')
registrForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!registrForm.checkValidity()) {
    alert('Неверный формат заполнения')
    return
  }
  const form = event.target
  const formData = new FormData(form)
  const formInfo = Object.fromEntries(formData.entries())
  if (formInfo.password !== formInfo.repeatPassword) {
    alert('Пароли не совпадают')
    return
  }
  user = formInfo
  user.createOn = new Date()
  console.log(user)
  modalWindow.classList.remove('modal-showed')
})