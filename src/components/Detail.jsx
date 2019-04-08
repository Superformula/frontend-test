import Header from 'Components/Header';
import StarRating from 'Components/StarRating';
import 'Css/main.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Loader} from 'semantic-ui-react';
import {loadReviews} from 'Store/actions';
import {
    selectBusiness,
    selectBusinessLoading,
    selectNotFound,
    selectReviews,
    selectReviewsLoading,
    selectReviewsTotal,
} from 'Store/selectors';

const Detail = ({match, businesses, businessLoading, reviews, reviewsTotal, reviewsLoading, notFound, loadReviews}) => {
    const id = decodeURIComponent(match.params.id);
    const business = businesses(id);
    let loading = false;

    if ((!reviews.length || !business) && !reviewsLoading && !notFound) {
        loadReviews(id);
        loading = true;
    }

    if (loading || (!business && (reviewsLoading || businessLoading))) {
        return <div className='view spaced'>
            <div className='title'>Loading...</div>
            <Dimmer inverted active>
                <Loader size='massive'/>
            </Dimmer>
        </div>;
    }
    const {location} = business || {};
    return (
        <div className='detail view spaced'>
            {!business
                ? <Header title='Unknown location'>
                    Unable to find restaurant with the yelp ID specified.
                </Header>
                : <React.Fragment>
                    <div className='detail-header'>
                        <div className='title'>{business.name}</div>
                        <StarRating rating={business.rating}/>
                        <div className='detail-info'>
                            <div className='category'
                                 style={{overflow: 'ellipsis'}}>{business.categories[0].title}</div>
                            <div className='separator'>•</div>
                            <div className='price'>{business.price}</div>
                            {!business.is_closed
                                ? <React.Fragment>
                                    <div className='indicator open'/>
                                    <div className='status'>Open Now</div>
                                </React.Fragment>
                                : <React.Fragment>
                                    <div className='indicator closed'/>
                                    <div className='status'>Open Now</div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                    <img src='/mapPlaceholder.svg' alt='map graphic' className='detail-map'/>
                    <div className='detail-address'>
                        <div className='street'>{location.address1}</div>
                        {location.address2
                            ? <div className='street-2'>{location.address2}</div> : ''}
                        {location.address3
                            ? <div className='street-3'>{location.address3}</div> : ''}
                        <div className='rest'>{`${location.city}, ${location.state} ${location.postal_code}`}</div>
                    </div>
                    <div className='detail-images'>
                        {business.photos.map(url => <img key={url} className='detail-image' alt={url} src={url}/>)}
                    </div>
                    <div className='hr'/>
                    <div className='review-count'>{reviewsTotal} Reviews</div>
                    {/*{reviews.map(r => <Review key={r.id} review={r}/>)}*/}
                </React.Fragment>
            }
        </div>
    );
};

export default connect(state => ({
    businesses: selectBusiness(state),
    businessLoading: selectBusinessLoading(state),
    reviews: selectReviews(state),
    reviewsLoading: selectReviewsLoading(state),
    reviewsTotal: selectReviewsTotal(state),
    notFound: selectNotFound(state),
}), {
    loadReviews,
})(Detail);
