const  array1=[10,20,30,40];
const array2 =new Array(1,2,3,4,5);
const array3= [];
array3[0]="BMW";
array3[1]="AUDI";
array3[2]="MARCEDIES";
console.log(array1);
console.log(array2);
console.log(array3);

console.log(array1.length);
console.log(array2.length);
console.log(array3.length);

const mixed=[1,2,"hello",{name:"john",age:45},[20,30,40]];
console.log(mixed[3].name);
console.log(mixed[4][0]);

let text="<ul>";
// for(let val of mixed){
// text+=`<li>${val}</li>`;

// }
// text+="</ul>";

document.getElementById("demo").innerHTML=text;
console.log(text);

array3.forEach(val=>{
    text+=val+" ";
    });
document.getElementById("demo").innerHTML=text;


const names=["sonu","akshay","mahi","anil","nitin"];
names.push="lovekush";
names.pop();
names.shift();
names.unshift="ketan";