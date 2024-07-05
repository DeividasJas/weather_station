import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import SearchBar from './components/SearchBar';
import FoundLocations from './components/FoundLocations';
import WeatherList from './components/displayWeather/WeatherList';

function App() {
  const { locations, isSelected, showLocations } = useContext(AppContext);

  return (
    <>
      <div className='min-w-96'>
        <SearchBar />
        {showLocations && <FoundLocations />}
        {isSelected && <WeatherList />}
      </div>
    </>
  );
}

export default App;
