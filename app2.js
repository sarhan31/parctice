const url=" https://official-joke-api.appspot.com/random_joke";
const setuppara = document.querySelector("#setup");
const punchlinepara = document.querySelector("#punchline");
const btn = document.querySelector("#btn");

const getfact = async ()=>{
    console.log("fetching data ....");
    let response=await fetch(url);
    console.log(response);
    let data =await response.json();
    console.log(data);
    setuppara.innerText = data.setup;
    punchlinepara.innerText = data.punchline;
    
}
btn.addEventListener("click",getfact);