import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import MetadataWrapper from "../MetadataWrapper/MetadataWrapper";
import Rating from "../Rating/Rating";
import Spacer from "../Spacer/Spacer";

const Card = props => {
  const { category, image, headline, rating, price, status } = props;

  return (
    <div className="card-wrapper">
      <div className="card-metadata-container">
        <Image source={image} />
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
  category: PropTypes.string,
  image: PropTypes.string,
  headline: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.string,
  status: PropTypes.bool
};

export default Card;
