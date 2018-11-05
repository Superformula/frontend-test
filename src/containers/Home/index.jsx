import React, { Component, Fragment } from 'react';
import { array, bool, object } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import { getRestaurants, toggleFilter, resetFilters } from 'actions/restaurant';

import Restaurant from 'components/Restaurant';
import FilterBar from 'components/FilterBar';
import { allRestaurants, isFetchingRestaurants, getFilters } from 'selectors';
import { ROUTES } from 'routes';

export class Home extends Component {
  static propTypes = {
    filters: object.isRequired,
    actions: object.isRequired,
    isFetching: bool.isRequired,
    restaurants: array,
  };

  static defaultProps = {
    restaurants: [],
  };

  state = {
    limit: 8,
  };

  componentDidMount() {
    const { actions } = this.props;

    actions.getRestaurants();
  }

  loadMore = () => {
    const { actions } = this.props;
    const { limit } = this.state;

    const hasHitLimit = limitAmt => limitAmt > 8;
    // fetch more if we have already loaded the local items
    if (limit > 8) {
      actions.getRestaurants();
    }
    // reset limit to original
    this.setState(prevState => ({
      limit: hasHitLimit(prevState.limit) ? 8 : 16,
    }));
  };

  render() {
    const { history, filters, isFetching, restaurants, actions } = this.props;
    const { limit } = this.state;

    return (
      <Fragment>
        <section className="container">
          <div className="intro">
            <h1>Restaurants</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        <FilterBar
          onReset={actions.resetFilters}
          filters={filters}
          onSelect={actions.toggleFilter}
        />

        {isFetching ? (
          <div className="loader loader--active" />
        ) : (
          <section className="content-section">
            <div className="container">
              <h3>All Restaurants</h3>
              <div className="tile-grid">
                {restaurants.slice(0, limit).map(i => (
                  <Restaurant.Tile
                    goToRestaurant={() => history.push(`${ROUTES.RESTAURANT}/${i.id}`)
                    }
                    key={i.id}
                    {...i}
                  />
                ))}
              </div>
              <div className="load-more">
                <button
                  type="button"
                  onClick={this.loadMore}
                  className="load-more__button button button--inverse"
                >
                  Load More
                </button>
              </div>
            </div>
          </section>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  filters: getFilters(state),
  restaurants: allRestaurants(state),
  isFetching: isFetchingRestaurants(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getRestaurants,
      toggleFilter,
      resetFilters,
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
)(Home);
