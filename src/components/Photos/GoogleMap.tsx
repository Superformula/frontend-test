import * as React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { rem } from '@utils/tools'

interface MapProps {
  pointer: {
    lat: number,
    lng: number
  }
}

const Map: React.FunctionComponent<MapProps> = ({ pointer }) => {
  const mapStyles = {        
    height: rem(228),
    width: "100%"
  }
 
  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLEMAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={pointer}
      >
        <Marker position={pointer} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map