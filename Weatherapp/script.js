const container = document.querySelector('.container');
const search = document.querySelector('.searchbox button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404=document.querySelector('.not-found')
const cityHide=document.querySelector('.city-hide')

search.addEventListener('click', () => {
    const APIKey = '60a5e8bf460543f264230d172dab6c23';
    const cityInput = document.querySelector('.searchbox input');
    const city = cityInput.value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => {
            return response.json();
        })
        .then(json => {
            if (json.cod === '404') {
                cityHide.textContent=city;
                container.style.height = '400px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                error404.classList.add('active');
            } 
               
                const image = document.querySelector('.weather-box img');
                const temperature = document.querySelector('.weather-box .temperature');
                const description = document.querySelector('.weather-box .description');
                const humidity = document.querySelector('.weather-details .humidity span');
                const wind = document.querySelector('.weather-details .wind span');
                if(cityHide.textContent==city){
                    return;
                }
                else{
                    cityHide.textContent=city;
                    container.style.height = '600px';
                    container.classList.add('active');
                    weatherBox.classList.add('active');
                    weatherDetails.classList.add('active');
                    error404.classList.remove('active');
    
                setTimeout(() => {
                    container.classList.remove('active');
                }, 2500);

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = 'images/clear.png';
                        break;
                    case 'Rain':
                        image.src = 'images/rain.png';
                        break;
                    case 'Snow':
                        image.src = 'images/snow.png';
                        break;
                    case 'Clouds':
                        image.src = 'images/cloud.png';
                        break;
                    case 'Mist':
                        image.src='images/mist.png';
                        break;
                    case 'Haze':
                        image.src = 'images/mist.png';
                        break;
                    default:
                        image.src = 'images/cloud.png';
                }

                temperature.textContent = `${json.main.temp} °C`;
                description.textContent = json.weather[0].description;
                humidity.textContent = `${json.main.humidity}%`;
                wind.textContent = `${json.wind.speed} km/hr`;
                const infoWeather=document.querySelector('.info-weather');
                const infoHumidity=document.querySelector('.info-humidity');
                const infoWind=document.querySelector('.info-wind');
                const elcloneinfoWeather=infoWeather.cloneNode(true);
                const elcloneinfoHumidity=infoHumidity.cloneNode(true);
                const elcloneinfoWind=infoWind.cloneNode(true);
                elcloneinfoWeather.id='clone-info-weather';
                elcloneinfoWeather.classList.add('active-clone');
                elcloneinfoHumidity.id='clone-info-humidity';
                elcloneinfoHumidity.classList.add('active-clone');
                elcloneinfoWind.id='clone-info-wind';
                elcloneinfoWind.classList.add('active-clone');
                
setTimeout(()=>{
infoWeather.insertAdjacentElement("afterend",elcloneinfoWeather);
infoHumidity.insertAdjacentElement("afterend",elcloneinfoHumidity);
infoWind.insertAdjacentElement("afterend",elcloneinfoWind);

},2200);
const cloneInfoWeather=document.querySelectorAll('.info-weather.active-clone');
const TotalCloneInfoWeather=cloneInfoWeather.length;
const cloneInfoWeatherFirst=cloneInfoWeather[0];

const cloneInfoHumidity=document.querySelectorAll('.info-humidity.active-clone');
const TotalCloneInfoHumidity=cloneInfoHumidity.length;
const cloneInfoHumidityFirst=cloneInfoHumidity[0];

const cloneInfoWind=document.querySelectorAll('.info-wind.active-clone');
const TotalCloneInfoWind=cloneInfoWind.length;
const cloneInfoWindFirst=cloneInfoWind[0];

if(TotalCloneInfoWeather>0){
    cloneInfoWeatherFirst.classList.remove('active-clone');
    cloneInfoHumidityFirst.classList.remove('active-clone');
    cloneInfoWindFirst.classList.remove('active-clone');
    setTimeout(() => {
        cloneInfoWeatherFirst.remove();
        cloneInfoHumidityFirst.remove();
        cloneInfoWindFirst.remove();
    }, 2200);
}
            
        }
        });
        
});
