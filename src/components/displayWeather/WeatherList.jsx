import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { getLocationWeather } from '../../services/get.mjs';
import DayCard from './Daycard';
function WeatherList() {
  const { latLon } = useContext(AppContext);
  const [weather, setWeather] = useState(null);

  let high;
  if (weather) {
    high = weather.list.filter((item) => item.dt_txt.includes('18:00'));
  }
  console.log(high, 'im high');
  useEffect(() => {
    (async () => {
      const response = await getLocationWeather(latLon[0], latLon[1]);
      setWeather(response);
      
    })();
  }, [latLon]);
  return (
    <>
      <div className='flex justify-center gap-1 basis-0 flex-wrap'>
        {high &&
          high.map((item, index) => {
            return <DayCard key={index} item={item} />;
          })}
      </div>
    </>
  );
}

export default WeatherList;
