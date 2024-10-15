const accountId = 123;
let accountName = "Nitu";
var accountPass ="1234";

/*
use of var not allowed : Don't know about block and functional scope
Avoid var , use let
*/

accountCity = "Mahendergarh";

let newName;

console.table([accountId,accountName,accountPass,accountCity,newName]);

// accountId = 234; --> Not allowed 
accountName = "Devam";
accountPass = "234";
accountCity = "Ahemdabad";

console.table([accountId,accountName,accountPass,accountCity,newName]);