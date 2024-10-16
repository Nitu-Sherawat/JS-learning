let name = "nitu";
let age = 17;

console.log(`Hello, My name is ${name} and my age is ${age}`);

const gameName = new String('nitusherawat');
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());

// Note : Learn string methods

let str1 = gameName.substring(0,4);
let str2 = gameName.slice(4,12); // If -ve val start from end
let str3 = "    Hoiiiiiiiii   ";

console.log(str1); // nitu
console.log(str2); // sherawat
console.log(str3.trim()); // "Hoiiiiii" --> trim start and end also exist

console.log(str1.charAt(2));
console.log(str2.indexOf('s'));

let url = "http://helloworld.com";

console.log(url.replace("http","https"));

console.log(url.includes("nitu"));

/* Note : To convert an string into array based on something */

str1 = "hello-devam-how-are-you";

const arr1 = str1.split('-');
console.log(arr1);