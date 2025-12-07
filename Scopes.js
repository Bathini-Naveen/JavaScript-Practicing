// GLOBAL SCOPE
// var a=10;
// let b="QSPIDERS"
// const c=30;

// ACCESING DIRECTLY
// console.log(a);
// console.log(b);
// console.log(c);

// ACCESSING INSIDE A FUNCTION
// function anything(){
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }
// anything()

// ACCESSING INSIDE BLOCK
// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }


// LOCAL/FUNCTION SCOPE
// function something(){
//     var name1="Naveen"
//     let name2="Saikiran"
//     const name3="Monty"
//     console.log(name1)
//     console.log(name2)
//     console.log(name3)
// }
// something()
// ACCESSING DIRECTLY
// console.log(name1) Uncaught ReferenceError: name1 is not defined at Scopes.js:38:13
// console.log(name2) Uncaught ReferenceError: name1 is not defined at Scopes.js:38:13
// console.log(name3) Uncaught ReferenceError: name1 is not defined at Scopes.js:38:13

// ACCESSING INSIDE BLOCK
// console.log(name1) Uncaught ReferenceError: name1 is not defined at Scopes.js:38:13
// console.log(name2) Uncaught ReferenceError: name1 is not defined at Scopes.js:38:13
// console.log(name3) Uncaught ReferenceError: name1 is not defined at Scopes.js:38:13   


// BLOCK SCOPE
{
    var b1="Naveen"
    let b2="Nani"
    const b3="Srinivas"
    // ACCESSING INSIDE BLOCK
    // console.log(b1);
    // console.log(b2);
    // console.log(b3)
}
// ACCESSING DIRECTLY
    // console.log(b1);//Naveen
    // console.log(b2); //Uncaught ReferenceError: b2 is not defined
    // console.log(b3); //Uncaught ReferenceError: b3 is not defined


    //ACCESSING INSIDE THE FUNCTION
    function anything(){
        console.log(b1);//Naveen
        console.log(b2); // Uncaught ReferenceError: b3 is not defined
        console.log(b3); // Uncaught ReferenceError: b3 is not defined
    }
    anything()
