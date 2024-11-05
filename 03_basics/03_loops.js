// FOR LOOP

for(let i=0;i<10;i++) console.log(i);

let arr =[0,1,2,3];

for(let i=0;i<=arr.length;i++) console.log(arr[i]); // Here arr[4] => undefined (NOT OUT OF BOUND)

// IMP KEYWORDS :: break , continue

// WHILE LOOP

let i = 0;
while(i<10){
    console.log(i);
    i++;
}

// DO WHILE LOOP

do{
    console.log(i);
    i++;
}while(i<20);

/********************* ARRAY LOOPS ************************/

// 1) For of loop

let numbers = [1,2,3,4,5];

for(const num of numbers) console.log(num);

let greetings = "Hello Everyone!!!"

for(const char of greetings) console.log(char);

// NEW DATASTRUCTURE :::::: MAP

let mappi = new Map();
mappi.set(1,"Devika");
mappi.set(2,"Sugam");
mappi.set(3,"Jatin");
mappi.set(4,"Vatsal");
mappi.set(5,"Jai");

for(const it of mappi){
    console.log(it);
}

// Destructuring of map

for(const [key,value] of mappi){
    console.log(`${key} and ${value}`);
}

// LOOP on OBJECT : for of don't work for objects

const myObj = {
    username : "Devam",
    email : "devam@123.com",
    pass : "1244"
}

for (const key in myObj){
    console.log( `${key} and ${myObj[key]}`);
}

// Note : for in also work for array..

for(const num in numbers){
    console.log(`${num} is key and ${numbers[num]} is value.`);
}

for(const key in mappi){
    console.log(key); // No error , no console value , map is not iterable
}

// FOR EACH FUNCTION IN ARRAY

const names = ["Nitu","Devam","Mansa","Utsav","Arpit","Rishi"];

names.forEach(function (name){  // here callback function is used --> Function without name
    console.log(name);
})

names.forEach((name,index,arr)=>{
    console.log(name,index,arr)
})

const languages = [

    {
        language : "Javascript",
        extension: "js"
    },
    {
        language : "Python",
        extension : "py"
    },
    {
        language : "C++",
        extension : "cpp"
    }

]

languages.forEach((item)=>{
    console.log(item.language);
})
