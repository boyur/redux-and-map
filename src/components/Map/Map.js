import React from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = (props) => {
  const { viewport, onViewportChange, onLoadMap } = props;

  return (
    <MapGL
      style={{ width: '100%', height: '400px' }}
      mapStyle="mapbox://styles/mapbox/light-v9"
      accessToken='pk.eyJ1IjoiYm95dXJhcnRlbSIsImEiOiJjajBkeWY4ZmwwMDEyMzJseG8wZDI4YW5pIn0.DBEWyIXo3VknCRDcqa7Msg'
      {...viewport}
      onViewportChange={onViewportChange}
      onLoad={onLoadMap}
    />
  );
};

export default Map;
