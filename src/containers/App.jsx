import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { yelpResultsShape } from '../constants/models';
import * as fromRestaurants from '../modules/restaurants';
import {
  GridItem,
  Container,
  Row,
  Button,
  FilterNav,
  HeroMini,
  Heading,
  BusinessList,
} from '../components/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        openNow: true,
        price: '',
      },
      apiFilters: {
        category: '',
        offset: 0,
      },
    };
    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  componentDidMount() {
    const { fetchRestaurants } = this.props;
    fetchRestaurants();
  }

  loadMoreData = () => {
    const { fetchRestaurants } = this.props;
    const { apiFilters } = this.state;
    const { offset } = apiFilters;

    this.setState({
      apiFilters: {
        ...apiFilters,
        offset: offset + 8,
      },
    }, () => {
      const { apiFilters: queryParams } = this.state;
      fetchRestaurants(queryParams);
    });
  };

  toggleFilter(filterName, filterValue) {
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        [filterName]: filterValue,
      },
    });
  }

  toggleCategory(categoryValue) {
    // TODO: Hook this up to fetchRestaurants to fetch categorical data
    const { apiFilters } = this.state;
    this.setState({
      apiFilters: {
        ...apiFilters,
        category: categoryValue,
      },
    });
  }

  render() {
    const {
      restaurantData,
      restaurantsError,
      restaurantsLoading,
    } = this.props;
    const { businesses } = restaurantData;
    const { filters, apiFilters } = this.state;

    if (restaurantsError) {
      return ('Oops! Something went wrong.');
    }

    return (
      <Fragment>
        <Container>
          <HeroMini />
        </Container>
        <FilterNav
          toggleFilter={this.toggleFilter}
          toggleCategory={this.toggleCategory}
          {...{ ...filters, ...apiFilters }}
        />
        <Container>
          <GridItem mt={5}>
            <Heading mt={2} mb={2}>All Restaurants</Heading>
          </GridItem>
          <Row>
            <BusinessList businesses={businesses} />
            <GridItem
              mx="auto"
              my={4}
              width={[1 / 4]}
            >
              <Button
                secondary
                block
                onClick={this.loadMoreData}
                disabled={restaurantsLoading}
              >
                Load More
              </Button>
            </GridItem>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

App.defaultProps = {
  restaurantData: {
    businesses: [],
  },
  restaurantsError: null,
};


App.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired,
  restaurantData: PropTypes.shape(yelpResultsShape),
  restaurantsError: PropTypes.string,
  restaurantsLoading: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    restaurantData: fromRestaurants.getRestaurants(state),
    restaurantsError: fromRestaurants.getRestaurantsError(state),
    restaurantsLoading: fromRestaurants.getRestaurantsLoading(state),
  }),
  {
    fetchRestaurants: fromRestaurants.fetchRestaurants,
  },
)(hot(module)(App));
