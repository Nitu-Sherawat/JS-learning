console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true
console.log(null<=0); // true
console.log(null<0);  // false

/*Reason ??? Don't know*/

console.log(undefined>0); // false
console.log(undefined==0); // false
console.log(undefined>=0); // false
console.log(undefined<=0); // false
console.log(undefined<0);  // false

console.log(undefined>=null); // false
console.log(undefined<=null); // false
console.log(undefined == null); // true

// Note : Strict check (===) -> It checks both value and dataType

console.log(undefined === null); // false

/* Try to avoid these type of conversions */