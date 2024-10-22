/* BLOCK AND GLOABAL SCOPE */

// let a = 10;
// const b = 20;
// var c = 30;

if(true){
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // a not defined
//console.log(b); // b is not defined
console.log(c); // 30 --> ISSUE......!!!-----> OUT OF SCOPE


function one(){

    const username = "Nitu";

    function two(){
        const website = "Github";
        console.log(username);
    }
    //console.log(website); // website not defined --> Out of scope
    two();
}
one();

console.log(addOne(5)); // Valid 

function addOne(num){
  return num+1;
}

// addTwo(5); // Cannot access 'addTwo' before initialization--> If we initalize with name , cann't access

const addTwo = function(num){
  return num+2;
}

const user = {
  username : "Devam",
  email : "devam123.com",
  welcomeMsg : function(){
    console.log(`Hello guyzzz, this is ${this.username}.`);
    //console.log(this); --> Devam object
  }
}
user.welcomeMsg();
//console.log(`Second : ${this}`); // Empty Object : {}

/* NOTE : Global Object in Browser : Window */

function checkThis(){
  username = "Nitu"
  console.log(this.username); // undefined
}
checkThis();

const checkThisPart2 = () => {
  console.log(this); // {}
}
checkThisPart2();

// Arrow function syntax

const add1 = (num1,num2)=>{ return num1+num2;}

const add2 = (num1,num2) => (num1 + num2); // NO need to write return while using brackets

console.log(add1(56,23));
console.log(add2(3,5))