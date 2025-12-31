import { Animal } from './Animal.js'

export class Predator extends Animal {
    constructor(name, speedRun, clawLenght) {
        super(name, speedRun);
        this.clawLenght = clawLenght;
    }

    showInfoAboutClaw() {
        console.log(`У ${ this.name } длина когтей равна ${ this.clawLenght } см`);
    }
}