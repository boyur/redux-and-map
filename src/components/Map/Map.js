import React, { PureComponent } from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends PureComponent {
  componentDidMount() {
    this.props.getStyle();
  }

  render() {
    const { viewport, onViewportChange, onLoadMap } = this.props;

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
  }
}

export default Map;
