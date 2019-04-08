import Header from 'Components/Header';
import StarRating from 'Components/StarRating';
import 'Css/main.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: decodeURIComponent(props.match.params.id)};
    }

    componentDidMount() {
        const {
            reviews, reviewsLoading, notFound, // redux state
            loadReviews, // dispatch
        } = this.props;

        if (!reviews.length && !reviewsLoading && !notFound) {
            loadReviews(this.state.id);
        }
    }

    render() {
        const {businesses, reviewsLoading, businessLoading} = this.props;
        const business = businesses(this.state.id);
        if (!business && (reviewsLoading || businessLoading)) {
            return <div className='view spaced'>
                <Link to='/' className='back-arrow'>←</Link>
                <div className='title'>Loading...</div>
                <Dimmer inverted active>
                    <Loader size='massive'/>
                </Dimmer>
            </div>;
        }
        return (
            <div className='detail view spaced'>
                <Link to='/' className='back-arrow'>←</Link>
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
                    </React.Fragment>
                }
            </div>
        );
    }
}

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
