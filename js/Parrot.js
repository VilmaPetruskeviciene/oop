class Parrot {
    constructor(name) {
        this.name = name;
    }

    intro() {
        return `Hi, my name is ${this.name} and I like to fly!`;
    }

    voice(v) {
        if (v === 1) {
            return `${this.name}: It's sunny day!`;
        } else if (v === 2) {
            return `${this.name}: You are crazy!`;
        } else if (v === 3) {
            return `${this.name}: I love you!`;
        } else if (v === 4) {
            return `${this.name}: Go home!`;
        } else {
            return `${this.name}: I'm happy today!`;
        }   
    }

}

module.exports = Parrot;