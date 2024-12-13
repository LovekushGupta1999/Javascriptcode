//Q1
let n1=parseInt(document.getElementById("input1").value);
let n2=parseInt(document.getElementById("input2").value);

let result=n1*n2;
document.getElementById("demo0").innerHTML=result;
console.log(result);
 result=n1/n2;
document.getElementById("demo6").innerHTML=result;
console.log(result);


//Q2

const evennumber=function(){
    let text1=" ";

    for(let i=1; i<=1000; ++i){
         if(i%2==0){
            text1+=i + " ";
document.getElementById("demo").innerHTML=text1;
// console.log(i);
              
         }}
}
const oddnumber=function(){
    let text1=" ";

    for(let i=1; i<=1000; ++i){
    if(i%2!==0){
        text1+=i+ " ";
        // console.log(i);

document.getElementById("demo5").innerHTML=text1;
    } 
    }
}

evennumber();
oddnumber();


//Q3
function color(){
   let colorchange= document.getElementById("body1");
   colorchange.style.backgroundColor="green";
}
function color1(){
    let colorchange= document.getElementById("body1");
    colorchange.style.backgroundColor="black";
 }

 function color2(){
    let colorchange= document.getElementById("body1");
    colorchange.style.backgroundColor="orange";
 }

 
//Q4

const fruits=["apple","banana","grapes","mango","kiwi"];
 let text=" ";
for(let fruit of fruits){
    // text+=<li>${fruit}</li>;
   text+=fruit + " " ;
}
// text+=</ul>;
document.getElementById("demo2").innerHTML=text;


//Q5

let max=prompt("enter max value");
let min=prompt("enter min value");
const randomnumber=(max,min)=>{
     let result1=Math.floor(Math.random()*(max-min+1)+min);
     console.log(result1);
}

randomnumber(max,min);



//Q6

function display(){
let name=document.getElementById("input3").value;
let password=document.getElementById("input4").value;
document.getElementById("demo3").innerHTML=name;
document.getElementById("demo4").innerHTML=password;
console.log(name);
console.log(password);



}
display();