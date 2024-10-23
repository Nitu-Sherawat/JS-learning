/* JS Execution Context are :

1) Global Execution Context
2) Function Execution Context
3) Eval Execution Context

*/

// Steps to execute code

/* Code :  */

let val1 = 10;
let val2 = 5;

function addnum(val1,val2){
    let total = val1+val2;
    return total;
}

let result1 = addnum(val1,val2);
let result2 = addnum(10,2);

/*
    Global Execution(this)
*/

/* Memory Phase 
    val1 = undefined
    val2 = undefined
    addnum = defination
    result1 = undefined
    result2 = undefined

*/

/* Execution Phase;
    val1 = 10
    val2 = 5
    addnum = New Execution context : (New Variable Environment + New Execution thread){
        New Memory Phase : val1 = undefined , val 2 = undefined , total = undefined
        New Execution Phase : val1 = 10 , val2 = 5 , total = 15
            // Delete after execution
            }
    result1=15
    addnum = New Execution context : (New Variable Environment + New Execution thread){
        New Memory Phase : val1 = undefined , val 2 = undefined , total = undefined
        New Execution Phase : val1 = 10 , val2 = 2 , total = 12
            // Delete after execution
            }
        result2 = 12
 */