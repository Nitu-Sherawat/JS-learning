// Control flow operators : >= , <= , === , !== , !=

// IF_ELSE
const temp = 41

if(temp>41){
    console.log("Garmiiii");
}else{
    console.log("Shi h");
}

// SWITCH

const month = 1;

switch(month){ // Case "Data-type"
    case 1:
    console.log("JAN");
    break;
    case 2:
    console.log("FEB");
    break;
    case 3:
    console.log("MARCH");
    break;
    case 4:
    console.log("APRIL");
    break;
    default:
    console.log("LOL..");
    break;
}

// TRUTHY FALSY VALUES

/*
  false,BigInt 0n, null, undefined,Nan, "",0,-0 = FALSY VALUE
  "0",'false'," ",[],{},function(){} = TRUTHY VALUE
*/

if([]){ // Can check array length
    console.log("Empty Array is Truthy Value");
}else{
    console.log("Not empty array");
}

/* How to check empty object ?? */

const emptyObj = {};

if(Object.keys(emptyObj).length==0){
    console.log("Empty Object Checked..");
}else{
    console.log("OOPS.. Not an empty Object..");
}

// NOTE ::::: NULLISH COALESCING OPERATOR(??) : null , undefined

const val1 = null ?? "Hello"; // "IF Value is present then assign value else assign null"
const val2 = 5 ?? 10;
const val3 = undefined ?? 15;
const val4 = null ?? undefined;
const val5 = undefined ?? null;
console.log(val1); //10
console.log(val2); //5
console.log(val3); //15
console.log(val4); // undefined
console.log(val5); //null

/* Ternary Operator */

const price = 100;

price>100 ? console.log("Price HIGH!!") : console.log("Price OKK");

