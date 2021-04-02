// Resort component 
import React, { useEffect, useState } from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { getWeatherData } from './data/weatherAPI'
// days array
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// date 
const date = new Date();
// current day
const day1 = days[date.getDay()];
// 2 days after current day
const day2 = days[date.getDay() + 1];
const day3 = days[date.getDay() + 2];

const WeatherWidget = () => {
    // weather Data
    // list data is unix UTC
    const [weatherdata, setWeatherData] = useState(null);
    const getData = async () => {
        try {
            const data = await getWeatherData();
            setWeatherData(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])

    console.log(weatherdata);
    return (<div>
        <h6>Weather Forcast</h6>
        {
            weatherdata !== null ? (
                <Container>
                    <Row>
                        <div class="weatherBox">
                            {day1}<br />
                            {weatherdata.list[0].main.temp}<br />
                            <img src={'http://openweathermap.org/img/wn/' + weatherdata.list[0].weather[0].icon + '@2x.png'} /><br />
                            {weatherdata.list[0].weather[0].description}
                        </div>
                        <div class="weatherBox">
                            {day2} < br />
                            {weatherdata.list[9].main.temp} < br />
                            <img src={'http://openweathermap.org/img/wn/' + weatherdata.list[8].weather[0].icon + '@2x.png'} /><br />
                            {weatherdata.list[9].weather[0].description}
                        </div>
                        <div class="weatherBox">
                            {day3} < br />
                            {weatherdata.list[16].main.temp} < br />
                            <img src={'http://openweathermap.org/img/wn/' + weatherdata.list[16].weather[0].icon + '@2x.png'} /><br />
                            {weatherdata.list[16].weather[0].description}
                        </div>
                    </Row>
                </Container>
            ) : null
        }
    </div>);
}
export default WeatherWidget;
