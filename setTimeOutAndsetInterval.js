 // !setTimeOut
// setTimeout(()=>{
//     console.log("Chaala Pakadbandhiga Plan Chesav Mike");
// },2000)
// !setInterval
// setInterval(()=>{
//     document.writeln("<sup>GUNDU</sup><sub>monty</sub>");
// },1000)
// !clearTimeOut
// setTimeout(()=>{
//     clearTimeout(killHim)
//     document.writeln("<h1>WE WILL TAKE M0NTY SIR AND KILL HIM 🔫 TOMORROW</h1>")
// },3000)

// let killHim=setTimeout(()=>{
//     document.writeln("<h1>SHOOT 🔫 AT RAHUL SIR</h1>")
// },5000)
// //!clearInterval
let count=0;
let meetings=setInterval(()=>{
    document.writeln("<h1>Samosa Thintava Shireesha</h1>")
count++;
if(count==5){
    clearInterval(meetings)
    document.writeln("<h1>Vadhule Jagadeesh Sarojaki Ivvu</h1>")
}
},1000)