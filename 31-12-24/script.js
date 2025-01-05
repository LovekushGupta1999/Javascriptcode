async function datafetching(){
    let url="https://jsonplaceholder.typicode.com/posts"
    let r= await fetch(url)
    let a = await r.json()
    let fdata = a.map((e)=>
    `<tr>
      <td> ${e.id} </td>
      <td> ${e.title} </td>
     </tr>
    `).join("")
     console.log(fdata);
    document.querySelector('#showdata').innerHTML=fdata
}

datafetching();
