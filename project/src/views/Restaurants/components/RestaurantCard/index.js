import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FlatButton from "components/FlatButton";
import { OpenNow, Closed } from "../OpenClosed";

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SmallGreyText = styled.p`
  font-size: 10px;
  color: #ababab;
`;

const DetailsBox = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
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
      {photo ? (
        <img width="100%" height="230px" src={photo} />
      ) : (
        <div>photo unavailable :(</div>
      )}
      <DetailsBox>
        <h3>{name}</h3>
        <span>{rating} stars</span>
        <SpaceBetween>
          <SmallGreyText>
            {categories.length ? categories[0].title : null} - {price}
          </SmallGreyText>
          <SmallGreyText>{is_closed ? <Closed /> : <OpenNow />}</SmallGreyText>
        </SpaceBetween>
        <Link to={`/restaurants/${alias}`}>
          <FlatButton theme="dark" fullWidth>
            learn more
          </FlatButton>
        </Link>
      </DetailsBox>
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
