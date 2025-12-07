//!Click
let h1 = document.getElementById("heading")
h1.addEventListener("click",()=>{
    h1.style.color="white"
    h1.style.background="purple"
    h1.style.textAlign="center"
})
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    btn.style.color="white"
    btn.style.background="green"
})

//!Dblclick
let textarea = document.querySelector('textarea')
textarea.addEventListener('dblclick',()=>{
    textarea.style.color="white"
    textarea.style.background="orange"
})

// !mouseenter AND mouseleave
let h2 = document.getElementById("heading2")
//!mouseenter
h2.addEventListener("mouseenter",()=>{
    h2.style.color="white"
    h2.style.background="black"
})
//!mouseleave
h2.addEventListener("mouseleave",()=>{
    h2.style.color="green"
    h2.style.background="yellow"
})
// !mousemove
let textArea = document.getElementById("textArea")
textArea.addEventListener("mousemove",()=>{

    let red =  Math.round(Math.random()*225)
    let green =  Math.round(Math.random()*225)
    let blue =  Math.round(Math.random()*225)

    textArea.style.background=`rgb(${red},${green},${blue})`
})


//!input and change
let inputField = document.getElementById("inputField")
// !input
inputField.addEventListener("input",()=>{
    let red = Math.round(Math.random()*255)
        let green= Math.round(Math.random()*255)
            let blue = Math.round(Math.random()*255)

            inputField.style.color="white"
            inputField.style.background=`rgb(${red},${green},${blue})`
})
// !change
inputField.addEventListener("change",()=>{
    inputField.style.height ="100px"
    inputField.style.width="300px"
})