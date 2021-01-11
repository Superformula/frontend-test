import React from "react";
import header from "../../components/header";
import Header from "../../components/header-detail";
import LocationDetails from "../../components/location-details";
import ReviewList from '../../components/review-list';
import './details-page.scss';

export default ({headerProps, locationProps, reviewListProps}) => {
  return (
    <section className="details-page">
      <Header {...headerProps} />
      <section className="location-container">
        <LocationDetails  {...locationProps}/>
      </section>
      <ReviewList {...reviewListProps}/>
    </section>
  );
};
