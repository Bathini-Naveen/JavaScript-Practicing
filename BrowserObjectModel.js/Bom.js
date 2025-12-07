console.log(window)  
//!alert() 
let bom1=()=>{
    alert("THASMATH  JAGRATHAAAAA💀")
}
//!confirm()
let bom2=()=>{
    let answer=confirm("THAAGUTHAARA ?")
    console.log(answer);
}
//!CombiningAlert()AndConfirm()
let bom3=()=>{
   let answer= confirm("THAGUTHAARA")
   if(answer){
    alert("APPUDU AKKADA");
   }else{
    alert("ANDHUKU MEEKU ALAVATU LEDHAAAA")
   }
}
//!prompt()
let bom4=()=>{
    let num1=Number(prompt("ENTER A NUMBER"))
    let num2=Number(prompt("ENTER SECOND NUMBER"))
    console.log(num1+num2);
}
//!open()
let toBeClosed;
let bom5=()=>{
   toBeClosed= open("./Bom.html","_blank","height=300,width=700,top=250,left=300")
}
let bom6=()=>{
   toBeClosed.close()
}
// !outerHeight()And innerHeight()
console.log(`OUTERHEIGHT IS : ${outerHeight}`);
console.log(`INNERHEIGHT IS : ${innerHeight}`);

// !outerWidth()And innerWidth()
console.log(`OUTERWIDTH IS : ${outerWidth}`);
console.log(`INNERWIDTH IS : ${innerWidth}`);

//!WEB STORAGE SYSTEMS
//@SESSION STORAGE

// *setItem()
sessionStorage.setItem("name","Naveen")
sessionStorage.setItem("age",21)
sessionStorage.setItem("place","Huzurnagar")

// *getItem()
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("age"));
console.log(sessionStorage.getItem("place"));

// *removeItem()
sessionStorage.removeItem("name")

// *clear()
sessionStorage.clear();

// @LOCALSTORAGE

// *setItem()
localStorage.setItem("name","Nani")
localStorage.setItem("age",19)
localStorage.setItem("place","kodad")

// *getItem()
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("age"));
console.log(sessionStorage.getItem("place"));

// *removeItem()
sessionStorage.removeItem("name")

// *clear()
localStorage.clear();

//*forward()
let bom7=()=>{
    history.forward()
}
//*back()
let bom8=()=>{
    history.back()
}
//*go(forward)
let bom9=()=>{
    history.go(2)
}
//*go(back)
let bom10=()=>{
    history.go(-2)
}
// !LOCATION OBJECT
// *href
console.log(location.href);

// *reload()
let bom11=()=>{
    location.reload()
}
// *assign()
let bom12=()=>{
    location.assign("https://www.gogle.com/")
}
//*replace()
let bom13=()=>{
    location.replace("https://cricbuzz.com/")
}
//!NAVIGATOR OBJECT
// *LATITUDE AND LONGITUDE VALUES OF A USER
let bom14=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    })
}