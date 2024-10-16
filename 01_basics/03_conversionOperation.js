let score = undefined

let valueInScore = Number(score);

console.log(typeof score); 
console.log(typeof valueInScore); 
console.log(valueInScore); 

/* If score == null 
    typeof valueInScore = number
    valueInScore = 0

    If score = "99"
    typeof valueInScore = number
    valueInScore = 99

    If score = "99and"
    typeof valueInScore = number
    valueInScore = NaN

    If score = "undefined"
    typeof valueInScore = number
    valueInScore = NaN

*/


let num = 34;

let stringNum = String(num);

console.log(typeof num);
console.log(typeof stringNum);
console.log(stringNum);

/*
 If num
 typeof num = undefined
 typeof stringNum = string
 stringNum = undefined

 If num= 89
 typeof num = number
 typeof stringNum = string
 stringNum = 89

*/

let isLoggedIn = "";

let boolIsLoggedIn = Boolean(isLoggedIn);

console.log(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(typeof boolIsLoggedIn);
console.log(boolIsLoggedIn);

/**
 If isLoggedIn = "";
 type of boolIsLoogeIn = boolean 
 boolIsLoggedIn = 0

 If isLoggedIn = "nitu";
 type of boolIsLoogeIn = boolean 
 boolIsLoggedIn = 1

 */


 // Note : string -> dataType , String -> Object
