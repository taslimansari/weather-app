const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '580e19b6e9mshc35bcbc02103b91p198b22jsn7082930c0352',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", function (e) {
    e.preventDefault()
    getWeather(city.value)
});

const getTokyo = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp_a.innerHTML = response.temp
            feels_like_a.innerHTML = response.feels_like
            humidity_a.innerHTML = response.humidity
            wind_speed_a.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

const getLondon = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp_b.innerHTML = response.temp
            feels_like_b.innerHTML = response.feels_like
            humidity_b.innerHTML = response.humidity
            wind_speed_b.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

const getNewYork = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp_c.innerHTML = response.temp
            feels_like_c.innerHTML = response.feels_like
            humidity_c.innerHTML = response.humidity
            wind_speed_c.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

const getKolkata = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp_d.innerHTML = response.temp
            feels_like_d.innerHTML = response.feels_like
            humidity_d.innerHTML = response.humidity
            wind_speed_d.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

getTokyo("Tokyo")
getLondon("London")
getNewYork("New York")
getKolkata("Kolkata")
getWeather("Delhi")
