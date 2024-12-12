function validate(e){
    // to prevent tha default behavior  of form submission 
    e.preventDefault();
    //fetch input values
    let myname= document.getElementById("name").value;
    let myemail= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let confirmpassword= document.getElementById("cnfpassword").value;
    console.log(myname, myemail, password, confirmpassword);
    // validating the form
    if(myname==""||myemail==""||password==""||confirmpassword==""){
        alert("all input are required");
        return false;

    }
    if(password!==confirmpassword){
        alert("password does not match")
            return false;
        
    }
    alert("form submitted successfully");
}

let heading=document.getElementById("demo");
heading.innerHTML="this is javascript class";
function change(){
    heading.innerHTML="this is cpp class";
    heading.style.color="red";
    heading.style.backgroundColor="grey";
    heading.style.textAlign="center";


}
function calculate(){
    let n1=document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;
    let result = n1*n2;
    document.getElementById("demo1").innerHTML=result;
    
}

let width=prompt("enter width");
let height= prompt("enter height");

function areaofT(){
    let result=0.5*width*height;
    document.getElementById("demo1").innerHTML=result;
    

    

}
