import React, { FC } from 'react';

import mapPlaceholder from 'assets/images/mapPlaceholder.svg';
import { Grid } from 'shared/components/Grid/Grid';
import './MapGalleryWrapper.scss';
import { MapGalleryWrapperProps } from './MapGalleryWrapper.types';

export const MapGalleryWrapper: FC<MapGalleryWrapperProps> = ({ images }) => (
  <Grid.Row isFullWidth className="map-gallery-full-row">
    <Grid.Row>
      <section className="map-gallery-wrapper">
        <div>
          <img
            className="map-gallery-wrapper__map-image"
            src={mapPlaceholder}
            alt="restaurant position selected on map"
          />
          <p className="map-gallery-wrapper__street-label">624 S La Brea Ave Los Angeles, CA 90036</p>
        </div>
        <div className="map-gallery-wrapper__gallery">
          {images.map((image, i) => (
            <img key={i} className="map-gallery-wrapper__image" src={image} alt="restaurant dishes" />
          ))}
        </div>
      </section>
    </Grid.Row>
  </Grid.Row>
);
