
//using map method
fetch("https://fakestoreapi.com/products").then((data) => {
    console.log(data);
    return data.json(); //coverted to object
}).then((objData) => {
    console.log(objData[0].title); //single title print
    let tableData = "";
    objData.map((values) => {
        tableData += ` <tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td> 
    </tr>`; //using + print all value  and need image tag for show image oherwise it shows only link
    });
    document.getElementById("tBody").innerHTML = tableData; //when add + it show last record title
}).catch((error) => {
    console.log(error);
})




// async function task() {
//     try {

//         const response = await fetch("https://fakestoreapi.com/products");
//         const emps = await response.json();
//         return emps;
//     } catch (error) {

//         console.log(error);
//     }
// }
// task().then((res) => {
//     console.log(res);
// })
