const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let API_KEY = '4562669d1d80f6692a3ecb56b3b2ddda';
const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
       fetchWeather(city) //llamar a la api para que nos de la informacion del clima
    } else {
        alert('Ingrese una ciudad valida')
    }
})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divReponseData = document.getElementById('responseData')
    divReponseData.innerHTML = ''

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description =data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es ${Math.floor(temp-diffKelvin)}°c`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es del ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png` // verficar en la documentacion como mostrar una imagen

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion meteorologica es ${description}`

    divReponseData.appendChild(cityInfo)
    divReponseData.appendChild(tempInfo)
    divReponseData.appendChild(humidityInfo)
    divReponseData.appendChild(iconInfo)
    divReponseData.appendChild(descriptionInfo)

}