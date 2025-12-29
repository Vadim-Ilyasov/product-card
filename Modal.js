export class Modal {
    constructor(modalWindowId) {
        this.modalWindowId = document.getElementById(modalWindowId);
        this.isOpen = false;
        this.listenToCloseModal();
     
    }

    openModal() {
        this.modalWindowId.classList.add('modal-showed');
        this.isOpen = true;
    }

    closeModal() {
        this.modalWindowId.classList.remove('modal-showed');
        this.isOpen = false;
    }

    isOpenModal() {
        if (this.isOpen) {
            console.log("Модальное окно открыто.");
        } else {
            console.log("Модальное окно закрыто.");
        }
    }

    listenToCloseModal() {
        const checkButton = document.querySelector('.modal-close-button');
        checkButton.addEventListener('click', () => {
            this.closeModal();
        })
    }
}

