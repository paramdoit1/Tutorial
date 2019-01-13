//JavaScript gives us four methods to add or remove items from the beginning or end of arrays:
//pop(): Remove an item from the end of an array

let cats = ['Bob', 'Willy', 'Mini'];
cats.pop(); 
console.log('cats: ', cats);//cats:  [ 'Bob', 'Willy' ]

//push(): Add items to the end of an array

 cats = ['Bob'];
cats.push('Willy'); // ['Bob', 'Willy']
cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']

//shift(): Remove an item from the beginning of an array
 cats = ['Bob', 'Willy', 'Mini'];
cats.shift(); // ['Willy', 'Mini']

//unshift(): Add items to the beginning of an array
cats.unshift('hello');
[ 'hello', 'Willy', 'Mini' ]
console.log(cats);
//[ 'hello', 'Willy', 'Mini' ]

cats.unshift('hai', 'fun');
console.log(cats);
//[ 'hai', 'fun', 'hello', 'Willy', 'Mini' ]
