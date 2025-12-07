// console.dir(document);
// !ACCESSING THE ELEMENTS
//!1)DIRCET ACCESS
// console.log(document.all);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.images);
// console.log(document.links);
// console.log(document.forms);
// console.log(document.h1);
// console.log(document.button);

// !2)INDIRECT ACCESS
// *1)getElementsById()
// let h1 = document.getElementById("heading")
// console.dir(h1);
// h1.style.color="white";
// h1.style.backgroundColor="yellow";

// let btn=document.getElementById("btn")
// console.dir(btn);
// btn.style.color="white";
// btn.style.backgroundColor="seagreen";
// btn.style.padding="15px 50px";
// btn.style.border="none";
//*2)getElementsByClassName()
// let poster = document.getElementsByClassName("poster")
// console.log(poster);
// for(let i=0; i<poster.length; i++){
//     poster[i].style.border="5px solid red";
//     poster[i].style.borderRadius="2px";
// }
// // *3)getElementsByTagName()
// let anchors = document.getElementsByTagName("a")
// console.log(anchors);
// for(let i=0; i<anchors.length; i++){
//     anchors[i].style.border="5px solid green"
//     anchors[i].style.fontSize="35px"
// }
// *4)getElementsByName()
// let passwordField = document.getElementsByName("password")
// console.log(passwordField);
// for(let i=0; i<passwordField.length; i++){
//     passwordField[i].style.padding="10px 150px"
//     passwordField[i].style.backgroundColor="green"
//     passwordField[i].style.color="white"
// }
// *5)querySelector()
// #ID
// let heading1 = document.querySelector("#heading")
// console.log(heading1);
// heading1.style.color="red"
// // #CLASS()
// let poster1 = document.querySelector(".poster")
// // console.log(poster1);
// poster1.style.borderRadius="50%";
// // #TAGNAME
// let anchor1 = document.querySelector("a")
// console.log(anchor1);
// anchor1.style.fontSize="40px"
// // *6)querySelectorAll()
// // #ID
// let heading2 = document.querySelectorAll("#heading")
// // console.log(heading2);
// for(let i=0; i<heading2.length; i++){
//     heading2[i].style.backgroundColor="black";
// }
// // #CLASS()
// let poster2 = document.querySelectorAll(".poster")
// // console.log(poster2);
// for(let i=0; i<poster2.length; i++){
//     poster2[i].style.border="15px solid purple";
// }
// // #TAGNAME
// let anchor2 = document.querySelectorAll("a")
// console.log(anchor2);
// for(let i=0; i<anchor2.length; i++){
//     anchor2[i].style.border="10px solid red";
// }
// !WRITE() AND WRITELN()
// // *WRITE()
// document.write("Hello Monty Uncle");
// document.write("<h1>GOOD EVENING</h1>");
// // #DIFFERENCE
// document.write("EE SAALA CUP NAMDE")
// document.write("EE SAALA CUP NAMDE")
// // *WRITELN()
// document.writeln("Hello Monty Uncle")
// document.writeln("<h1>GOOD EVENING</H1>")
// //#DIFFERENCE
// document.writeln("EE SAALA CUP NAMDE")
// document.writeln("EE SAALA CUP NAMDE")

// // !Access The text content written between the tags
// let heading = document.getElementById("rcb");
// console.log(heading);
// console.log(`innerText: ${heading.innerText}`);
// console.log(`textContent: ${heading.textContent}`);
// console.log(`innerHTML: ${heading.innerHTML}`);

// !setting the textContent
// let container = document.querySelector("#container")
// let setTheContent = ()=>{
//     container.innerText = `HELLO FROM INNERTEXT`
//     container.textContent = `HELLO FROM TEXTCONTENT`
//      container.innerHTML = `<h1 style=color:white;background-color:green;>HELLO FROM INNERHTML</h1><p>avahrahfhjadfjdjfdjfbdsknfdbsnbjdnfbndbfnj
//      hjdbjxdngxngkxbnvcxnvbnxc vnmcxnbncx vmcxnbbnxfbgfxbgfnxv nbcx vncxbj</p>`
// }

//!Getting the attributes
// let heading = document.querySelector("h1")
// console.log(heading);
// // !getattribute()
// console.log(heading.getAttribute("id"));//something
// console.log(heading.getAttribute("class"));//nothing
// console.log(heading.getAttribute("title"));//everything
// !getAttribueNode()
// console.log(heading.getAttribute("id"));//id="something"
// console.log(heading.getAttribute("class"));//class="nothing"
// console.log(heading.getAttribute("title"));//title="everything"
// //!Setting the attributes
// let para = document.querySelector("p")
// console.log(para);
// !Settingattribute
// para.setAttribute("id","pavan")
// para.setAttribute("class","monty")
// para.setAttribute("title ","asnan")
// para.setAttribute("rahul","Web Tech")

// // !Removing the Attributes
// let heading = document.querySelector("h1")
// let removingAttributes = ()=>{
//     heading.removeAttribute("title")
//     heading.removeAttribute("class")
//     heading.removeAttribute("id")
// }
// // !Accessing all the Attributes
// console.log(heading.attributes);

// // !Determining all  the className
// console.log(heading.className);

// !CLASSLIST
// let para=document.querySelector("p")
// console.log(para);
// let dealWithClass = ()=>{
//     para.classList.add("Naveen","sai","jaggu","Surya")
//     para.classList.remove("jaggu","Surya")
//     para.classList.toggle("Monty")
//    console.log( para.classList.contains("sai"));
//    console.log( para.classList.contains("Monty"));
//    console.log(para.classList.item(1));
//    console.log(para.classList.item(2));
//    console.log(para.classList.length);
// }

// !createElemnet()
// let marquee = document.createElement("marquee")
// console.log(marquee);
// let para = document.createElement("p")
// console.log(para);
// let btn = document.createElement("button")
// console.log(btn);

// //! createTextNode()
// let marqueeText=document.createTextNode("This is h1 text")
// console.log(marqueeText);
// let pText =  document.createTextNode("This is para Text")
// console.log(pText);
// let btnText = document.createTextNode("click")
// console.log(btnText);

// // !createComments
// let comment = document.createComment("This is a Comment created by using DOM")
// console.log(comment);

// // !appendChild() this will take ony one child as a parameter
// marquee.appendChild(marqueeText)
// para.appendChild(pText)
// btn.appendChild(btnText)

// // !append()
// // h1.append(h1Text,pText,btnText)
// // para.append(pText)
// // btn.append(btnText)

// // !Displaying content on UI
// let bodyTag = document.body
// bodyTag.append(marquee,para,btn)

// !insertBefore
let shalini = document.getElementById("shalini")
let shivani = document.getElementById("shivani")
let sandhya = document.getElementById("sandhya")
// console.log(shalini);
// console.log(shivani);
// console.log(sandhya);

let parent = document.body
// parent.insertBefore(sandhya,shalini)
 parent.insertBefore(shivani,shalini)

// //!childNodes and children
// let body = document.body
// //!childNodes
// console.log(body.childNodes);
// //!children
// console.log(body.children);
