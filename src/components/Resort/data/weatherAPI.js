// ***WEATHER API FOR TESTING***
import axios from 'axios';
// USING BOSTON FOR TESTING
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=25d0569851c0869a01a553ee05c7ffff&units=imperial'
export const getWeatherData = async () => {
    try {
        const { data } = await axios.get(baseURL);
        return data;
    } catch (error) {
        throw error;
    }
}