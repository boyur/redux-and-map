import React from 'react';
import Map from '../../components/Map';

const App = ({ isMapLoad }) => {
  return (
    <div className="App">
      <Map />
      { isMapLoad && 'Карта загружена' }
    </div>
  );
};

export default App;
