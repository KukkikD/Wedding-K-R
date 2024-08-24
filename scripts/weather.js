const apiKey = 'b5b0dce917b1d82edc871186b5d848ec';
const myLat = '46.662';
const myLon = '-122.964';
const units = 'imperial'; // Use 'imperial' for Fahrenheit

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=${units}&appid=${apiKey}`;

const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const icon = document.getElementById('icon');

async function getWeather() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // Output the results to the console for testing
            displayWeather(data);
        } else {
            throw Error('Network response was not ok');
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const targetDate = new Date('2024-09-21');
    const weatherList = data.list;

    // Find the weather data closest to the target date
    const weatherForDate = weatherList.find(item => {
        const date = new Date(item.dt * 1000);
        return date.toDateString() === targetDate.toDateString();
    });

    if (weatherForDate) {
        temperature.textContent = `${weatherForDate.main.temp} °F`;
        description.textContent = `- ${weatherForDate.weather[0].description}`;
        const iconSrc = `http://openweathermap.org/img/wn/${weatherForDate.weather[0].icon}@2x.png`;
        icon.setAttribute('src', iconSrc);
        icon.setAttribute('alt', weatherForDate.weather[0].description);
    } else {
        temperature.textContent = 'Weather data not available for September 21, 2024';
        description.textContent = '';
        icon.setAttribute('src', ''); // Clear icon
    }
}

getWeather();
