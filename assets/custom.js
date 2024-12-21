const apiKey = '1e0cdf4192f7e0519fed0cad99251838'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='


const searchBox = document.querySelector('.inputBox');
const searchBtn = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weatherIcon');

console.log(searchBox, searchBtn);

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    if (response.status !== 200) {
        document.querySelector('.invalidError').classList.remove('hidden')
    } else {
        
        document.querySelector('.invalidError').classList.add('hidden')
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = data.main.temp + '°C'
        document.querySelector('.Humidity').innerHTML = data.main.humidity + '% '
        document.querySelector('.Wind-Speed').innerHTML = data.wind.speed + 'km/h'

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "/assets/images/clouds.png"
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "/assets/images/clear.png"
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "/assets/images/rain.png"
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "/assets/images/drizzle.png"
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "/assets/images/mist.png"
        }

        document.querySelector('.mainBox').classList.remove('hidden')

    }

}


searchBtn.addEventListener('click', () => {
    const city = searchBox.value
    checkWeather(city)

    // Clear the input box after the search
    searchBox.value = ''


})