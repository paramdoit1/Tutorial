//Unlike with objects, map keys can be of any type, even objects or functions.
// It’s also easy to get the size of a map, while it’s not as straightforward for objects.
// On top of that, with maps we can iterate in the order in which the values were added, 
//contrary to objects where there’s no guarantee about the order.

let things = new Map();

const myFunc = () => 'Pizza';

things.set('car', 'Car');
things.set('house', 'House');
things.set('plane', 'Airplane');
things.set(myFunc, '😄 Key is a function!');

things.size; // 4

things.has('car'); // true

things.has(myFunc) // true
things.has(() => 'pizza'); // false, not the same reference
things.get(myFunc); // '😄 Key is a function!'

things.delete('plane');
things.has('plane'); // false

things.clear();
things.size; // 0

// setting key-value pairs is chainable
things.set('wenc', 'Wrench')
      .set('guitar', 'Guitar')
      .set('joystick', 'Joystick');

const myMap = new Map();

// Even another map can be a key
things.set(myMap, 'Oh gosh!');
console.log('Things.size',things.size) //Things.size 4
console.log(things.get(myMap));// 'Oh gosh!'

let activities = new Map();

activities.set('one', 'play');
activities.set('two', 'eat');
activities.set('three', 'sleep');
activities.set('four', 'run');

for (let [count, activity] of activities) {
  console.log(`Activity ${count} is ${activity}`);
}
//Activity one is play
// Activity two is eat
// Activity three is sleep
// Activity four is run

activities.forEach((value, key) => {
    console.log(`Activity ${key} is ${value}`);
  });
//   Activity one is play
//   Activity two is eat
//   Activity three is sleep
//   Activity four is run

const funArray = [
    ['champ', 'Champagne'],
    ['pop', 'Lollipop'],
    ['chock', 'Confetti'],
  ];
  
  let funMap = new Map(funArray);
  console.log(funMap.get('pop')); // Lollipop