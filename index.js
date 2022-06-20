const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const GoldFish = require('./js/GoldFish.js');
const Parrot = require('./js/Parrot.js');

/*
OOP - object oriented programming
parametrai - ka zinau, koks as (informacija)
metodai - ka galiu (funcionalumas)
*/

console.clear();

const rex = new Dog('Rex', 'tax');
const brisius = new Dog('Brisius', 'Lietuvos lenciuginis');

console.log(rex.voice());
console.log(brisius.voice());

console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());

console.log(rex.getBone());
console.log(rex.getBone());
console.log(rex.getBone());
console.log(rex.getBone());

console.log(brisius.getBone());
console.log(brisius.getBone());

console.log(brisius.intro());
console.log(rex.intro());

console.log(rex.changeName('Reksas'));
console.log(rex.intro());
console.log(rex.intro());
console.log(rex.intro());
console.log(rex.intro());

console.log('----------------------------------');

const murkius = new Cat('Murkius', 'persian');
const puma = new Cat('Puma', 'bengal');

console.log(murkius.voice());
console.log(puma.voice());

console.log(murkius.intro());
console.log(puma.intro());

console.log(murkius.getMouse());
console.log(puma.getMouse());
console.log(murkius.getMouse());
console.log(murkius.getMouse());
console.log(murkius.getMouse());
console.log(puma.getMouse());
console.log(puma.getMouse());

console.log('----------------------------------');

const amber = new GoldFish('Amber');
const wish = new GoldFish('Wish');

console.log(amber.intro());
console.log(wish.intro());

console.log(amber.getWish());
console.log(amber.getWish());
console.log(wish.getWish());
console.log(amber.getWish());
console.log(amber.getWish());
console.log(wish.getWish());
console.log(wish.getWish());
console.log(wish.getWish());
console.log(wish.getWish());


console.log('----------------------------------');

const paco = new Parrot('Paco');
const diego = new Parrot('Diego');

console.log(diego.intro());
console.log(paco.intro());

console.log(paco.voice(3));
console.log(diego.voice(1));
console.log(diego.voice(6));
console.log(paco.voice(5));
console.log(paco.voice(2));
console.log(diego.voice(4));

console.log('----------------------------------');