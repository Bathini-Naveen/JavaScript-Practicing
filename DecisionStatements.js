// IF
let area1="lbnagar"
if(area1=="lbnagar"){
    console.log("AMMA THODU ADDANGA NARIKESTHAAAA");
}
// IF ELSE
let area2="dilsukhnagar"
if(area2=="lbnagar"){
    console.log("AMMA THODU ADDANGA NARIKESTHAAAA");
}
else{
    console.log("Debbalu paduthai");
}

// ELSE IF
let area3="saroornagar"
if(area3=="lbnagar"){
    console.log("okay njoy pandagoooooo");
}
else if(area3=="dilsukhnagar"){
    console.log("burrapaadu");
}
else if(area3=="sarrornagar"){
    console.log("mind minging");
}
else{
    console.log("mledhuuuuuuuu");
}

// SWITCH CASE
let food="chicken";
switch(food){
    case "mutton":console.log("mutton");
                 break;
    case "frawns":console.log("frawns");
                 break;
    case "fish":console.log("fish");
                 break;
    case "veg":console.log("veg");
                break;
    default:console.log("None of the above");
}


// SWITCH CASE EXAMPLE 2
let amount=150;
switch(true){
    case (amount>=350):console.log("PISTA HOUSE CHICKEN BIRYANI");
    break;
    case (amount>200 && amount<=300):console.log("RAGHAVENDRA VEG FRIED RICE");
    break;
    case (amount>100 && amount<=200):console.log("GO AND EAT TIFFINS");
    break;
    default:console.log("MOOSKONI KURCHOOO RA POOLA CHOKKA");
}