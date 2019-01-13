//Sets are a new object type with ES6 (ES2015) that allow to create collections of unique values. The values in a set can be either simple primitives like strings or integers, 
//but more complex object types like object literals or arrays can also be part of a set.

//Here’s a simple example showing off a basic set and a few of
 //the available methods on it like add, size, has, forEach, delete and clear:

 let animals = new Set();

animals.add('cat');
animals.add('dog');
animals.add('goat');
animals.add('cow');
console.log('Size of set',animals.size); // 4
animals.add('dog');
console.log('Size of set',animals.size); // 4

console.log('Do set has goat',animals.has('goat')); // true
animals.delete('goat');
console.log('Do set has goat',animals.has('goat')); // false

animals.forEach(animal => {
  console.log(`Hey ${animal}!`);
});

//Hey cat!
//Hey dog!
//Hey cow!

animals.clear();
console.log(animals.size); // 0

//Creating an set from array.


let myAnimals = new Set(['pig', 'sheep', 'pig', 'goat']);

myAnimals.add(['hen', 'goat']);
myAnimals.add({animal:'sheep', work:'eats'});

console.log('Animal Size is ', myAnimals.size);// Animal Size is  5

myAnimals.forEach((animal)=> {
    console.log('The animal is :', animal)
});
//The animal is : pig
//The animal is : sheep
//The animal is : goat
//The animal is : [ 'hen', 'goat' ]
//The animal is : { animal: 'sheep', work: 'eats' }

//Set from String
console.log('Only unique characters will be in this set.'.length); // 43

let sentence = new Set('Only unique characters will be in this set.');
console.log(sentence.size); // 18
console.log(sentence); 
// /et {
 /*  'O',
  'n',
  'l',
  'y',
  ' ',
  'u',
  'i',
  'q',
  'e',
  'c',
  'h',
  'a',
  'r',
  't',
  's',
  'w',
  'b',
  '.' } */

  let moreAnimals = new Set(['fox', 'horse', 'dog', 'rabbit']);

for (let animal of moreAnimals) {
  console.log(`Howdy ${ animal }`);
}

// Howdy fox
// Howdy horse
// Howdy dog
// Howdy rabbit

let partyItems = new Set(['cake', 'food', 'baloon']);
let items = partyItems.values();

console.log(items); //[Set Iterator] { 'cake', 'food', 'baloon' }
/* 
for(const item of items ) {
    console.log(item);
} */
// cake
//food
//baloon

console.log(items.next()); //{ value: 'cake', done: false }
console.log(items.next()); //{ value: 'food', done: false }
console.log(items.next());//{ value: 'baloon', done: false }
console.log(items.next().done);//true