import React, { Component, Fragment } from 'react';
import { bool, object, string, array, number } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';

import Nav from 'components/Nav';
import Restaurant from 'components/Restaurant';
import { getRestaurant, getRestaurantReviews } from 'actions/restaurant';
import {
  allRestaurantReviews,
  getRestaurantData,
  isFetchingRestaurant,
} from 'selectors';
import mapImg from 'assets/images/map-fpo.png';

export class RestaurantContainer extends Component {
  static propTypes = {
    actions: object,
    match: object,
    isFetching: bool,
    name: string,
    is_closed: bool,
    rating: number,
    categories: array,
    price: string,
    location: object,
    photos: array,
    review_count: number,
    reviews: array,
  };

  componentDidMount() {
    const { actions, match } = this.props;
    const { params } = match;

    actions.getRestaurant(params.id);
    actions.getRestaurantReviews(params.id);
  }

  render() {
    const {
      isFetching,
      name,
      is_closed,
      rating,
      categories,
      price,
      location,
      photos,
      review_count,
      reviews,
    } = this.props;

    return (
      <Fragment>
        {isFetching ? (
          <div className="loader loader--active" />
        ) : (
          <Fragment>
            <section className="content-section">
              <Nav />
              <header className="restaurant-header">
                <div className="container">
                  <h3 className="restaurant-header__heading">{name}</h3>
                  <Restaurant.Meta
                    className="restaurant-header__meta"
                    rating={rating}
                    is_closed={is_closed}
                    categories={categories}
                    price={price}
                  />
                </div>
              </header>
              <div className="container">
                <section className="restaurant-intro">
                  <div>
                    <figure
                      className="restaurant-intro__map"
                      style={{
                        backgroundImage: `url(${mapImg})`,
                      }}
                    />
                    <span className="restaurant-intro__address">
                      {location
                        && location.display_address.length
                        && location.display_address.join(', ')}
                    </span>
                  </div>
                  {photos
                    && photos.length
                    && photos.slice(0, 2).map(photo => (
                      <div
                        key={photo}
                        style={{
                          backgroundImage: `url(${photo})`,
                        }}
                      />
                    ))}
                </section>
              </div>
            </section>
            <section className="content-section content-section__lower">
              <div className="container">
                <Restaurant.Reviews
                  reviews={reviews}
                  review_count={review_count}
                />
              </div>
            </section>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: isFetchingRestaurant(state),
  reviews: allRestaurantReviews(state),
  ...getRestaurantData(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getRestaurant,
      getRestaurantReviews,
    },
    dispatch,
  ),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(RestaurantContainer);
