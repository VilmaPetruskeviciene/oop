class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.mouses = 0;
    }

    voice() {
        return `${this.name}: Miau!`;
    }

    intro() {
        return `Hi, my name is ${this.name} and my breed is ${this.breed}`;
    }

    getMouse() {
        this.mouses += 1;
        return `${this.name}: ${this.mouses} mouse/-s.`
    }
}


module.exports = Cat;