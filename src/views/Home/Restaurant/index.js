import React from "react";
import "./restaurant.scss";

import Button from "../Button";

export default class Restaurant extends React.Component {
  render() {
    return (
      <div className="restaurant">
        <img className="photo" src="https://placehold.it/300x200" alt="a placeholder image"/>
        <h3>
          Very long Name restaurants Number 1 in list
        </h3>
        <div>
          *****
        </div>
        <div className="detail">
          <div>
          Category - $$$$
          </div>
          <div>
            OPEN NOW
          </div>
        </div>
        <Button to="/detail">LEARN MORE</Button>
        
      </div>
    );
  }
}
