import { AppContext } from './AppContext';
import { useState } from 'react';
function AppProvider({ children }) {
  const [locations, setLocations] = useState([1]);
  const [latLon, setLatLon] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const application = {
    locations,
    setLocations,
    latLon,
    setLatLon,
    isSelected,
    setIsSelected,
  };
  return (
    <AppContext.Provider value={application}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
