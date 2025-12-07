//! 1)forEach(fn(element,index,array))
let arr1=["Monty","Pavan","Rahul"]
arr1.forEach((element,index,array)=>{
    console.log(element+" "+"🍾");
    console.log(index);
    console.log(array);
}
)

let arr2=[1,2,3,4,5,6,7,8,9,10]
arr2.forEach((Naveen,ind,arr)=>{
    console.log(`2 * ${Naveen} = ${2*Naveen}`);
}
)

// 2)map(fn(element,index,array))
// Example1
let prices=[499,120,345,200]
prices.map(
    (ele,ind,arr)=>{
        console.log(ele*0.1);
    }
)

// 2)Example2
let mulOf2=[1,2,3]
let mapOutput=mulOf2.map((ele,ind,arr)=>
{
    return(`2 * ${ele} = ${2*ele}`);
}
)
console.log(mapOutput);

// 3)filter(fn(element,index,array))
let arr3=[50,70,60,95,40]
let filterOutput=arr3.filter((element,index,array)=>{
    return element>50
})
console.log(filterOutput); // [70, 60, 95]

// 4)some(fn(ele,ind,arr))
let arr4=[1,7,3,0,2]
let someOutput=arr4.some((ele)=>{  //we can give only ele or ele,ind,arr
    return ele>3
})
console.log(someOutput); //true

// 4)every(fn(ele,ind,arr))
let arr5=[1,7,3,0,2]
let everyOutput=arr5.every((ele)=>{
    return ele>3
})
console.log(everyOutput);  //false

// 6)reduce(fn(accumulator,element,index,array),initialValue)

// NORMAL METHOD
let arr6=[1,2,3,4,5,6,4];
// let sum=0;
// for(let i=0; i < arr7.length; i++)
// {
//      sum=sum+arr7[i];
// }
// console.log(sum);

let reducedOutput=arr6.reduce((sum,ele,ind,arr)=>
{
    return sum+=ele
},0)
console.log(reducedOutput);

