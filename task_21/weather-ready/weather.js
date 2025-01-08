var q="amman";
async function checkWeather() {
let apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${q}&appid=a25a25335cdf8cf7ef7ce8e819c2f3b4` ;

          const response = await fetch(apiurl);
          const data = await response.json();

          const date = new Date(data.dt *1000);
          const formattedDate = date.toLocaleDateString("en-US");
          const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          document.getElementById("date").textContent = formattedDate;
          document.getElementById("day").textContent = days[date.getDay()];
         
          document.getElementById("city").innerHTML = data.name;
          document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
          document.getElementById("PRESSURE").innerHTML = data.main.pressure + " hPa";
          document.getElementById("humidity").innerHTML = data.main.humidity + " %";
          document.getElementById("temp").innerHTML =Math.round(data.main.temp )+"°C";
          document.getElementById("description").innerHTML = data.weather[0].description
          

      }
      checkWeather();

      function changeWeather(){
        let selc = document.getElementById("selc");
         if(selc.value == "Amman"){
            q="amman";
            
        }else if (selc.value == "London"){
            q="london";
        }else if (selc.value =="Paris"){
            q="paris"
        }
        checkWeather()
      }
    


























// document.addEventListener("DOMContentLoaded", function () {
//     let apiurl;

//     const selc = document.getElementById("selc");
//     function updateAPIURL() {
//         if(selc.value === "Amman") {
//             apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=amman&appid=a25a25335cdf8cf7ef7ce8e819c2f3b4";
//         } else if (selc.value === "Paris") {
//             apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris&appid=a25a25335cdf8cf7ef7ce8e819c2f3b4";
//         } else {
//             apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london&appid=a25a25335cdf8cf7ef7ce8e819c2f3b4";
//         }
//         checkWeather();
//     }
//     selc.addEventListener('change', updateAPIURL);
//     async function checkWeather() {
//         const response = await fetch(apiurl);
//         const data = await response.json();
//         const date = new Date(data.dt *1000);
//         const formattedDate = date.toLocaleDateString("en-US");
//         const day= date.toLocaleDateString();
//         const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         console.log(day);
//         document.getElementById("date").textContent = formattedDate;
//         console.log(data);
//         document.getElementById("day").textContent = days[date.getDay()]
//         document.getElementById("city").innerHTML = data.name;
//         document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
//         document.getElementById("PRESSURE").innerHTML = data.main.pressure + " hPa";
//         document.getElementById("humidity").innerHTML = data.main.humidity + " %";
//         document.getElementById("temp").innerHTML =Math.round(data.main.temp )+"°C";
//         document.getElementById("description").innerHTML = data.weather[0].description;
//     }
//     updateAPIURL();
// });
