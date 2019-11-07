import React from 'react';
import Map from '../../components/Map';

const App = ({ toggleIsShowMap, isShowMap }) => {
  return (
    <div className="App">
      <button onClick={toggleIsShowMap}>
        {isShowMap ? 'Закрыть карту' : 'Открыть карту'}
      </button>
      { isShowMap && <Map /> }
    </div>
  );
};

export default App;
