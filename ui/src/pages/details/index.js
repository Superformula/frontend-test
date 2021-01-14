import React, { useState, useEffect } from "react";
import header from "../../components/header";
import Header from "../../components/header-detail";
import LocationDetails from "../../components/location-details";
import ReviewList from "../../components/review-list";
import { useParams } from "react-router-dom";
import Api from "../../api";
import "./details-page.scss";

/* Presentation component for the Details Page */
const DetailsPage = ({ headerProps, locationProps, reviewListProps }) => {
  return (
    <section className="details-page">
      <Header {...headerProps} />
      <section className="location-container">
        <LocationDetails {...locationProps} />
      </section>
      <ReviewList {...reviewListProps} />
    </section>
  );
};

/* Stateful Details page component */
export const ConnectedDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [reviewData, setReviewData] = useState([]);

  /* Send request to fetch details whenever the id changes */
  useEffect(() => {
    if (!id) return;

    (async () => {
      const detailsData = await Api.fetchDetails(id);
      setDetails(detailsData)
      const reviewData = await Api.fetchReviews(id);
      setReviewData(reviewData.reviews);
    })();
  }, [id]);




  if(!details){
      //TODO: return loading screen
      return null;
  }

  const headerProps = {
    name: details.name,
    category: details.categories[0]?.title || '',
    rating: details.rating,
    price: details.price,
    isOpen: details.hours.is_open_now
  };

  //lat, lon, locationLabel, images
  const locationProps = {
    lat: details.coordinates.latitude,
    lon: details.coordinates.longitude,
    locationLabel: details.location.display_address?.join(' '),
    images: [details.photos?.[0], details.photos?.[1]]
  };

  //avatar, name, date, rating, comment
  const reviewListProps = {
    reviewCount: details.review_count,
    items: reviewData.map(item => ({
        id: item.id,
        avatar: item.user?.image_url,
        name: item.user?.name,
        //TODO: format
        date: item.time_created,
        rating: item.rating,
        comment: item.text

    }))
  };

  return (
    <DetailsPage
      headerProps={headerProps}
      locationProps={locationProps}
      reviewListProps={reviewListProps}
    />
  );
};
export default DetailsPage;
