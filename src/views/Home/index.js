import React from "react";
import Filters from "./Filters";
import Divider from "components/Divider";
import Button from "./Button";
import Restaurant from "./Restaurant";

import "./home.scss";

export default class Home extends React.Component {
  render() {
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
            {[1, 2, 3, 4, 5, 6, 7].map(number => (
              <Restaurant key={number} />
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
