let res =  fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((value)=>{
console.log(value);
let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.classList.add("row","m-3");
container.append(row)
document.body.append(container);


// let divi = document.createElement("div");
// divi.setAttribute("class","col-4");

for(let i =0;i<value.length;i++)
{
  

    let div = document.createElement("div");
    div.classList.add("div","m-3")
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${value[i].name}</h5>
    <img src="${value[i].flags.png}" class="card-img-top" alt="...">
    <div>Capital:${value[i].capital}</div>
    <div>Region:${value[i].region}</div>
    <div>Country-Code:${value[i].alpha3Code}</div>
     <a href="https://api.openweathermap.org/data/2.5/weather?q=${value[i].name}&appid=721c0db583c897dfe90fd7fad5f12c8f" class="card-link" target="_blank">Click here for weather</a>
    </div>
    
    </div>`;

    let button = document.createElement("button");
    button.addEventListener("click",fun);
    button.innerHTML="Clickhere"
    div.append(button);
row.append(div);
  
}
});

//  <button onclick=${fun(value[i].name)}>Click here for weather</button>
// <br><span id="span"></span>



function fun(name){
  let weather=fetch(`https://api.openweathermap.org/data/2.5/weather?q=japan&appid=721c0db583c897dfe90fd7fad5f12c8f`)
  weather.then((data)=>data.json()).then((we)=>{
  fu(we);});}

function fu(we){
  let span=document.getElementById("span");
  span.innerHTML=we.main.temp;
}





