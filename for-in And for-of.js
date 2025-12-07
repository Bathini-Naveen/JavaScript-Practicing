let str="Rain";
let arr=["Samosa","Pakoda","Egg Puff"]
let obj={
    name:"Naveen",
    age:20
}
//!for-in

//*Strings
// for(let output in str){
//     console.log(output);  //0 1 2 3
//     console.log(str[output]);  //R a i n
// }

//*Arrays
// for(let output in arr){
//     console.log(output);   // 0 1 2
//     console.log(arr[output]);   //samosa pakoda egg puff
// }

//*Objects
// for(let output in obj){
//     console.log(output);   //name age
//     console.log(obj[output]);  //Naveen 20
// }
//!for-of

//*Strings
for(let output of str){
    console.log(output);  //R a i n 
}

//*Arrays
for(let output of arr){
    console.log(output);  ////samosa pakoda egg puff
}

//*Objects
for(let output of obj){
    console.log(output);  //TypeError: obj is not iterable
}