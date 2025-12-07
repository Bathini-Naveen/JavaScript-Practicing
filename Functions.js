//! 2)    ARROW FUNCTION
let greet=(msg)=>{
    console.log(msg);
}
greet("GOOD EVENING")

//! EXPLICIT RETURN ARROW FUNCTION
let product=(a,b)=>{
    return a*b
}
console.log(product(2,3));

//!IMPLICIT RETURN ARROW FUNCTION

let add=(c,d)=>
    console.log(c+d)
add(20,30)


//! EXAMPLE2
let add1=(e,f)=>console.log(e+f)
add1(3,7)

//! EXAMPLE3
let add2=(p,q)=>p+q
console.log(add2(4,9));


//! BEHAVIOR OF ARROW FUNCTION
//
//@ SINGLE PARAMETER
let singlePara=msg=>{
    console.log(msg);
}
singlePara("Hello")

//@ NO PARAMETER
let noPara =_=>{
    console.log("HIIIIIIIIIIIII");
}
noPara();





//! 3)IMMEDIATE INVOKED FUNCTION EXPRESSION
// *NORMAL
(function normal(){
    console.log("NORMAL FUNCTION");
}
)
();

// *ANONYMOUS FUNCTION
(function(){
    console.log("ANONYMOUS FUNCTION");
}
)
();

// *ARROW FUNCTION
(()=>{
    console.log("ARROW FUNCTION");
}
)
();