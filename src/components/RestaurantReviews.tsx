// import dotenv from 'dotenv';
// dotenv.load();

import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Query } from 'react-apollo'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

import { Restaurant, Review } from '../models/models'
import { Fragment } from 'react';
import RestaurantReviewItem from './RestaurantReviewItem';
import StarRating from './StarRating';


const Map = ({ match }: any) => {
  // Access restaurant that was clicked by matching the id property to the restaruant held in state
  const selectedRest: Restaurant = useSelector((state: any) => state.restaurants).filter((rest: Restaurant) => rest.resId === match.params.id)[0]
  
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: selectedRest.location[0], lng: selectedRest.location[1] }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const OutputMap = () => {
  return (
    <div style={{ height: '100vw', width: '100vw' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}


export default function RestaurantReviews({ match }: any) { // id property is initialized after initial params so any type is used

  // Access restaurant that was clicked by matching the id property to the restaruant held in state
  const selectedRest: Restaurant = useSelector((state: any) => state.restaurants).filter((rest: Restaurant) => rest.resId === match.params.id)[0]
  
  const Map = () => {
    
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: selectedRest.location[0], lng: selectedRest.location[1] }}
      />
    )
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map))

  const OutputMap = () => {
    console.log(process.env.REACT_APP_GOOGLE_KEY)
    return (
      <div style={{ height: '100vw', width: '100vw' }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    )
  }

















  return (
    <Fragment>
      <h1 className="rest-rev-title">{selectedRest.title}</h1>

      <div className="avg-rating-revs">
        <StarRating rating={selectedRest.avg_rating}/>
      </div>

      <div className="text-container">
        <div className="meta-left">
          {`${selectedRest.category} · ${selectedRest.cost}`}
        </div>
        <div className="meta-right">
          {selectedRest.isOpen ? <FontAwesomeIcon icon="circle" color="green" /> : <FontAwesomeIcon icon="circle" color="red" />}
          {selectedRest.isOpen ? '  OPEN NOW' : '  CLOSED'}
        </div>
      </div>

      <div>
        <OutputMap/>
      </div>

      <div>
        {`${selectedRest.totReviews}  Reviews`}
      </div>

      <div>
        {selectedRest.reviews.map((review: Review) => <RestaurantReviewItem review={review} key={review.revId} />)}
      </div>
      
    </Fragment>
  )
}

