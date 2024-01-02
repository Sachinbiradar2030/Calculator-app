let inputbox=document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");
 
let string="";
buttons.forEach(ele=>{
    ele.addEventListener("click",(b)=>{
        // console.log(b.target.innerText)
       if(b.target.innerText=="="){
        string=String(eval(string));
        inputbox.value=string;
       }
       else if(b.target.innerText=="AC"){
        string="";
        inputbox.value=string;
       }
       else if(b.target.innerText=="DEL"){
        string=string.substring(0,string.length-1);
        inputbox.value=string;
       }
       else{
     string+=b.target.innerText;
        inputbox.value=string;
       }
    })
})
let calculator=document.querySelector(".calculator");
let b=document.createElement("h1");
b.innerHTML="Calculator App";
calculator.prepend(b);