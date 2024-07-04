import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import SearchBar from './components/SearchBar';
import FoundLocations from './components/FoundLocations';
import WeatherList from './components/displayWeather/WeatherList';
import DayCard from './components/displayWeather/Daycard';


function App() {
  const { locations, isSelected } = useContext(AppContext);
  // console.log(locations[0]);
//   const info = {
//     "cod": "200",
//     "message": 0,
//     "cnt": 3,
//     "list": [
//         {
//             "dt": 1720105200,
//             "main": {
//                 "temp": 17.65,
//                 "feels_like": 17.79,
//                 "temp_min": 15.9,
//                 "temp_max": 17.65,
//                 "pressure": 1007,
//                 "sea_level": 1007,
//                 "grnd_level": 988,
//                 "humidity": 89,
//                 "temp_kf": 1.75
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 83
//             },
//             "wind": {
//                 "speed": 1.84,
//                 "deg": 186,
//                 "gust": 2.37
//             },
//             "visibility": 10000,
//             "pop": 0.74,
//             "rain": {
//                 "3h": 1.05
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2024-07-04 15:00:00"
//         },
//         {
//             "dt": 1720105200,
//             "main": {
//                 "temp": 17.65,
//                 "feels_like": 17.79,
//                 "temp_min": 15.9,
//                 "temp_max": 17.65,
//                 "pressure": 1007,
//                 "sea_level": 1007,
//                 "grnd_level": 988,
//                 "humidity": 89,
//                 "temp_kf": 1.75
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 83
//             },
//             "wind": {
//                 "speed": 1.84,
//                 "deg": 186,
//                 "gust": 2.37
//             },
//             "visibility": 10000,
//             "pop": 0.74,
//             "rain": {
//                 "3h": 1.05
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2024-07-04 15:00:00"
//         },
//         {
//             "dt": 1720105200,
//             "main": {
//                 "temp": 17.65,
//                 "feels_like": 17.79,
//                 "temp_min": 15.9,
//                 "temp_max": 17.65,
//                 "pressure": 1007,
//                 "sea_level": 1007,
//                 "grnd_level": 988,
//                 "humidity": 89,
//                 "temp_kf": 1.75
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 83
//             },
//             "wind": {
//                 "speed": 1.84,
//                 "deg": 186,
//                 "gust": 2.37
//             },
//             "visibility": 10000,
//             "pop": 0.74,
//             "rain": {
//                 "3h": 1.05
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2024-07-04 15:00:00"
//         },
//         {
//             "dt": 1720116000,
//             "main": {
//                 "temp": 16.32,
//                 "feels_like": 16.44,
//                 "temp_min": 15.22,
//                 "temp_max": 16.32,
//                 "pressure": 1006,
//                 "sea_level": 1006,
//                 "grnd_level": 988,
//                 "humidity": 93,
//                 "temp_kf": 1.1
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 92
//             },
//             "wind": {
//                 "speed": 2.14,
//                 "deg": 181,
//                 "gust": 4.34
//             },
//             "visibility": 10000,
//             "pop": 0.64,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2024-07-04 18:00:00"
//         },
//         {
//             "dt": 1720126800,
//             "main": {
//                 "temp": 13.24,
//                 "feels_like": 13.18,
//                 "temp_min": 13.24,
//                 "temp_max": 13.24,
//                 "pressure": 1007,
//                 "sea_level": 1007,
//                 "grnd_level": 988,
//                 "humidity": 98,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 83
//             },
//             "wind": {
//                 "speed": 2.27,
//                 "deg": 182,
//                 "gust": 4.01
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2024-07-04 21:00:00"
//         }
//     ],
//     "city": {
//         "id": 593116,
//         "name": "Vilnius",
//         "coord": {
//             "lat": 54.687,
//             "lon": 25.2829
//         },
//         "country": "LT",
//         "population": 542366,
//         "timezone": 10800,
//         "sunrise": 1720057760,
//         "sunset": 1720119418
//     }
// }
// const filter = info.list.filter(item => item.dt_txt.includes('15:00'))
// console.log(info.list);
// console.log(filter);



  return (
    <>
    <div className='min-w-96'>

      <SearchBar/>
      {locations[0].name ? <FoundLocations/> : null}
{/* <FoundLocations/> */}
      {isSelected && <WeatherList/>}
      {/* <DayCard/> */}
    </div>
    </>
  );
}

export default App;
