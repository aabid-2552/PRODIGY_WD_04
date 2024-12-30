
const apiKey = "f513d62616992f3e7639fe5ac5851f18";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
   
   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";

   }
   else{

    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud1.jpeg";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.jpg";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain1.jpeg";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle1.jpeg";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist1.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

   }
   
   

}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})
