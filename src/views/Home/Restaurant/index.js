import React from "react";
import "./restaurant.scss";

import Ratings from "react-ratings-declarative";
import Button from "../Button";

export default class Restaurant extends React.Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div className="restaurant">
        <div className="photo-container">
          <img
            className="photo"
            src={restaurant.photos[0]}
            alt="a placeholder image"
          />
        </div>

        <h3>{restaurant.name}</h3>
        <div>
          <Ratings
            widgetRatedColors="#002B56"
            widgetDimensions="20px"
            widgetSpacings="0px"
            rating={restaurant.rating}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        <div className="detail">
          <div>Category - {restaurant.price}</div>
          <div>OPEN NOW</div>
        </div>
        <Button to={`/detail/${restaurant.id}`}>LEARN MORE</Button>
      </div>
    );
  }
}
