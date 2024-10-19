/* Note : JS array are resizable 
          Array can be hetrogeneous
          Array -> shallow copy (By reference)
          (DeepCopy = No changes in original DS)
*/

let arr = [0,1,2,3,4,5];

console.log(`Changed array is ${arr}`);

arr.push(6);
console.log(`Changed array is ${arr}`);
arr.pop();
console.log(`Changed array is ${arr}`); 
arr.unshift(9);                             // Push at start, very costly
console.log(`Changed array is ${arr}`);
arr.shift();                                 // Pop at start
console.log(`Changed array is ${arr}`);

console.log(arr.includes(9));
console.log(arr.indexOf(4));

console.log(typeof arr.join()); // String => 0,1,2,3,4,5

/* Note : Slice-> No change in original array  (Don't include last idx)
          Splice-> Change in original array 
*/

let arr1 =[0,1,2,3,4,5];
console.log(arr1);

let sliceArr = arr1.slice(0,4);
console.log(sliceArr); //[0,1,2,3]
console.log(arr1); //[0,1,2,3,4,5]

let splicearr = arr1.splice(1,3); 
console.log(splicearr); // [1,2,3]
console.log(arr1); // [0,4,5]

// New operations

let names = ["nitu","devam","mansa"];
let surnames = ["sherawat","desai","mahendru"];

let fullname = names.concat(surnames);
console.log(fullname); // Concat don't change in original array , return a new array

// Spread method 

let newfullname = [...names , ...surnames];
console.log(newfullname);

// Flat function

const newArr = [1,2,3,[4,5,6],[8,[9,[10,[34]]]],11,12,[13,14,[15]]];

console.log(newArr.flat(3)); // Gives depth , amount to flat

/* To check DS is array or not */

console.log(Array.isArray(newArr));

/* To make array : from funtion */ 

console.log(Array.from("nitu"));

console.log(Array.from({name : "nitu"})); // If not able to make array then return [] , confused whether to make array from keys or values

/* To make array : of funtion */

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));