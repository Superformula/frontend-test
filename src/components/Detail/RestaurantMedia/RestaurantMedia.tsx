import * as React from "react";
import GoogleMapReact from "google-map-react";

import styles from "./RestaurantMedia.css";

interface Props {
  urls: string[];
}

interface MapMarkerProps {
  name: string;
  lat: number;
  lng: number;
}
const MapMarker: React.FC<MapMarkerProps> = ({ name }) => <div>{name}</div>;

const RestaurantMedia: React.FC<Props> = ({ urls }) => {
  return (
    <section className={styles.container}>
      <div className={styles.photo}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_KEY }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
        >
          <MapMarker lat={59.955413} lng={30.337844} name={"restaurant name"} />
        </GoogleMapReact>
      </div>
      {urls.map((url: string) => {
        return <img key={url} src={url} alt="restaurant" className={styles.photo} />;
      })}
    </section>
  );
};

export default RestaurantMedia;
