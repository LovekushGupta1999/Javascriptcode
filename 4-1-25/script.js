// const { json } = require("fs");

async function showtable(){
    let url= "http://localhost:3000/student"
    let a= await fetch(url);
    let b = await a.json();
    let data= b.map((e)=>{
        return `
        <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.city}</td>
        <td><button onclick="mydelete(${e.id})">Delete</button></td>
        </tr>

        `
}).join(" ");
     console.log(data);
    let table=document.querySelector("#showdata");
    table.innerHTML=data;

}
showtable();

function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{method: 'Delete'}).then(r=>alert("deleted!"))
}
// function getdata(){
//     let data={
//         id: document.getElementById("input1").value,
//         name: document.getElementById("input2").value

//     }
//     const fs =require("fs");
//     var data1=fs.readFileSync("database.json");

//     var myobject=JSON.parse(data1);

//     myobject.push(data);

//     var newdata=JSON.stringify(myobject);
//     fs.writeFile("database1.json", newdata,(err)=>{
//         if(err)throw err;
//         console.log("new data added")
//     });
// }