import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
function FoundLocations() {
  const { locations, setLatLon, setIsSelected } = useContext(AppContext);
  const grabLatLot = (location) => {
    setLatLon([location.lon, location.lat]);
    setIsSelected(true);
  };
  console.log(locations.length);
  return (
    <>
      {locations.length > 0 ? (
        <ul
          data-theme='dracula'
          className='divide-y px-4  rounded-md my-3 mx-auto'
          style={{ maxWidth: '600px' }}
        >
          {locations.map((location, index) => {
            return (
              <li
                key={index}
                onClick={() => grabLatLot(location)}
                className='p-2'
              >
                {location.name}, {location.state}
              </li>
            );
          })}
        </ul>
      ) : (
        <p data-theme='dracula' className='max-w-sm mx-auto text-center mt-4 py-1 rounded-md'>No locations found 😢</p>
      )}
    </>
  );
}

export default FoundLocations;
