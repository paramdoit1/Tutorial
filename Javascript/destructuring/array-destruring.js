//Destructuring assignment allows for instantly mapping an object or array onto many variables.



// we have an array with the name and surname
let arr = ["Raja", "Raman"]

// destructuring assignment
let [firstName, surName] = arr;

console.log('first Name:', firstName);
console.log('Sur Name:', surName);
//first Name: Raja
//Sur Name: Raman

let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log('title:', title); //title: Consul

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

console.log('a: ', a);
console.log('one: ', one);
//a:  a
//one:  1

let user = {};
[user.name, user.surname] = "Raja Raman".split(' ');

console.log('user:', user);
//user: { name: 'Raja', surname: 'Raman' }

 user = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
  }

user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user.entries()) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1); // Julius
console.log(name2); // Caesar

console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surname); // Anonymous (default used)

// runs only prompt for surname
 [name = prompt('name?'), surname = 'hello'] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surname); // hello