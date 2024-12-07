let header = `template literal`;
let tags=["template literal","javascript","be6e"];
let text= `<h2>${header}<h2><ul>`;

for(let x of tags){
    text+= `<li>${x}<li>`;

}
text +=`</ul>`;
document.getElementById("container").innerHTML=text;



const number=[23,45,74,78];
number.forEach(calculate);
function calculate(y){
    console.log(y*100);
}