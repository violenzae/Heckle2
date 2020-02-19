export class SafeSpaceInfo {
  constructor(location) {
  this.location = location;
  this.heckle = heckle;
  this.description = description;
  this.timestamp = timestamp;
}
}

export class WeatherService {
    async getWeatherByCity(city) {
      try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } catch(error) {
        console.error("There was an error handling your request: " + error.message);
      }
    }
  }