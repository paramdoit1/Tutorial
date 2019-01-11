

//It’s a JavaScript expression that allows us to extract data from arrays, objects, maps and sets
// It allows us to extract properties from an object or items from an array, multiple at a time.
//Object Destructuring:
const person = {
    first: 'Lakshiv',
    last: 'Param',
    country: 'India',
    city: 'Hamilton',
    twitter: '@lparam'
  };
 //const first = person.first;
  //const last = person.last;

  //console.log(first,last);
//Lakshiv Param
  const {first, last} = person;

  console.log(first,last);

  const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com'
      }
    }
  };

//const twitter = wes.links.social.twitter;
//const facebook = wes.links.social.facebook;

const { twitter, facebook } = wes.links.social;
console.log(twitter, facebook); // logs the 2 variables

//Method destructuring
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
}

function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary(student);


let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable } having aliases
let {width: w, height: h, title} = options;

console.log('width: ', w);
console.log('height: ', h);
console.log('Title: ', title);

options = {
  title1: "Menu"
};

//Assigning default value

let {width1 = 100, height1 = 200, title1} = options;

console.log('width: ', width1);
console.log('height: ', height1);
console.log('Title: ', title1);

//Using Rest Operator

let options2 = {
  title2: "Menu",
  height2: 200,
  width2: 100
};

let {title2, ...rest} = options2;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height2);  // 200
console.log(rest.width2);   // 100

//without let

({title, width, height} = {title: "Menu", width: 250, height: 150});

console.log('width: ', width);
console.log('height: ', height);
console.log('Title: ', title);