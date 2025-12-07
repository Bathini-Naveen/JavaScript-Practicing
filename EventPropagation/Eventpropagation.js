let outer = document.getElementById("outer")
let inner = document.getElementById("inner")
 //!Event Bubbling Phase
outer.addEventListener("click",()=>{
    alert("outer box clicked 😄")
},false)
inner.addEventListener("click",()=>{
    alert("inner box clicked 😄")
},false)
//!Event Capturing Phase
outer.addEventListener("click",()=>{
    alert("outer box clicked 😄")
},true)
inner.addEventListener("click",()=>{
    alert("inner box clicked 😄")
},true)
// !Stop propagation
// outer.addEventListener("click",()=>{
//  alert("outer box clicked 😄")
// },false)
// inner.addEventListener("click",(e)=>{
//     e.stopPropagation()
//      alert("innerr box clicked 😄")
// },false)
