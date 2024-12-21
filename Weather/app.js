const apiKey = "733262561b0ad25cfffc809746c21bd7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search input');
const searchBtn = document.querySelector('.searchBtn');
const weatherIcon = document.querySelector('.weatherIcon');
const temp = document.querySelector('.temp');
const cityName = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weather = document.querySelector('.weather');
const feel = document.querySelector('.feel');
const pressure = document.querySelector('.pressure');

async function checkWeather(city){
    
    const response = await fetch(apiUrl + city+`&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector('.error').style.display = 'block';
        weather.style.display = 'none';
    }else{
        var data = await response.json();
        console.log(data);
        
        const type  = data.weather[0].main;
        weather.style.display = 'block';
        if(type == "Clear"){
            weatherIcon.src = "./img/Clear.png";
        }else if(type == "Cloud"){
            weatherIcon.src = "./img/Clouds.png";
        }else if(type == "Rain"){
            weatherIcon.src = "./img/Rain.png";
        }else if(type == "Drizzle"){
            weatherIcon.src = "./img/Drizzle.png";
        }else if(type == "Mist"){
            weatherIcon.src = "./img/Mist.png";
        }else if(type == "Haze"){
            weatherIcon.src = "./img/Haze.png";
        }
        temp.innerHTML =Math.round(data.main.temp) + '°C';
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity+'%';
        wind.innerHTML = data.wind.speed +"km/h";
        feel.innerHTML = Math.round(data.main.feels_like) + '°C';
        pressure.innerHTML = Math.round(data.main.pressure) + 'p';

    }
    
}
searchBtn.addEventListener('click', () =>{
    checkWeather(search.value);
});
