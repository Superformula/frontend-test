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
        <div className="rating">
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
          <div>
            {restaurant.categories[0].title} • {restaurant.price}
          </div>
          <div className="open-now">
            {restaurant.hours &&
            restaurant.hours[0] &&
            restaurant.hours[0].is_open_now ? (
              <React.Fragment>
                <span className="dot open">⬤</span> OPEN NOW
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span className="dot closed">⬤</span> CLOSED
              </React.Fragment>
            )}
          </div>
        </div>
        <Button to={`/detail/${restaurant.id}`} className="filled">
          LEARN MORE
        </Button>
      </div>
    );
  }
}
