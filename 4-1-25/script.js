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
        <td><button onclick="edit(${e.id})">Edit</button></td>
        </tr>

        `
}).join(" ");
     console.log(data);
    let table=document.querySelector("#showdata");
    table.innerHTML=data;

}
showtable();


//data Deletion
function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{method: 'Delete'}).then(r=>alert("deleted!"))
}


//data insertion
function insert_data(){
    let data={
        id: document.querySelector("#input1").value,
        name: document.querySelector("#input2").value,
        city: document.querySelector("#input3").value
    }

fetch("http://localhost:3000/student",{
    method: "POST",
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(data)
}).then(r=>alert("date inserted"))
}
// function setdata(){
//     let data={
//         id: document.getElementById("input1").value,
//         name: document.getElementById("input2").value
//          city : document.getElementById("input3").value

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

//data edition

async function edit(id){
    let res =await fetch(`http://localhost:3000/student/${id}`);
    let data =await res.json();
    let edit_frm=`
    <input type="text" value="${data.id}" id="id1" ><br>
    <input type="text" value="${data.name}" id="name1" ><br>
    <input type="text" value="${data.city}" id="city1"><br>
    <input type="submit" value="Update" onclick="myupdate('${id}')">
    `
    document.querySelector("#editform").innerHTML=edit_frm

}

//updation

function myupdate(id){ 
  
    let update_data={
        id: document.querySelector("#id1").value,
        name: document.querySelector("#name1").value,
        city: document.querySelector("#city1").value
    }
    fetch(`http://localhost:3000/student/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(update_data)
    }).then(r=>alert("updated.........!!"))
}