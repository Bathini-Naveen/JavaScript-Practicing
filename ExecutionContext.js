//! EXAMPLE1
// console.log("START");
// var a=10;
// let b=20;
// function anything(){
//     const c=30;
//     console.log(a+b+c);
// }
// anything()
// console.log("END");


//! EXAMPLE 2
// console.log("START");
// function a(){
//     b();
//     console.log("A FUNCTION");
// }
// function b(){
//     c();
//     console.log("B FUNCTION");
// }
// function c(){
//     console.log("C FUNCTION");
// }
// a();

//! EXAMPLE 3
// var msg="Hello"
// let num=420;
// function normal(){
//     console.log(msg+" "+num);
// }
// let arrow=()=>{
//     var info1="You are Stupid";
//     const info2="Fellow";
//     console.log(info1+" "+info2);
// }
// arrow()
// normal()

//! EXAMPLE 4
console.log("START");
function outer(){
    var a=10;
    let b=20;
    function inner(){
        const c=30;
        console.log(b+c);
    }
    inner()
}
outer()