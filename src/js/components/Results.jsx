import React, { Component } from 'react';

import Card from './Card.jsx';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      restaurants: []
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchRestautants();
  }

  async fetchRestautants() {
    let restaurants = [],
      error = null;

    this.setState({ loading: true });

    try {
      const response = await fetch('https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=las%20vegas', {
        headers: new Headers({
          Authorization: 'Bearer iKjzqtCSUNKhDGTKO5eVp43jSZOW5rstarKcFna4g3OiU3owt4hSSsQM7qzaZkr6o-_97yDEMs9der7ovIieC-M_IoKRMNmiY-eEUalSCJaIeYI-NUfcreJPPFTOW3Yx'
      	})
      });

      if (!response.ok) {
        new Error('Unable to fetch restaurants');
      }

      const body = await response.json();
      restaurants = body.businesses;
    } catch (err) {
      error = err;
    }

    if (!this.mounted) {
      return;
    }

    this.setState({
      restaurants,
      error,
      loading: false
    });
  }

  render() {
    const {
      error,
      loading,
      restaurants
    } = this.state;

    return (
      <div className="results">
        <div className="grid-container">
          <div className="row">
            <div className="col-6">
              <h2>All Restaurants</h2>
            </div>
          </div>
          <div className="row">
            { loading && (
              <p className="loading">
                Loading...
              </p>
            ) }

            { !loading && !error && (
              <ul>
                { restaurants.map(({
                  categories,
                  id,
                  is_closed,
                  image_url,
                  name,
                  price,
                  rating
                }) => (
                  <li key={ id } className="col-3">
                    <Card
                      category={ categories[0].title }
                      closed={ is_closed }
                      image={ image_url }
                      name={ name }
                      price={ price }
                      rating={ rating }
                    />
                  </li>
                )) }
              </ul>
            ) }

            { error && (
              <pre className="error">
                { error.toString() }
              </pre>
            ) }
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
