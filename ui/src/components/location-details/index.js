import React from "react";
import Map from './map';
import "./location-details.scss";

export default ({ lat, lon, locationLabel, images }) => {
  return (
    <section className="location-details">
      <div className="map-container">
        <Map lat={lat} lon={lon} />
        <span className="location-label">{locationLabel}</span>
      </div>
      <div className="location-images">
        {images.map(img => (
          <img className="location-image" key={img} src={img} alt="Location image" />
        ))}
      </div>
    </section>
  );
};
