import React from "react";
import { fetchYelp } from "fetchYelp";
import { createBusinessQuery } from "graphQueries";
import moment from "moment";

import "./detail.scss";
import Divider from "components/Divider";
import Ratings from "react-ratings-declarative";

export default class Detail extends React.Component {
  state = {
    restaurant: null
  };

  async componentDidMount() {
    const businessRes = await fetchYelp(
      createBusinessQuery(this.props.match.params.id)
    );

    this.setState({
      restaurant: businessRes.business
    });
  }

  render() {
    const { restaurant } = this.state;

    if (!restaurant) return null;

    console.log(restaurant.coordinates);

    return (
      <div className="page" id="detail">
        <h1 className="page-padding">{restaurant.name}</h1>
        <div className="rating page-padding">
          <Ratings
            widgetRatedColors="#002B56"
            widgetDimensions="35px"
            widgetSpacings="3px"
            rating={restaurant.rating}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        <div className="detail page-padding">
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
        <Divider />
        <div className="media-container page-padding">
          <div className="media">
            <div className="map">
              <iframe
                width="400"
                height="100%"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCEOaB-aNG9bXbECk43P3FUt6W-xGXjRe0&q=${
                  restaurant.coordinates.latitude
                },${restaurant.coordinates.longitude}`}
              />
            </div>
            <div className="photos">
              {restaurant.photos.map(photo => (
                <img key={photo} src={photo} alt="photo" />
              ))}
            </div>
          </div>
          <div className="address">
            {restaurant.location.formatted_address}
          </div>
          
        </div>
        <Divider />
        <h3 className="page-padding">{restaurant.review_count} Reviews</h3>
        <div className="reviews page-padding">
          {restaurant.reviews.map(review => {
            return (
              <React.Fragment key={review.id}>
                <div className="review">
                  <div className="profile">
                    <div className="photo-container">
                      <img
                        className="photo"
                        src={review.user.image_url}
                        alt=""
                      />
                    </div>
                    <div className="profile-info">
                      <div className="profile-name">{review.user.name}</div>
                      <div className="date">
                        {moment(review.time_created).format("M/D/Y")}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Ratings
                      widgetRatedColors="#002B56"
                      widgetDimensions="18px"
                      widgetSpacings="0px"
                      rating={review.rating}
                    >
                      <Ratings.Widget />
                      <Ratings.Widget />
                      <Ratings.Widget />
                      <Ratings.Widget />
                      <Ratings.Widget />
                    </Ratings>
                    <p>{review.text}</p>
                  </div>
                </div>
                <Divider />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}
