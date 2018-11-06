import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import PaddedSection from "components/PaddedSection";

require("./main.scss");

const RESTAURANT_DETAILS = gql`
  query RestaurantDetails($alias: String!) {
    business(id: $alias) {
      name
      rating
      categories {
        title
      }
      price
      is_closed
      photos
      location {
        formatted_address
      }
      coordinates {
        latitude
        longitude
      }
      review_count
      reviews {
        user {
          name
          image_url
        }
        rating
        text
        time_created
      }
    }
  }
`;

const RestaurantDetail = ({
  match: {
    params: { alias }
  }
}) => {
  return (
    <div>
      <Query query={RESTAURANT_DETAILS} variables={{ alias }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log("error: ", error);
            return <p>Error :(</p>;
          }

          const {
            business: {
              name,
              rating,
              categories,
              price,
              is_closed,
              photos,
              location,
              coordinates: { latitude, longitude },
              review_count,
              reviews
            }
          } = data;

          return (
            <div>
              <PaddedSection>
                <h1>{name}</h1>
                <p>{rating} stars</p>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
              </PaddedSection>

              <hr />

              <div
                style={{
                  border: '5px solid red',
                  overflow: "hidden",
                  width: 600,
                  height: 250
                }}
              >
                <Map center={[latitude, longitude]} zoom={15}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  />
                  <Marker position={[latitude, longitude]}>
                    <Popup>
                      A pretty CSS3 popup.
                      <br />
                      Easily customizable.
                    </Popup>
                  </Marker>
                </Map>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default withRouter(RestaurantDetail);
