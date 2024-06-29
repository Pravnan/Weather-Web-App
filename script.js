const apiKey = "1e99b88d4efddec663f0680c153d88cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
    var data = await response.jason();

    console.log(data);

    document.querySelector(" .city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(" .humidity").innerHTML = data.wind.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";




}

checkWeather();
