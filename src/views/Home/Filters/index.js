import React from "react";
import "./filters.scss";

import Button from "../Button";
import Dropdown from "./Dropdown";

export default class Filters extends React.Component {
  render() {
    return (
      <div id="filters">
        <div className="controls">
          <div>Filter By:&nbsp;</div>
          <div>
            <label htmlFor="openNow">
              <input type="checkbox" checked/>
              Open Now&nbsp;  
            </label>
          </div>
          <div>
            <Dropdown />
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
        <div className="actions">
          <Button>Clear All</Button>
        </div>
      </div>
    );
  }
}
