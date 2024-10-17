
let newDate = new Date();

console.log(newDate); // current time and date
console.log(typeof newDate); //Object

/************** Date operations **************/

console.log(newDate.toString()); // Day + Date + time
console.log(newDate.toDateString()); // day + date
console.log(newDate.toJSON()); // date+time
console.log(newDate.toLocaleDateString()); // MM/DD/YYYY
console.log(newDate.toLocaleString()); // MM/DD/YY + Time

let createdDate = new Date("2024-10-17");  // Diff methods = Date(10,17,2024,9,5)

console.log(createdDate.toLocaleString()); // MM/DD/YYYY

let myTimeStamp = Date.now(); // Give milliseconds

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); // Value in seconds 
console.log(newDate.getTime());

/* Note : Always compare value in milliseconds */

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))

