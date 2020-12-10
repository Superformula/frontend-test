import * as React from "react";
import GoogleMapReact from "google-map-react";
import { ICoordinates } from "../../../declarations";

import styles from "./RestaurantMedia.css";
import Icon from "components/shared/Icon/Icon";

interface Props {
  urls: string[];
  coordinates: ICoordinates;
  address: string;
}

interface MapMarkerProps {
  lat: number;
  lng: number;
}
const MapMarker: React.FC<MapMarkerProps> = () => <Icon name="mapMarker" />;

const RestaurantMedia: React.FC<Props> = ({ urls, coordinates, address }) => {
  return (
    <section className={styles.container}>
      <div className={styles.media}>
        <div className={styles.photo}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_KEY }}
            defaultCenter={{
              lat: coordinates.latitude,
              lng: coordinates.longitude,
            }}
            defaultZoom={11}
          >
            <MapMarker lat={coordinates.latitude} lng={coordinates.longitude} />
          </GoogleMapReact>
        </div>
        {urls.map((url: string) => {
          return <img key={url} src={url} alt="restaurant" className={styles.photo} />;
        })}
      </div>
      <address className={styles.address}>{address}</address>
    </section>
  );
};

export default RestaurantMedia;
