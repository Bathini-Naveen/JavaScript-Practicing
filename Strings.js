//! 1) Literal way
let str1="Javascript"
let str2='Hyderabad'
console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

//!2) Constructor Object
let str3=new String('Anything')
console.log(str3);
console.log(typeof str3);

//!3) String Interpolation or Template Strings
let firstName=`Bathini`
let lastName=`Naveen`;
let age=21;
console.log(`My name is ${firstName} ${lastName} and My age is ${age}`);

//! ACCESSING THE CHARACTERS OF A STRING
let str4="BIRYANI"
console.log(str4[0]);
console.log(str4[5]);
console.log(str4[8]);
console.log(str4[-1]);

//! LENGTH
console.log(str4.length);

//! METHODS

//! 1)charAt(index)
let str5="MOBILE"
console.log(str5.charAt(0));
console.log(str5.charAt(5));
console.log(str5.charAt(7));
console.log(str5.charAt(-5));

//! 2)charcodeAt(index)
let str6="abc"
console.log(str6.charCodeAt(0));
console.log(str6.charCodeAt(2));

//! 3)toUpperCase and toLowerCase
let str7="SoMeThInG";
console.log(str7.toUpperCase());
console.log(str7.toLowerCase());

//!4) repeat(count)
let str8="chai"
console.log(str8.repeat(4));

//! 5)Concat(...String)
let str9="HTML"
let str10="CSS"
let str11="JAVA SCRIPT"
console.log(str9.concat(" ",str10," ",str11)); //HTML CSS JAVA SCRIPT

//! 6)replace(oldString,newString) AND replaceAll(oldString,newString) 
let str12="I love you Only you"
console.log(str12.replace("you","myself")); //I love myself Only You
console.log(str12.replaceAll("you","myself")); //I love myself Only myself

//! 7)split(Separator)
let str13="NAGACHAITANYA😍SAMANTHA"
console.log(str13.split("😍")); // ['NAGACHAITANYA', 'SAMANTHA']
console.log(str13.split("h")); //['NAGACHAITANYA😍SAMANTHA']

//! 8)includes(searchString,startIndex)
let str14="Market"
console.log(str14.includes("a")); //true
console.log(str14.includes("z")); //false
console.log(str14.includes("r",0)); //true
console.log(str14.includes("e",-100)); //true

//! 9)slice(startIndex,endIndex)
let str15="JAVASCRIPT"
console.log(str15.slice(2)); //VASCRIPT
console.log(str15.slice(2,6));  //VASC
console.log(str15.slice(-6,-3));  //SCR
console.log(str15.slice(4,-1));  //SCRIP
console.log(str15.slice(8,2));  //emptystring

//! 10)substring(startIndex,endIndex)
let str16="JAVASCRIPT"
console.log(str16.substring(2));  //VASCRIPT
console.log(str16.substring(2,6));  //VASC
console.log(str16.substring(-6,-3));   //emptystring
console.log(str16.substring(4,-1)); //JAVA
console.log(str16.substring(8,2));  //VASCRI

