console.log("hello");
let targetButton=document.querySelector("#button");
let div = document.querySelector("#output");
let input= document.querySelector("#input");
let toggle = document.querySelector("#darkmode");
let add = document.querySelector("#add");
let todo=document.querySelector("#todo");

let ul = document.querySelector("#todoList");
let p=document.createElement("p");
console.log(targetButton);
let count=0;
targetButton.addEventListener("click",()=>{
    count++;
    div.textContent=count;
    
})
input.addEventListener("input",(e)=>{
p.textContent=e.target.value;
})
document.body.appendChild(p);
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("darkmode");
})
add.addEventListener("click",()=>{
 let li = document.createElement("li");
 let value=todo.value;
 li.textContent=value;
 ul.appendChild(li);
todo.value="";   
})
ul.addEventListener("click",(e)=>{
    console.log(e.target);
    e.target.classList.toggle("crossline");
})


