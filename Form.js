export class Form {
    constructor(formId) {
        this.formId = document.getElementById(formId)
    }

    isCheckData() {
        if (this.formId.checkValidity()) {
            return true
        } else {
            return false
        }
    }

    resetForm() {
        this.formId.reset()
    }

    getAllData() {
        this.formId.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!this.isCheckData()) {
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
            formInfo.createOn = new Date()
            console.log(formInfo)
            this.resetForm()
            this.closeModalWindow()  
        })
    }

    closeModalWindow() {
        const modalWindow = document.querySelector('.modal')
        modalWindow.classList.remove('modal-showed')
    }
}