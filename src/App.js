import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.2471&lon=121.1367&appid=2f94fc7479e5a507a727b0727d6184e0';
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
  })
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°K</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p>: null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like}°K</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed} MPH</p>: null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
