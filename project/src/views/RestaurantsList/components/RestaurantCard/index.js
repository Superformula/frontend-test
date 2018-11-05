import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import FlatButton from "components/FlatButton";

require("./main.scss");

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
        <div
          style={{
            background: `url(${photos[0]})`,
            backgroundSize: "300px 230px",
            width: 300,
            height: 230
          }}
        />
      ) : (
        <div>photo unavailable :(</div>
      )}

      <h3>{name}</h3>

      <p>{rating} stars</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          {categories.length ? categories[0].title : null} - {price}
        </p>

        <p>
          {is_closed ? (
            <span>
              <span className="red-dot" /> CLOSED
            </span>
          ) : (
            <span>
              <span className="green-dot" /> OPEN NOW
            </span>
          )}
        </p>
      </div>
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
