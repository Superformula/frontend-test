import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./Details.scss";

import Divider from '../../components/Divider/Divider';
import Hero from '../../components/Hero/Hero';
import Heading from "../../components/Heading/Heading";
import Image from "../../components/Image/Image";
import Loading from '../../components/Loading/Loading';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Spacer from '../../components/Spacer/Spacer';
import MetadataWrapper from "../../components/MetadataWrapper/MetadataWrapper";
import Rating from '../../components/Rating/Rating';

import ReviewWrapper from "../../components/ReviewWrapper/ReviewWrapper";

const yeplPlaceholderImg = "https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/248de198b86e/assets/img/structural/cityscape@2x.png"


const RESTAURANT_DETAILS = gql`
  query RestaurantDetails($id:String){
    business(id:$id){
      name
      rating
      categories{
        title
      }
      price
      hours{
        is_open_now
      }
      photos
      location{
        address1
      }
      review_count
      reviews{
        id
        text
        rating
        time_created
        user{
          name
          image_url
        }
      }
    }
  }
  `;


const Details = ({match}) => {
  const { loading, error, data } = useQuery(
    RESTAURANT_DETAILS,
    {variables: { id: match.params.id},
    notifyOnNetworkStatusChange: true,}
  );

  if(loading) return <Loading />;
  if(error) return `Error: ${error}`;

  const dataFields = data.business;

  const metadataWithRating = 
    <div className="details-metadata_rating-container">
      <Rating rating={dataFields.rating}/>
      <Spacer size="medium" />
      <MetadataWrapper 
        category={dataFields.categories[0].title} 
        status={dataFields.hours[0].is_open_now} 
        price={dataFields.price} 
        large />
    </div>

  return (
    <div className="page-details">
     <SectionWrapper>
        <Hero subcomponent={metadataWithRating}>{dataFields.name}</Hero>
        <Spacer size="large" />
      </SectionWrapper>

      <Divider />
      <Spacer size="large" />

      <div className="details-image_location-container">
        <div className="details-image_location-image">
        <Image source={dataFields.photos.toString()} />
        <Image source={yeplPlaceholderImg} />
        <Image source={yeplPlaceholderImg} />
        </div>
        <Spacer size="medium" />
        <Heading level={4} className="details-heading-location">{dataFields.location.address1}</Heading>
      </div>

      <Spacer size="large" />
      <Divider />

      <SectionWrapper>
        <Spacer size="large" />
        <Heading level={4} className="details-heading-review_count">{dataFields.review_count.toString() + " Reviews"}</Heading>
        {/* <Spacer size="large" /> */}

        {dataFields.reviews.map(({rating, text, time_created, user}) => {
          const tempTime = time_created.substring(0,10);
          const tempTimeSplit = tempTime.split('-');
          tempTimeSplit.push(tempTimeSplit.shift());
          const reformattedTime = tempTimeSplit.join("/");
          
          return (
            <ReviewWrapper 
              rating={rating} 
              reviewText={text} 
              reviewDate={reformattedTime} 
              reviewerName={user.name} 
              userImage={user.image_url} 
              key={user.name}
            />
          );
        })
        }
      
      </SectionWrapper>
    </div>
  );
}

export default Details;