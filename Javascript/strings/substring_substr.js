//substring takes a starting index and an end index while 
//substr takes a starting index and a length of characters

const myStr = 'Alligator';
const myNewStr = myStr.substring(2);
console.log(myNewStr); // ligator

//With two arguments passed-in, 
//we get a subset of the string from the starting index to the end index (exclusive):
const myNewStr1 = myStr.substring(0, 3);
console.log(myNewStr1); // All

//The substr() method is very similar, 
//but the second argument is not for the end index, it’s for the amount of character

const myNewStr2 = myStr.substr(2, 3);
console.log(myNewStr2); // lig

const myNewStr3 = myStr.substr(-4);
console.log(myNewStr3); // ator

const myNewStr4 = myStr.substr(-4, 3);
console.log(myNewStr4); // ato

const myNewStr5 = myStr.substring(-4, 3);
console.log(myNewStr5); //All

const myNewStr6 = myStr.substring(-1);
console.log(myNewStr6); //Alli

const myString = 'Alligator';
const myNewStrViaSubstring = myString.substring(3);
const myNewStrViaSubstr = myString.substr(3);
console.log(myNewStrViaSubstring); // igator
console.log(myNewStrViaSubstr); // igatorgator