"use strict" // use newer version of JS

// alert(3+3) => we are using node not browser

let age = 17;
let name = "Nitu Sherawat";
let isLoggedIn = true;
let state = null;
let count ;

console.log(typeof age);
console.log(typeof "Hello"); // name ?? name cut why why??
console.log(typeof state);  // Null => object 
console.log(typeof count); // Undefined
console.log(typeof isLoggedIn);

// Primitive dataTypes

/*
Number => range 2 power 53
String 
Boolean
Undefined
Bigint
undefined 
symbol => uniqueness
*/

// Object 

/* 
    Null => Standalone value
*/

/*
     
   (Reference) Non-primitives : Array , Objects , Functions etc

*/

// Note : Js is dynamically typed

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id==anotherId); // false
console.log(id===anotherId); //false

// Array : 
 const names = ["nitu","devam","mansa","utsav"];
 console.log(names);

 // Object
 let myObj ={
    name:"Nitu",
    age : 17
 }
 console.log(myObj);

 // Function
 const myFunc = function(){
    console.log("Hello World");
 }

 console.log(typeof names); // Obj
 console.log(typeof myObj); // Obj
 console.log(typeof myFunc); // Obj