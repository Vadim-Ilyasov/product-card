export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    isValidityData() {
        return this.form.checkValidity();
    }

    resetForm() {
        this.form.reset();
    }

    getAllData() {
        const formData = new FormData(this.form);
        const formInfo = Object.fromEntries(formData.entries());
        return formInfo;
    }
}