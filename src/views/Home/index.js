import React from "react";
import { fetchYelp } from 'fetchYelp';

import Filters from "./Filters";
import Divider from "components/Divider";
import Button from "./Button";
import Restaurant from "./Restaurant";

import "./home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };
  }

  async componentDidMount() {

    const searchRes = await fetchYelp(`
      {
        search(location: "Las Vegas") {
          total
          business {
            name
            id
            alias
            rating
            url
            price
            photos
          }
        }
      }
    `);

    this.setState({
      businesses: searchRes.search.business,
    });
  }

  render() {
    const { businesses } = this.state;

    return (
      <div id="home">
        <h1 className="page-padding">Restaurants</h1>
        <p className="page-padding">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          iste ratione veniam saepe repudiandae laboriosam quam culpa, eveniet
          ex facere esse. A accusamus explicabo qui nulla placeat ipsa, sint
          vero.
        </p>
        <Divider />
        <Filters />
        <Divider />
        <h2 className="page-padding">All Restaurants</h2>
        <div className="page-padding">
          <div className="search-results">
            {businesses.map(business => (
              <Restaurant key={business.id} restaurant={business} />
            ))}
          </div>
        </div>
        <div className="loadmore-container">
          <Button>LOAD MORE</Button>
        </div>
      </div>
    );
  }
}
