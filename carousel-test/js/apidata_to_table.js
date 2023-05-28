fetch("https://falchhanssen.net/student/ProjectExam1/blog/wp-json/wp/v2/posts").then((data)=>{
    
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=` <tr>
        <td><a href="details.html?id=${values.id}">${values.title}</a></td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"></td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML=tableData;

    //const apiArray = [${values.id},${values.title}, ${values.description}, ${values.price}, ${values.category}, ${values.rating}, ${values.image}]
})

