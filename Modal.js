export class Modal {
    constructor(modalWindowId, listenButton) {
        this.modalWindowId = document.getElementById(modalWindowId)
        this.isOpen = false
        this.listenToCloseModal(listenButton)
     
    }

    openModal() {
        this.modalWindowId.classList.add('modal-showed');
        this.isOpen = true
    }

    initOpen(button) {
        button.addEventListener('click', () => {
            this.openModal()
            this.isOpenModal()
        })
    }

    closeModal() {
        this.modalWindowId.classList.remove('modal-showed')
        this.isOpen = false
    }

    initClose(button) {
        button.addEventListener('click', () => {
            this.closeModal()
            this.isOpenModal()
        })

    }

    isOpenModal() {
        if (this.isOpen) {
            console.log("Модальное окно открыто.");
        } else {
            console.log("Модальное окно закрыто.");
        }
    }

    listenToCloseModal(listenButton) {
        const checkButton = document.querySelector(listenButton)
        checkButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.closeModal()
        })
    }
}

