//1. The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
//2. The splice() method changes the original array and slice() method doesn’t change the original array.
//3. The splice() method can take n number of arguments:

//Argument 1: Index, Required. An integer that specifies at what position to add /remove items, 
    //Use negative values to specify the position from the end of the array.
//Argument 2: Optional. The number of items to be removed. If set to 0(zero), no items will be removed. 
    //And if not passed, all item(s) from provided index will be removed.
//Argument 3…n: Optional. The new item(s) to be added to the array.

//If Argument(2) is less than 0 or equal to NaN, it is treated as if it were 0.
//If Argument(1) or Argument(2) is greater than Array’s length,
// either argument will use the Array’s length.

const array = ['a','b','c','d','e'];
const array1 = array.splice(2);
console.log('Array extracted: ', array1); // [ 'c', 'd', 'e' ]
console.log('Array Input: ', array); // [ 'a', 'b' ]

const array2 = ['a','b','c','d','e'];
const array3 = array2.splice(2,1);
console.log('Array extracted: ', array3); // [ 'c']
console.log('Array Input: ', array2); //  [ 'a', 'b', 'd', 'e' ]

const array4 = ['a','b','c','d','e'];
const array5 = array4.splice(2,0);
console.log('Array extracted: ', array5); // []
console.log('Array Input: ', array4); //  [ 'a', 'b', 'c', 'd', 'e' ]

const array6=[11,12,13,14,15];
const array7 = array6.splice(2,1,"Hello","World");
console.log('Array extracted: ', array7); // [13]
console.log('Array Input: ', array6); // [ 11, 12, 'Hello', 'World', 14, 15 ]

        // -5 -4 -3 -2 -1
        // |  |  |  |  |
const array8=[16,17,18,19,20];
        //  |  |  |  |  |
        //  0  1  2  3  4
const array9 = array8.splice(-2,1,"me");

console.log('Array extracted: ', array9); // [19]
console.log('Array Input: ', array8); // shows [16, 17, 18, "me", 20]

let programmingLanguages = ["JavaScript", "Ruby", "Python"]
console.log(programmingLanguages.splice(2, 0, "C++", "C#")) 
  //=> []
console.log(programmingLanguages) ;
  //=> [ 'JavaScript', 'Ruby', 'C++', 'C#', 'Python' ]

let seasons = ["Spring", "Summer", "Fall", "Winter"];
console.log(seasons.splice(-2));
  //=> [ 'Fall', 'Winter' ]
console.log(seasons)
  //=> [ 'Spring', 'Summer' ]