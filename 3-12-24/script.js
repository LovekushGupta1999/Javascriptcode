function oddnumber(){
    for(i=0; i<=10; ++i){
        if(i/2!==0){
            console.log(i);
        }
    }
}
function evennumber(){
    for( i=0; i<=10; i=i+2){
      console.log(i); 
    }
}
function oddnumber(){
    for( i=1; i<=10; i=i+2){
      console.log(i); 
    }
}
evennumber();
oddnumber();
let text="";
let y=1;
while(y<=10){
    text+=`the number is ${y}<br>`;
    y++;
}
document.getElementById("demo").innerHTML=text;

// function pattern(){
//     for(let i=1; i<=5; ++i)
// {
//     for(let j=1; j<=5; ++j){
//         if(i==1||i==5||j==1||j==5){
//             console.log("*");
//         }
//         else{
//             console.log(" ");
//         }
//     }
//     console.log("\n");
// }}


// function pattern(){
//     for(let i=1; i<=5; ++i)
// {
//     for(let j=1; j<=i; ++j){
//         document.getElementById("demo").innerHTML="*";
//     }
//     document.getElementById("demo").innerHTML="\n";
// }}

function pattern(){
    for(let i=1; i<=5; ++i)
{      let text=" ";
    for(let j=1; j<=5; ++j){
        if(j>i){
        text+="*";
        }
        else{
       text+=" ";

        }
    }
    document.getElementById("demo").innerHTML=text;
}}
pattern();
