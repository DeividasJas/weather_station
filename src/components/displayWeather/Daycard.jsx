import moment from 'moment';
function DayCard({ item }) {
  const dayOfWeek = moment(item.dt_txt).format('dddd');
  console.log(item);
  const imgUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
  return (
    <>
      <div className='w-48 min-w-36'>
        <div className='card bg-base-500 image-full aspect-square  shadow-xl'>
          <figure>
            <img src={imgUrl} alt='condition' />
          </figure>
          <div className='card-body'>
            <p className='card-title text-xl'>{dayOfWeek}</p>
            <h2 className='text-xl'>{item.main.temp} C</h2>
            <p>{item.weather[0].main}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DayCard;
