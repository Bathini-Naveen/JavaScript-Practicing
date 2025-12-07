console.log("DECLARATION WITHOUT INITIALIZATION") ;
// var a;
// console.log(a); //Undefined

// let b;
// console.log(b); //Undefined

// const c;
// console.log(c); // Missing initializer in const declaration

console.log("REASSIGNING");
// var a=10;
//  a=20;
// console.log(a); //20

// let b=30;
//  b=true;
//  console.log(b); //true

//  const c=40;
//  c=50;
//  console.log(c); //Uncaught TypeError: Assignment to constant variable.

console.log("REDECLARATION");
// var a=10;
// var a=30;
// console.log(a);//30

// let b=30;
// let b=50;
// console.log(b); //Uncaught SyntaxError: Identifier 'b' has already been declared 

// const c=40;
// const c=50;
// console.log(c); //Uncaught SyntaxError: Identifier 'b' has already been declared 