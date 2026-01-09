
export class Modal {

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay; 
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    const closeButton = this.modal.querySelector('#modal-close-button');
    closeButton.addEventListener('click', this.#handleClose);
    this.overlay.addEventListener('click', this.#handleOverlay);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.#initClose();
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #handleClose = () => {
    this.close();
  }

  #handleOverlay = (event) => {
    if (this.shouldCloseOnOverlay && event.target === this.overlay) {
      this.close();
    }
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    });
  }

  #initClose() {
    const closeButton = this.modal.querySelector('#modal-close-button');
    closeButton.removeEventListener('click', this.#handleClose);
    this.overlay.removeEventListener('click', this.#handleOverlay);
  }
  
}