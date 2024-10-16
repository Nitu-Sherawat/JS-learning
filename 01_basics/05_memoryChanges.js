let name1 = "nitu";
let name2 = name1;
name2 = "devam";

console.log(name1);
console.log(name2);

let user1 ={
    name:"nitu",
    age:17
}

let user2 = user1;

user2.age = 20;

console.log(user1);
console.log(user2);

// Note : Stack --> Primitive (Copy)
// Heap --> Non-Primitive (Reference)