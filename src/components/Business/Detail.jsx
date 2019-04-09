import Info from 'Components/Business/Info';
import Header from 'Components/Header';
import Review from 'Components/Review';
import StarRating from 'Components/StarRating';
import 'Css/main.scss';
import {get} from 'lodash';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Dimmer, Loader} from 'semantic-ui-react';
import {loadReviews} from 'Store/actions';
import {
    selectBusiness,
    selectBusinessLoading,
    selectNotFound,
    selectReviews,
    selectReviewsFor,
    selectReviewsLoading,
    selectReviewsTotal,
} from 'Store/selectors';

const Detail = ({
                    match, // routing info
                    businesses, businessLoading, // business statuses
                    reviews, reviewsFor, reviewsTotal, reviewsLoading, notFound, // review statuses
                    loadReviews, // dispatch actions
                }) => {
    const id = decodeURIComponent(match.params.id);
    const business = businesses(id);
    const {location} = business || {};
    const [loading, setLoading] = useState(false);

    // redirect to home page if the location isn't found (this is only after we attempt to get the business)
    if (notFound) document.location.href = '/';
    // if we've loaded our reviews (and the business due to the saga), and we have the right one loaded, turn off the flag
    if (reviews.length && id === reviewsFor && loading) setLoading(false);
    // if we aren't loading data, we haven't had a request error, and we either have no data, or the wrong data...
    if (!loading && !notFound && (id !== reviewsFor || !business || !reviews.length)) {
        // set the loading flag and load the review & business data
        setLoading(true);
        loadReviews(id);
    }

    // if we're loading (in any way) show a loading page...
    if (loading || (!business && (reviewsLoading || businessLoading))) {
        return <div className='detail view spaced'>
            <div className='title'>Loading...</div>
            <Dimmer inverted active>
                <Loader size='massive'/>
            </Dimmer>
        </div>;
    }

    return (
        <div className='detail view spaced'>
            {!business
                ? <Header title='Unknown location'>
                    Unable to find restaurant with the yelp ID specified.
                </Header>
                : <React.Fragment>
                    <div className='detail-header'>
                        <div className='title'>{business.name}</div>
                        <StarRating keyPrefix={business.id} rating={business.rating}/>
                        <div className='detail-info'>
                            <Info
                                category={business.categories[0].title} price={business.price}
                                open={get(business, 'hours[0].is_open_now', false)}
                                openText='Open Now' closedText='Closed'
                            />
                        </div>
                    </div>
                    <div className='hr full'/>
                    <div className='detail-container'>
                        <div className='detail-map'/>
                        <div className='detail-images'>
                            {business.photos.map(url => <img key={url} className='detail-image' alt={url} src={url}/>)}
                        </div>
                        <div className='detail-address'>
                            <div className='street'>{location.address1}</div>
                            {location.address2
                                ? <div className='street-2'>{location.address2}</div> : ''}
                            {location.address3
                                ? <div className='street-3'>{location.address3}</div> : ''}
                            <div className='rest'>{`${location.city}, ${location.state} ${location.postal_code}`}</div>
                        </div>
                    </div>
                    <div className='hr full'/>
                    <div className='review-count'>{reviewsTotal} Reviews</div>
                    {reviews.map(r => <React.Fragment>
                        <Review key={r.id} review={r}/>
                    </React.Fragment>)}
                </React.Fragment>
            }
        </div>
    );
};

export default connect(state => ({
    businesses: selectBusiness(state),
    businessLoading: selectBusinessLoading(state),
    reviews: selectReviews(state),
    reviewsFor: selectReviewsFor(state),
    reviewsLoading: selectReviewsLoading(state),
    reviewsTotal: selectReviewsTotal(state),
    notFound: selectNotFound(state),
}), {
    loadReviews,
})(Detail);
