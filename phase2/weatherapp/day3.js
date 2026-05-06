
let main = document.querySelector("#main");
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let cities= JSON.parse(localStorage.getItem("cities"))||[];
let historyDiv = document.querySelector("#history");
const apiKey = "6a0d5b6497a4a2b8177bb26cde3d571b";
async function getWeather(city){
    try{
        main.innerHTML= "";
        let loading = document.createElement("p");
        loading.textContent='loading';
        main.appendChild(loading);
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if(!response.ok){
           main.removeChild(loading);
           let errorMsg = document.createElement("p");

            if (response.status === 404) {
                errorMsg.textContent = "City not found";
            } else {
                errorMsg.textContent = "Something went wrong";
            }

            main.appendChild(errorMsg);
            return; // stop execution
        }
        let data = await response.json();
        main.removeChild(loading);
        console.log(data);
        saveCity(city);
        renderHistory();
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        p1.textContent= `temperature:${data.main.temp}`;
        p2.textContent=  `city:${data.name}`;
        p3.textContent=  `weather description:${data.weather[0].description}`;
        p4.textContent=   `humidity:${data.main.humidity}`;
        p5.textContent=   `windspeed:${data.wind.speed}`;
        main.appendChild(p1);
        main.appendChild(p2);
        main.appendChild(p3);
        main.appendChild(p4);
        main.appendChild(p5);
    }
    catch(error){
        main.innerHTML="<P>check ur internet</P>";
    }
}
btn.addEventListener("click",()=>{
        let city = input.value;
        main.innerHTML= "";
        if(city!==""){
            getWeather(city);
            input.value="";
        }
        });
input.addEventListener("keydown",(e)=>{
            if(e.key==="Enter"){
               let city = input.value;
               main.innerHTML= "";
                if(city!==""){
                  getWeather(city);
                   input.value="";
                }
            }
        });
function saveCity(city){
    cities=cities.filter(c=>c.toLowerCase()!== city.toLowerCase());
    cities.unshift(city);
    if(cities.length>5){
        cities.pop();
    }
    localStorage.setItem("cities", JSON.stringify(cities));
}
function renderHistory(){
    historyDiv.innerHTML= "";
    cities.forEach((city)=>{
         let historyBtn = document.createElement("button");

        historyBtn.textContent = city;

        historyBtn.addEventListener("click", ()=>{
            getWeather(city);
        });

        historyDiv.appendChild(historyBtn);
    });
}
renderHistory();
