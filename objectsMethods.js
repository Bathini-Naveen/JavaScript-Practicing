//! random()
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.round(Math.random()*10));
console.log(Math.trunc(Math.random()*10));
console.log(Math.ceil(Math.random()*10));  //1-10
console.log(Math.floor(Math.random()*10));  //0-9

//!NOTE:
//TO GENERATE RANDOM VALUES BETWEEN A SPECIFIC RANGE USE THE BELOW FORMULA
//MATH.random()*(endRange-startRange)+startRange
//400-420
console.log(Math.round(Math.random()*(420-400)+400));

//! DATE OBJECT
let date=new Date()
console.log(date);
//! DATE METHODS
console.log(date.toDateString());  //Sat May 24 2025 18:30:03 GMT+0530 (India Standard Time)
console.log(date.getDate());  //Sat May 24 2025
console.log(date.getMonth());  //4
console.log(date.getFullYear());  //2025
console.log(date.getDay());  //Sat

//! TIME OBJECT
console.log(date.toTimeString());  //18:33:00 GMT+0530 (India Standard Time)
console.log(date.getHours()); //18
console.log(date.getMinutes());  //33
console.log(date.getSeconds());  //38
console.log(date.getMilliseconds());  //822

//! SET METHODS
date.setDate(18);
date.setMonth(10);
date.setFullYear(2003);
console.log(date);  //Tue Nov 18 2003 18:34:06 GMT+0530 (India Standard Time)

