import * as React from 'react';
import { connect } from 'react-redux';
import { loadReviews } from '../actions/reviews';
import { Rating } from './Rating';

const mapDispatch = (dispatch, props) => ({
    loadReviews: (() => { dispatch(loadReviews(props.business.id)); })
});

const mapState = (state, props) => ({
    loading: state.reviews.loading.indexOf(props.business.id) !== -1,
    reviews: state.reviews.reviews[props.business.id]
});

export const RestaurantDetails = connect(mapState, mapDispatch)(
    function RestaurantDetails(props) {
        React.useEffect(() => {
            if (props.reviews === undefined) {
                props.loadReviews();
            }
        }, [props.business.id]);
        const reviews = (props.reviews || []).map(r => <div key={r.id} className='review'>
            <div className='user-info'>
                <img src={r.user.image_url} />
                <div className='username'>{r.user.name}</div>
            </div>
            <div className='review-text'>{r.text}</div>
        </div>);
        return (<div className='modal' onClick={props.dismiss}>
            <div className='details'>
                <div className='restaurant-name'>{props.business.name}</div>
                <Rating rating={props.business.rating} />
                {props.loading && <div>Loading Reviews...</div>}
                {!props.loading && reviews.length &&
                <div className='reviews'>{reviews}</div>}
                {!props.loading && !reviews.length &&
                <div className='no-results'>No Reviews</div>}
            </div>
        </div>);
});
