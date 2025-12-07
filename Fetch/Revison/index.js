// !Example 1 
let add =(a,b)=>{
    return a+b
}
let sub =(a,b)=>{
    return a-b
}
let mul =(a,b)=>{
    return a*b
}
let div =(a,b)=>{
    return a/b
}
let calculator =(a,b,fun)=>{
    return fun(a,b);
}
console.log(calculator(20,40,mul))
console.log(calculator(40,30,sub));

// !Example 2
let chef=(item,person)=>{
    console.log(`Cooking Special ${item} with love❤️`);
    waiter()
}
let waiter=()=>{
    console.log("This is the Special Biryani🍛 given by the person who Loves you the Most");
}
chef("Biryani",waiter)

// !map()
// *Example1
let names = ["Naveen","sai","Jaggu","Monty"]
 let output1 = names.map((ele)=>{
    return ele.toLowerCase();
})
console.log(output1);
// *Example2
let movies = [
    {id:1,name:"OG",rating:3},
    {id:2,name:"Mirai",rating:4},
    {id:1,name:"Idli Kottu",rating:3}
]
 let output2 = movies.map((ele)=>{
    return ele.name
})
console.log(output2);

// !Destructuring
// *Arrays
// @Example1
let items =["laptop","Bag","Bottle","Clothes","Plate"]
let [item1,item2,item3,item4,item5]=items
console.log(item4);
// @Example2
let food = ["Puri","Bomda","Upma","Dosa","Idly"]
let [,,,Dosa]=food
console.log(Dosa);
// @example3
let places = ["Hyd","Chennai","Huzurnagar",["Srinagar",["jammu",["jaipur"]]]]
let [,,,[,[a]]]=places
console.log(a);