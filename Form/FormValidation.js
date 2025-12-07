let form=document.querySelector("form")
// console.log(form);

form.addEventListener("submit",
    (e)=>{
e.preventDefault() //this method is used to prevent automactic reload of a webpage when we click on register button
let name=document.getElementById("name")
let nameFieldValue = document.getElementById("name").value;
let nameFieldErrorMessage = document.getElementById("nameFieldErrorMessage")

let phone = document.getElementById("phone")
let phoneFieldValue = document.getElementById("phone").value;
let phoneFieldErrorMessage = document.getElementById("phoneFieldErrorMessage")

let password = document.getElementById("password")
let passwordFieldValue = document.getElementById("password").value;
let passwordFieldErrorMessage = document.getElementById("passwordFieldErrorMessage")

let cpassword = document.getElementById("cpassword")
let cpasswordFieldValue = document.getElementById("cpassword").value;
let cpasswordFieldErrorMessage = document.getElementById("cpasswordFielddErrorMessage")

// console.log(nameFieldValue);
// console.log(phoneFieldValue);
// console.log(passwordFieldValue);
// console.log(cpasswordFieldValue);

// !NameFieldValidation
if(nameFieldValue.length < 3 || nameFieldValue.length > 10){
    nameFieldErrorMessage.innerText = "Please Enter the Valid Name"
    name.style.border="1px solid black"
}

// !PhoneFieldvalidation
let result = isNaN(phoneFieldValue)
if(phoneFieldValue.length != 10 || result){
   // console.log("Hii");
   phoneFieldErrorMessage.innerText = "Please enter a valid Phone number"
   phone.style.border="1px solid red"
}
else{
    phoneFieldErrorMessage.innerText=""
   phone.style.border="1px solid black"

}

// !passwordFieldvalidation
if(cpasswordFieldValue != passwordFieldValue){
    cpasswordFieldErrorMessage.innerText="Please Enter valid Password"
    cpassword.style.border="1px solid red"
}
else{
    cpasswordFieldErrorMessage.innerText=""
    cpassword.style.border="1px solid black"

}
let eye = document.getElementById("eye")
// console.log(eye);
let password1 = document.getElementById("password")
let password_visble = false;
eye.addEventListener("click",()=>{
    console.log("eteyeu");
    if(password_visble){
        password1.type="password"
        password_visble=false
    }
    else{
        password1.type ="text"
        password_visble=true
    }
})

    })