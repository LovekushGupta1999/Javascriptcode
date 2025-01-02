async function datafetching() {
    let url="https://jsonplaceholder.typicode.com/posts"
    let r= await fetch(url)
    let a = await r.json()
    let showdata=document.querySelector("#showdata");
    let fdata= a.map((e)=>{
        `<tr>
            <td>${e.di}</td>
            <td>${e.title}</td>
        </tr>`
    }).join("");
    showdata.innerHTML=fdata;
}

datafetching();
