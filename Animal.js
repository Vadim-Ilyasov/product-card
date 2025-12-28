export class Animal {
    constructor(name, speedRun) {
        this.name = name;
        this.speedRun = speedRun;
    }

    showInfo() {
        console.log(`Это ${this.name} и бегает со скоростью ${this.speedRun} км/ч`)
    }
}