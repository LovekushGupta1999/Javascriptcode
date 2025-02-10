function fun(){
    let head = document.getElementById("demo")
    head.classList.add('head')
}

function fun1(){
    let head = document.getElementById("demo")
    head.classList.remove('head')
}

function fun2(){
    let head = document.getElementById("demo")
    head.classList.toggle('head')
}

// local storage 
// local storage stores 5 to 7 mb data
// and it founds in our local browser

// four types
// set item 
// get item
// remove item
// clear

// localStorage.setItem("name","sudhanshu");
// localStorage.setItem("age",19);
// localStorage.setItem("city","itarsi");

// let age = localStorage.getItem("age");
// console.log(age);

// localStorage.removeItem("name");