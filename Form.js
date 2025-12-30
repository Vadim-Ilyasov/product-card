export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    isValidData() {
        return this.form.checkValidity();
    }

    resetForm() {
        this.form.reset();
    }

    getFormValue() {
        const formData = new FormData(this.form);
        const formInfo = Object.fromEntries(formData.entries());
        return formInfo;
    }
}