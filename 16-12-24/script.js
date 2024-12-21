// const  array1=[10,20,30,40];
// const array2 =new Array(1,2,3,4,5);
// const array3= [];
// array3[0]="BMW";
// array3[1]="AUDI";
// array3[2]="MARCEDIES";
// console.log(array1);
// console.log(array2);
// console.log(array3);

// console.log(array1.length);
// console.log(array2.length);
// console.log(array3.length);

// const mixed=[1,2,"hello",{name:"john",age:45},[20,30,40]];
// console.log(mixed[3].name);
// console.log(mixed[4][0]);

// let text="<ul>";
// for(let val of mixed){
// text+=`<li>${val}</li>`;

// }
// text+="</ul>";

// document.getElementById("demo").innerHTML=text;
// console.log(text);

// array3.forEach(val=>{
//     text+=val+" ";
//     });
// document.getElementById("demo").innerHTML=text;


// const names=["sonu","akshay","mahi","anil","nitin"];
// names.push="lovekush";
// names.pop();
// names.shift();
// names.unshift="ketan";

// array3.map(val=>{
//     text+=val+"<br> ";
//     });
// document.getElementById("demo").innerHTML=text;

// const fruits=["apple","banana","kiwi","orange","straberry"];
// const extracted=fruits.slice(1,4);
// console.log(extracted);


// fruits.splice(2,3,"lemon","draganfruits");
// console.log(fruits);

// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// const number=[100,3,4549,45784,963852];
// number.sort(function(a,b){
//     return a-b;//sorting in ascending order
// })
// console.log(number);
// number.reverse();
// console.log(number);

// const newfruits=fruits.toString();
// console.log(newfruits);

// const joinArray=fruits.join(" ");
// console.log(joinArray);


const student=[
    {name:"lovekush", hindi:87,math:97,english:90,chamistry:97},
    {name:"ketan",  hindi:87,math:97,english:90,chamistry:97},
    {name:"sandip",  hindi:87,math:97,english:90,chamistry:97},
    {name:"sandip",  hindi:87,math:97,english:90,chamistry:97},
    {name:"sandip",  hindi:87,math:97,english:90,chamistry:97},

]

// function display(){
//     let table=`
//     <table border="1px" width="600px" bgcolor="lightblue"
//     <tr>
//     <th>name</th>
//     <th>course</th>
//     <th>city</th>
//     </tr>`;
//     student.map(function(y){
//         table+=`
//         <tr>
//         <td>${y.name}</td>
//         <td>${y.course}</td>
//         <td>${y.city}</td>
//         </tr>

//         `;
//     })
//     table+=`</table>`;
//     document.getElementById("demo").innerHTML=table;
// }

function display(){
    let table=`
    <table border="1px" width="600px" bgcolor="lightblue" font-transform="capitalize" color="white">
    <tr bgcolor="yellow"  >
    <th>name</th>
    <th>Hindi</th>
    <th>math</th>
    <th>english</th>
    <th>chamistry</th>
    <th >total</th>
    </tr>`;
student.map(function(y){
    table+=`
    <tr>
    <td>${y.name}</td>
    <td>${y.hindi}</td>
    <td>${y.math}</td>
    <td>${y.english}</td>
    <td>${y.chamistry}</td>
    <td>${y.hindi+y.math+y.english+y.chamistry}</td>
    </tr>

    `;
})
table+=`</table>`;
document.getElementById("demo").innerHTML=table;
}

// const actors=[
//     {name:"shahrukh khan", location:"mumbai"},
//     {name:"shahrukh khan", location:"mumbai"},
//     {name:"shahrukh khan", location:"mumbai"},
//     {name:"shahrukh khan", location:"mumbai"}
// ];

// function display(){
//     let table="<table border=1px>";
//      table+=` <tr>
//     <th>name</th>
//     <th>location</th>
//     </tr>`

//     actors.map(function(key){
//         table+=`<tr>
//         <td>${key.name}</td>
//         <td>${key.location}</td>
//         </tr>`
//     })
//     table+="</table>";
// document.getElementById("demo").innerHTML=table;

// }

// const number=[10, 24,345,3845,483,2284,395];
// const filteredNum=number.filter(function (num){
//     return num%2===0;
// })
// console.log(filteredNum);

// let d= new Date();
// console.log(d);
//year,month,date,hour,minute,second,millisecond
// d= new Date(2020,15,15,23,34,45,3000);
// d= new Date(2020,15,15,23,34,45);
// d= new Date(2020,15,15,23,34);
// d= new Date(2020,15,15,23);
// d= new Date(2020,15,15);
// d= new Date(2020,15);
// d= new Date(2020);//considered as milisecond 

// //const today =new date();
// const year=today.getFullYear();
// const days =today.getDay();

// function display_day(day){
//     switch(day){
//         case 0:document.body.innerHTML="sunday"
//         case 1:document.body.innerHTML="monday"
//         case 2:document.body.innerHTML="Tuesday"
//         case 3:document.body.innerHTML="wednessday"
//         case 4:document.body.innerHTML="thrusday"
//         case 5:document.body.innerHTML="friday"
//         case 6:document.body.innerHTML="saturday"
//     }
// }
// display_day(days);

//spread 

const numbers=[1,2,3,4,5,6,7];
const numbers1=[10,20,30];
const numbers2=[numbers,8,9,0,11,numbers1];
console.log(numbers2);
// const person={name:"harry potter",age:35};
// const person2={...person,location:"jabalpur",name:"jhon"}
// console.log(person2);

// function display(...a){
//     let result=0;
//     a.forEach(val=>{
//          result+=val;
//     })
//     return result;
// }
// console.log(display(10,20,30,40));
