import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FlatButton from "components/FlatButton";
import { OpenNow, Closed } from "../OpenClosed";

const SpaceBetween = styled.div`
  display: flex;
  justifycontent: space-between;
`;

const ImageDiv = styled.div`
  background: ${props => `url(${props.image})`};
  background-size: 300px 230px;
  width: 300;
  height: 230px;
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
  return (
    <React.Fragment>
      {photos.length ? (
        <ImageDiv image={photos[0]} />
      ) : (
        <div>photo unavailable :(</div>
      )}

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
