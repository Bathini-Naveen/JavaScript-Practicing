// // !Example 1
// // !then()
// let api1 = fetch("https://dummyjson.com/recipes")
// //console.log(api1);
// api1.then((res)=>{
// return res.json()
// }).then((res)=>{
// console.log(res.recipes);
// })
// !async and await
// let fetchdata1 = async ()=>{
//    let api1 = await fetch("https://dummyjson.com/recipes")
//   let data =  await api1.json()
//   console.log(data.recipes);
//   let container = document.getElementById("table1")
//   console.log(container);
//  data.recipes.forEach((ele)=>{
//     container.innerHTML +=`
//     <tr>
//     <td>${ele.id}</td>
//     <td>${ele.name}</td>
//     <td>${ele.ingredients}</td>
//     <td>${ele.instructions}</td>
//     <td><img src= ${ele.image} height=200 width=200></td>
//     ></tr>

//     `
//  })
// }
// fetchdata1()

// !Example 2
// // !then()
// let api2 = fetch("https://fakestoreapi.com/products")
// // console.log(api2);
// api2.then((res)=>{
//  return res.json()
// }).then((res)=>{
//     console.log(res);
// })
// // !async and await
// let fetchdata2 =async ()=>{
// let api2 = await fetch("https://fakestoreapi.com/products")
// let data =  await api2.json()
// console.log(data);
// let container=document.getElementById("table2")
// console.log(container);
// data.forEach((ele)=>{
// container.innerHTML +=`
// <tr>
// <td>${ele.id}</td>
// <td>${ele.title}</td>
// <td>${ele.category}</td>
// <td>${ele.description}</td>
// <td>${ele.price}</td>
// <td><img src=${ele.image} height=200px width=200px></td>

// </tr>
// `
// })
// }
// fetchdata2()
// !Example 3
// let fetchdata3 = async () => {
// let api3 = await fetch("https://api.github.com/users")
// let data = await api3.json()
// console.log(data);
// let container = document.getElementById("table3")
// data.forEach((ele) => {
// container.innerHTML  +=`
// <tr>
// <td>${ele.id}</td>
// <td>${ele.login}</td>
// <td>${ele.type}</td>
// <td><img src=${ele.avatar_url} height=200 width=200></td>
// <td><a href=${ele.html_url} <button>Github Url</button></a></td>
// </tr>
// `
// })
// }
// fetchdata3()

// !Example4
// let fetchdata4 = async ()=>{
// let api4 = await fetch("https://dog.ceo/api/breeds/image/random")
// let data = await api4.json()
// let imgTag =document.querySelector("img")
// imgTag.src=data.message
// }
// fetchdata4()

// !Example5

let fetchdata5 = async ()=>{
let api5 = await fetch("https://dummyjson.com/quotes/random")
let data = await api5.json()
let marqueeTag = document.getElementById("marquee")
marqueeTag.innerHTML = `
<h1>${data.quote}</h1>
`
}
fetchdata5()