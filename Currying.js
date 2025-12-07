//! FUNCTION TAKING MULTIPLE ARGUMENTS
function add1(a,b,c){
    return a+b+c;
}
console.log(add1(10,20,30));

//! NESTED SERIES FUNCTIONS TAKING ONLY SINGLE ARGUMENT
function add2(a)
{
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add2(10)(20)(30));

//! IMPLICIT RETURN ARROW FUNCTION
let add3=(a)=>(b)=>(c)=>a+b+c; //We can remove the parenthesis for a,b,c because....In single argument Arrow function if we have only one line of code then we cann remove the parenthesis
console.log(add3(10)(20)(30));