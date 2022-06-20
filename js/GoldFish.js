class GoldFish {
    constructor(name) {
        this.name = name;
        this.wishes = 0;
        }

    intro() {
        return `Hi, my name is ${this.name}`;
    }
    
    getWish() {
        this.wishes += 1;
        if (this.wishes <= 3) {
            return `${this.name}: ${this.wishes} wish/-es.`
        } else {
           return 'I can only fulfill 3 wishes.';
        }   
    }
}

    
module.exports = GoldFish;