// IIFE : Imediately Invoked Function Expressions.

(function callDB(){  // Named IIFE
    console.log("Datbase Connected");
})(); // To reduce Global Scope variables pollution , we use iife. 

// Note : To end an iife , you must end with semicolon ;;;;;

((name)=>{ // Unnamed IIFE
    console.log(`Hiii ${name}`);
})("Nitu");
