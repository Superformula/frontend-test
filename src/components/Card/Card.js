import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

import Rating from "../Rating/Rating";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Spacer from "../Spacer/Spacer";
import MetadataWrapper from "../MetadataWrapper/MetadataWrapper";
// import Image from '../Image/Image';

const Card = props => {
  const { category, image, headline, rating, price, status } = props;

  return (
    <div className="card-wrapper">
      <div className="card-metadata-container">
        {/* <Image source={image} /> */}
        <img src="http://via.placeholder.com/300x230/" />
        <Spacer size="medium" />

        {/* Restaurant Name */}
        <Heading level={4}>{headline}</Heading>
        <Spacer size="small" />

        {/* Rating */}
        <Rating rating={rating} />
        <Spacer size="small" />

        {/* Metadata - Category, Price, Status (open or closed) */}
        <MetadataWrapper category={category} status={status} price={price} />
        <Spacer size="large" />
      </div>

      <div className="card-button-container">
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

Card.protoTypes = {
  headline: PropTypes.string
};

export default Card;
