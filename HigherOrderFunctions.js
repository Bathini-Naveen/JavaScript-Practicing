//! HIGHER ORDER FUNCTIONS
let add=(a,b)=>{
    return a+b
}
let sub=(a,b)=>{
    return a-b
}
let mul=(a,b)=>{
    return a*b
}
//! WAY 1
// console.log(add(10,20));
// console.log(sub(20,30));
// console.log(mul(2,6));


//! WAY 2
let calculator=(a,b,task)=>{
    return task(a,b)
}
console.log(calculator(10,20,add))
console.log(calculator(50,20,sub))
console.log(calculator(40,5,mul))