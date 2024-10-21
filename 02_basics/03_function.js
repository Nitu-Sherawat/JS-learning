function hello(){
    console.log("Hello guyzz");
}

hello // --> function reference
hello() // --> function execution

function add(num1,num2){ // Here num1,num2--> parameters
    console.log(num1+num2); 
}

add(3,4); // num1,num2--> arguments

function userLoggedIn(username){
    if(username===undefined){ // if(!username)
        return "Enter Username";
    }
    return `${username} just logged in.`
}

console.log(userLoggedIn()) // Output -> undefined just logged in. without if
console.log(userLoggedIn("Nitu"));

function calculateCartPrice(...nums){ // Here ... is rest operator
    return nums;
}

console.log(calculateCartPrice(200)); // [200]
console.log(calculateCartPrice(200,300,350)); // [200,300,350]

const user = {
    username :"mansa",
    price : 567
}

function showPrice(anyobject){
    console.log(`Hello ${anyobject.username} , Your bill is ${anyobject.price}.`);
}

showPrice(user);