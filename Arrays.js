// 1)LITERAL WAY
let frontendsub=["HTML","CSS","JS","REACT JS"]
let details=["NAveen",21,true]
console.log(frontendsub) // ['HTML', 'CSS', 'JS', 'REACT JS']
console.log(typeof frontendsub);  //object
console.log(details); //['NAveen', 21, true]
console.log(typeof details);  //object

// 2)CONSTRUCTOR OBJECT
let recentMovies=new Array(4)
recentMovies[0]="PUSHPA"
recentMovies[1]="HAPPY"
recentMovies[2]="S/O SATYAMURTHI"
recentMovies[3]="ALA VAIKUNTA PURAMLOO"
recentMovies[4]="RACEGURRAM"
console.log(recentMovies);  // ['PUSHPA', 'HAPPY', 'S/O SATYAMURTHI', 'ALA VAIKUNTA PURAMLOO', 'RACEGURRAM']

// ACCESSING THE ELEMENTS OF AN ARRAY
let chickenItems=["BIRYANI","65","NOODLES","LOLLIPOP"]
console.log(chickenItems[2]);  //NOODLES
console.log(chickenItems[1]);  //65
console.log(chickenItems[6]);  //undefined
console.log(chickenItems[-1]);  //undefined

// LENGTH
console.log(chickenItems.length)  //4

console.log("********");

// MULTIDIMENSIONAL OR NESTED ARRAY
let trainer=[
    ["Monyt","python",25],
    ["pavan","Core Java",24],
    ["Harsha","sql",29]
]
console.log(trainer[1][2]); //24
console.log(trainer[2][1]); //sql
console.log(trainer[0][1]);  //python

// ADDING OR DELETING OF THE ELEMENTS AT THE STARTING OR ENDING  OF THE ARRAY
let snacks=["Samosa","Egg Puff"]
console.log(snacks);
// 1)PUSH() Add The Elemnts at the END
snacks.push("Eggs dosa","Chips","Punugulu")
console.log(snacks);
// 2)POP()  Delete only  single element from th END
snacks.pop()
console.log(snacks);
// 3)UNSHIFT()   ADD the number of elements from the START
snacks.unshift("panipuri","frenchfries","mirchi-bajji")
console.log(snacks);
// 4)SHIFT() DELETE only one element from the START
snacks.shift()
console.log(snacks);

// METHODS IN ARRAY
// 1)toString()
let arr1=["MARKER","LAPTOP","CHARGER","REMOTE"]
console.log(arr1.toString()); //MARKER,LAPTOP,CHARGER,REMOTE
console.log( typeof arr1.toString()); //string

// 2)concat(...arr)
let frontend=["HTML","CSS","JS"]
let backend=["java","python"]
let database=["SQL"]
let fullstack=[]
console.log(fullstack.concat(frontend,backend,database));  //['HTML', 'CSS', 'JS', 'java', 'python', 'SQL']

// 3)join(separator)
let arr2=["NAVEEN","SAI KKRAN","JAGADISH","MONTY","SURYA"]
console.log(arr2.join("❤️"));  //NAVEEN❤️SAI KKRAN❤️JAGADISH❤️MONTY❤️SURYA
console.log(typeof arr2.join("❤️"));  //string

// 4)flat(depthvalue)
let arr3=[1,2,3,[4,5,[6,7,[8,9,[10,[19,[35,]]]]]]]
console.log(arr3.flat()); //[1, 2, 3, 4, 5, Array(3)]
console.log(arr3.flat(2));  // [1, 2, 3, 4, 5, 6, 7, Array(3)]
console.log(arr3.flat(Infinity));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 35]

// 5)at(index)
let arr4=["maala","laila","shakila","leela"]
console.log(arr4.at(1)); //laila
console.log(arr4.at(5));  //undeined
console.log(arr4.at(-1));  //leela

// 10)splice(startIndex,deletecount,ElementsToBeAdded)
let arr10=["Icecream","Gulab Jamun","Double ka meeta"]
// Example1
// arr10.splice(1,1,"kaaju katli")
// console.log(arr10);  // ['Icecream', 'kaaju katli', 'Double ka meeta']

// Example2
// arr10.splice(-2,2,"Appricot Delight")
// console.log(arr10);  // ['Icecream', 'Appricot Delight']

// Example3
arr10.splice(1200,0,"kunafa")
console.log(arr10);  //['Icecream', 'Gulab Jamun', 'Double ka meeta', 'kunafa']


// 