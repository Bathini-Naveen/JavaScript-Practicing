// 1)LITERAL WAY
let bioData1={
    name:"Sahith",
    age:21,
    isMarried:false,
    exGirlFriends:undefined,
    kids:null,
    skills:["dancer","Singing","Badhakam"],
    fun:()=>{
        console.log("Chintu Model");
    },
    place:{
        area:"bnreddy",
        state:"Telangana",
    },

};
// 2)Constructor Object
let bioData2=new Object();
bioData2.name="Urmil";
bioData2.age=21;
bioData2.isMarried=false;
bioData2.exGirlFriends=undefined;
bioData2.kids=null;
bioData2.skills=["Dancer","barreSinger","PedhaManishi"]
bioData2.fun=()=>{
    console.log("Nadargul Model");
};
bioData2.place={
    area:"Nagole",
    state:"Telangana",
};

// ACCESSING THE PROPERTIES OF AN OBJECT
// 1)DOT NOTATION
console.log(bioData1.name);  //sahith
console.log(bioData2.skills);  // ['Dancer', 'barreSinger', 'PedhaManishi']
bioData1.fun()  //Chintu Model
console.log(bioData2.place.state);  //Telangana

// 2)BOX NOTATION
console.log(bioData1["name"]);  //sahith
console.log(bioData2["skills"]);  // ['Dancer', 'barreSinger', 'PedhaManishi']
bioData1["fun"]()  //Chintu Model
console.log(bioData2["place"]["state"]);  //Telangana