// The Fetch Api provides an interface for fetching (sending/receiving) resources.

// It uses Request and Response objects.

// The fetch() method is used to fetch a resource (data).


const URL = "https://cat-fact.herokuapp.com/facts"; 
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn")

const getFacts = async () => {
    let response= await fetch(URL);
    console.log(response);     // JSON format
    let data = await response.json()
    factPara.innerText = data[0].text;
}


// using promise
// function getFacts(){
//     fetch(URL).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data[3].text;
//     })
// }

btn.addEventListener('click',getFacts);
