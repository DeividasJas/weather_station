import axios from 'axios';
const api_key = import.meta.env.VITE_API_KEY;

export const getLonLat = async (location) => {
  const { data, status } = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${api_key}`
  );
  if (status === 200) {
    return data;
  }
};

export const getLocationWeather = async (lon, lat) => {
  const {data} = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&units=metric&cnt=3&appid=${api_key}`
  );
  if (data.cod == 200) {
    return data;
  }
};
