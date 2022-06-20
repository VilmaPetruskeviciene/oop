class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.mouse = 0;
    }

    voice() {
        return `${this.name}: Miau!`;
    }

    intro() {
        return `Hi, my name is ${this.name} and my breed is ${this.breed}`;
    }

    getMouse() {
        this.mouse += 1;
        return `${this.name}: ${this.mouse} mouse/-s.`
    }
}


module.exports = Cat;