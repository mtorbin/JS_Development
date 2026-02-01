function showweatherDetails(event) {
      event.preventDefault();   // prevents the default behavior of an event, such as form submission, within a function named showweatherDetails
      const lat = document.getElementById('lat').value;
      const lon = document.getElementById('lon').value;
      const apiKey = '5964b43aebcc84c14596d9678d812df5'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in Latitude ${data.coord.lat} and Longitude ${data.coord.lon}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

