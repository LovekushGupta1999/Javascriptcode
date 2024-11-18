// object literal

const person={
    name: "john",
    age: 30,
    city: "bhopal",
};

console.log(typeof (person));

//array
// number[]={1,2,3,4,5};
// console.log(number);
// console.log(number[0]);
// console.log(number[1]);

function sayhello(){
    console.log("hello everyone!");
    alert("hello");

}

//function calling
sayhello();

function addition(num1,num2)
{
    return num1+num2;
}

console.log(addition(20,30));
document.getElementById("demo").innerHTML=addition(45,55);

let number=34;

function cube(){
    return number*number*number;
}

console.log(cube());

//function expression

const multiply = function (x,y){
    return x*y;
}
 
console.log(multiply(5,8));
// arrow function
const divide =(a,b)=>{
    return a/b;
}

console.log(divide(200,100));

function arithmatic_op(a,b,c){
    let ch;
    switch(ch){
        case 1:return a+b+c;
        case 2: return a-b-c;
        case 3: return a*b*c;
        case 4: return (a/b)/c;
    }
}

console.log(arithmatic_op(20,10,5));

const display = (name , age)=>{
    console.log(name + " "+ age);
    document.getElementById("demo").innerHTML=name+ " "+ age;
}
username="love";
age=24;
display(username,age);