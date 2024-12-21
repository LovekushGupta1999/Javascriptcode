function addition(){
    let num1=parseInt(document.getElementById("input1").value);
    let num2= parseInt(document.getElementById("input2").value);
    var result=num1+num2;
    document.getElementById("demo").innerHTML=result;
}

function subtraction(){
    let num1= parseInt(document.getElementById("input1").value)
    let num2= parseInt(document.getElementById("input2").value)
    var result=num1-num2;
    document.getElementById("demo").innerHTML=result;
    
}
function multiplication(){
    let num1= parseInt(document.getElementById("input1").value)
    let num2= parseInt(document.getElementById("input2").value)
    var result=num1*num2;
    document.getElementById("demo").innerHTML=result;
}
function display(){
    let name=document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML=name
    
}
//--------------------------------------------------------Hw----------------------------------------------------------------------------
function display(name){
    console.log(name);
    document.getElementById("demo").innerHTML=name;
    alert(name);

}

let userName="lovekush";
display(userName);

function displaymark(){
    let marks=parseInt(document.getElementById("myinput").value);
    document.getElementById("demo").innerHTML=marks;
    // console.log(marks);
    // alert(marks);

    
}
displaymark();
// function displayname(){
    let name=document.getElementById("myinput1").value;
    let age =parseInt(document.getElementById("myinput2").value);
    let course=document.getElementById("myinput3").value;
    document.getElementById("demo").innerHTML=name+age+course;
    
// }

function display(){
    let course1=document.getElementById("demo1");
    course1.innerHTML="this is coming from javascript";

}