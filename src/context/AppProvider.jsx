import { AppContext } from './AppContext';
import { useState } from 'react';
function AppProvider({ children }) {
  const [locations, setLocations] = useState([]);
  const [latLon, setLatLon] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  const application = {
    locations,
    setLocations,
    latLon,
    setLatLon,
    isSelected,
    setIsSelected,
    showLocations,
    setShowLocations,
  };
  return (
    <AppContext.Provider value={application}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
