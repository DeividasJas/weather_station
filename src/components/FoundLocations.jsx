import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
function FoundLocations() {
  const { locations, setLatLon, setIsSelected } = useContext(AppContext);
  const grabLatLot = (location) => {
    setLatLon([location.lon, location.lat]);
    setIsSelected(true)
  };
  return (
    <ul data-theme='dracula' className='divide-y px-4  rounded-md my-3 mx-auto' style={{maxWidth: '600px'}}>
      {locations.map((location, index) => {
        return (
          <li key={index} onClick={() => grabLatLot(location)} className='p-2'>
            {location.name}, {location.state}
          </li>
        );
      })}
    </ul>
  );
}

export default FoundLocations;
