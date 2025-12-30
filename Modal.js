export class Modal {
    constructor(modalWindowId) {
        this.modalWindow = document.getElementById(modalWindowId);
        this.handleCloseModal();
    }

    openModal() {
        this.modalWindow.classList.add('modal-showed');
    }

    closeModal() {
        this.modalWindow.classList.remove('modal-showed');
    }

    isOpenModal() {
        return this.modalWindow.classList.contains('modal-showed');
    }

    handleCloseModal() {
        const checkButton = document.querySelector('.modal-close-button');
        checkButton.addEventListener('click', () => {
            this.closeModal();
        })
    }
}

