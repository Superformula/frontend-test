import GoogleMapReact from 'google-map-react';
import * as React from 'react';
import styled from 'styled-components';

const { GOOGLE_MAPS_API_KEY } = process.env;

const MapContainer = styled.div`
  height: 300px;
  width: 400px;
`;

interface MapProps {
  children?: React.ReactNode;
  defaultCenter: {
    lat: number;
    lng: number;
  };
  defaultZoom?: number;
  className?: string;
}

function Map({
  children,
  className,
  defaultCenter,
  defaultZoom = 15,
}: MapProps) {
  return (
    <MapContainer className={className}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}>
        {children}
      </GoogleMapReact>
    </MapContainer>
  );
}

export default Map;
