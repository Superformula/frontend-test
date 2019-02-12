import React from "react";
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

  componentDidMount() {
    
    fetch('/v3/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'Authorization': `Bearer ${process.env.YELP_KEY}`,
        'Accept-Language': "en_US"
      },
      body: `{
        search(location: "Las Vegas") {
          total,
          business {
            name,
            id,
            alias,
            rating,
            url
          }
        }
      }`,
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({
          businesses: res.data.search.business,
        });
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
