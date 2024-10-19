// Object from constructor = Singleton , From literals = Not singleton

/* Object literals */

const mySym = Symbol();

const myObj = {
    name : "Nitu",
    "full name" : "Nitu Sherawat",
    [mySym] : "mykey1", // mySym : "mykey1" --> also give same result but type of mySym is not Symbol --> Wrong Syntax
    location : "M/Garh",
    email : "nitu@123.com",
    age : 17
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj["full name"]); // Wrong : myObj.full name
console.log(myObj[mySym]) // Symbol need not to be treated like string

// To change value :

myObj.name = "Devam";
console.log(myObj);
//Object.freeze(myObj);
myObj.name = "Nitu"; // Cann't change after freeze
console.log(myObj);

myObj.greetings = function(){
    console.log("Say Hello");
}

console.log(myObj.greetings); // [Function (anonymous)]
console.log(myObj.greetings());

myObj.callfunc = function(){
    console.log(`Hello guys , This is ${this.name}.`);
}

console.log(myObj.callfunc());

// Note : Nested objects --> OKKK , Access --> dot

/* Merging of Objects */

let obj1 = {1:"a",2:"b"};
let obj2 = {3:"c",4:"d"};
let obj3 = {5:"e",6:"f"};

let resultObj1 = Object.assign({},obj1,obj2,obj3); // {}=>target , else => source
console.log(obj1); //{ '1': 'a', '2': 'b' }
let resultObj2 = Object.assign(obj1,obj2,obj3); // obj1=>target , else => source
console.log(obj1); // result --> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

/* Result same */
console.log(resultObj1);
console.log(resultObj2);

/* Use of spread*/

let obj4 = {...obj2, ...obj3};
console.log(obj4);

const tinderUser = {
    name : "Devam Desai",
    email : "cartoon@123.com",
    isLoggedIn : false
}

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // returns an array of keys -->> "IMPORTANT"!!!!!!!
console.log(Object.entries(tinderUser)); // return array of array
console.log(Object.values(tinderUser)); //returns an array of values

// Array of objs --> Data from database

let arr = [
    
    obj1 = {
        email : "mansa@gmail.com"
    },
    obj2 = {
        email : "utsav@gmail.com"
    },
    obj3 ={
        email : "bhagat@gamil.com"
    }

]

console.log(arr[1].email);

/**  Singelton Object **/

const newUser = new Object();

console.log(newUser); // Empty object


const course = {
    courseName : "Hindi",
    price : 99,
    courseInstructor : "Ajit Sir"
}

const {courseInstructor : Teacher} = course;

console.log(Teacher);

// JSON Format :

[
    {},
    {},
    {}
]

