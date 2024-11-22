const display1=()=>{
    alert("javascript class");

}
let button=document.getElementById("btn");
//when ever you pass a function as an argument to a function never use ()
button.addEventListener("click",display1);

//we can call regular function  before declaration but not arrow function and function expression

function display(){
    alert("javascript class");
}

button.addEventListener("mouseover",function(){
    console.log("hello from mouseover event")
});

let h1=document.querySelectorAll("h1");
console.log(h1);
h1[0].innerHTML="hello";
h1[0].style.color="red";
h1[1].innerHTML="hello in second tag";
