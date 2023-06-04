const inputbox = document.getElementById('inputbox');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.getElementById('weather_img');
const temperature = document.getElementById('temperature');
const details = document.getElementById('details');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const weather_body = document.getElementById('weather_body');
const no_location = document.getElementById('no_location');

async function checkweather(city) {
    const api_key = "3e5066fd3f291cd7bfcf665fdff1ca9b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    if(weather_data.cod==404){
        weather_body.style.display='none';
        no_location.style.display='flex';
        return;
    }
     
    weather_body.style.display='initial';
    no_location.style.display='none';

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    details.innerHTML=`${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed} Km/h`;

    pressure.innerHTML = `${weather_data.main.pressure/1000} atm`;

    visibility.innerHTML = `${weather_data.visibility} m`;

    switch(weather_data.weather[0].description){
        case 'clear sky':
            weather_img.src='./assets/sun.png'
            break;
        case 'haze':
            weather_img.src='./assets/partially_cloudy .png'
            break;
        case 'rain':
            weather_img.src='./assets/rain.png'
            break;
        case 'windy':
            weather_img.src='./assets/wind.png'
            break;
        case 'snow':
            weather_img.src='./assets/snow.png'
            break;
        case 'overcast clouds':
            weather_img.src='./assets/snowstorm.png'
            break;
    }
};

searchbtn.addEventListener('click', () => {
    checkweather(inputbox.value);
});

const mode= document.getElementById('mode');
const contain= document.getElementById('contain');


mode.addEventListener('click', () => {
    myFunction();
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    contain.classList.toggle("grey");
    mode.classList.toggle("white");
  }