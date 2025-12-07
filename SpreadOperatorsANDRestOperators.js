//!SPREAD OPERATORS
let frontend=["HTML","CSS","JS","REACT JS"]
let backend=["JAVA","PYTHON"]
let database=["SQL"]
let fullstack=[...frontend,...backend,...database]
console.log(fullstack);  //['HTML', 'CSS', 'JS', 'REACT JS', 'JAVA', 'PYTHON', 'SQL']

//*Objects
let obj1={
    name:"Arjun",
    gf:"Prrethi"
}
let obj2={
    dogName:"Preethi"
}
let finalObj={...obj1,...obj2}
console.log(finalObj);   //{name: 'Arjun', gf: 'Prrethi', dogName: 'Preethi'}

//*String to Array
let str="Something"
let arr=[...str]
console.log(arr);  // ['S', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g']

//*Array To Object
let randomThings=["Marker","Laptop","Stupid Fellows"]
let obj={...randomThings}
console.log(obj);  //{0: 'Marker', 1: 'Laptop', 2: 'Stupid Fellows'}

// !REST PARAMETER
function something(a,b,c,...rest){
console.log(a);  //1
console.log(b);  //2
console.log(c);  //3
console.log(rest);//[4,5,6,7,8,9,10]
}
something(1,2,3,4,5,6,7,8,9,10)