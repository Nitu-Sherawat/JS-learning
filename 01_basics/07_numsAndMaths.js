let num1 = 123345

let num2 = new Number(45);

console.log(num1);
console.log(num2);

console.log(num1.toString().length); //3
console.log(num1.toFixed(2)); // 123.00

console.log(num2.toPrecision(1));// All digits

// For commas -> toLocaleString('en-IN') indian commas

console.log(num1.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

/* Note : JS has Math library */

console.log(Math.round(4.5)); // 5
console.log(Math.max(5,3,4));

console.log((Math.random()*10) +1); // Random value b/w 1 and 10

/* To get a random number b/w max and min
    Math.floor(Math.random()*(max-min+1)) + min
*/
