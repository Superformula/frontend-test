import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";

import PaddedSection from "components/PaddedSection";
import { OpenNow, Closed } from "../components/OpenClosed";
import ImageDiv from "../components/ImageDiv";
import { RESTAURANT_DETAILS } from "./gql";
require("./main.scss");

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeafletContainer = styled.div`
  width: 50%;
  height: 230px;
`;

const HR = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`;

const PaddedText = styled.div`
  padding: 15px 0 15px 0;
`;

const Review = styled.div`
  display: flex;
  margin: 20px 0 20px 0;

  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  & :nth-child(2) {
    width: 100px;
    margin-right: 20px;
    & :nth-child(2) {
      font-size: 12px;
      color: #ababab;
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
              location: { formatted_address },
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

                <SpaceBetween>
                  <p>
                    {categories.length ? categories[0].title : null} - {price}
                  </p>

                  <p>{is_closed ? <Closed /> : <OpenNow />}</p>
                </SpaceBetween>
              </PaddedSection>

              <HR />

              <PaddedSection>
                <SpaceBetween>
                  <LeafletContainer>
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
                  </LeafletContainer>
                  {photos.slice(0, 2).map(photo => (
                    <ImageDiv
                      key={photo}
                      width={`${50 / photos.length - 2}%`}
                      image={photo}
                    />
                  ))}
                </SpaceBetween>

                <PaddedText>{formatted_address}</PaddedText>
              </PaddedSection>

              <HR />

              <PaddedSection>
                <PaddedText>{review_count} Reviews</PaddedText>
                <div>
                  {reviews.map(
                    ({
                      user: { name, image_url },
                      rating,
                      text,
                      time_created
                    }) => (
                      <Review key={image_url}>
                        <img src={image_url} />
                        <div>
                          <div>{name}</div>
                          <div>
                            {new Date(time_created).toLocaleDateString()}
                          </div>
                        </div>
                        <div>
                          <div>{rating} stars</div>
                          {text}
                        </div>
                      </Review>
                    )
                  )}
                </div>
              </PaddedSection>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default withRouter(RestaurantDetail);
