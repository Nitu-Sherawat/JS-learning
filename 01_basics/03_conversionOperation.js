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
 type of boolIsLoggedIn = boolean 
 boolIsLoggedIn = 0

 If isLoggedIn = "nitu";
 type of boolIsLoogeIn = boolean 
 boolIsLoggedIn = 1

 */


 // Note : string -> dataType , String -> Object

 /********************* Operations ***************/

 console.log(2**4) // 2 power 4 =>16

 console.log("1"+2) // 12
 console.log(1+2+"1") //31
 console.log("1"+2+3) //123

 console.log(+true) //1
 console.log(+"") //0

 /* Prefix , Postfix */

 let ct = 0;
 let ct1 = ++ct; 
 let ct2 = ct++;

 console.log(ct1); // --> 1
 console.log(ct2); // --> 1
 console.log(ct) // -->2