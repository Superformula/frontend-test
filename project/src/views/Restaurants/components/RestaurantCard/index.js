import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FlatButton from "components/FlatButton";
import { OpenNow, Closed } from "../OpenClosed";
import ImageDiv from "../ImageDiv";

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RestaurantCard = ({
  alias,
  name,
  photos,
  rating,
  categories,
  price,
  is_closed
}) => {
  const photo = photos.slice(0, 1);

  return (
    <React.Fragment>
      {photo ? <ImageDiv image={photo} /> : <div>photo unavailable :(</div>}

      <h3>{name}</h3>
      <p>{rating} stars</p>

      <SpaceBetween>
        <p>
          {categories.length ? categories[0].title : null} - {price}
        </p>

        <p>{is_closed ? <Closed /> : <OpenNow />}</p>
      </SpaceBetween>
      <Link to={`/restaurants/${alias}`}>
        <FlatButton theme="dark" fullWidth>
          learn more
        </FlatButton>
      </Link>
    </React.Fragment>
  );
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  ).isRequired,
  price: PropTypes.string.isRequired,
  is_closed: PropTypes.bool.isRequired
};

export default RestaurantCard;
