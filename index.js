fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{return data.json();})
.then((objectData)=>{console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`  <tr>
        <td>${values.id}</td>
        <th scope="row">${values.name}</th>
        <td>${values.username}</td>
        <td>${values.email}</td>
        
      </tr>
      `;
    })
    document.getElementById("table_body").
    innerHTML=tableData
})
.catch((err)=>{
    console.log(err);
})


   