let p = new Promise((resolve,reject)=>{
    let meet=false;
    if(meet){
                resolve("Promise got resolved")
    }
    else{
           reject("promise got Rejected")  
    }
})
console.log(p);
console.log(typeof p);
p.then((response)=>{
    console.log(response+" Lets go and have smothing");
})
.catch((error)=>{
    console.log(error+" Sorry i was bust at that moment");
})