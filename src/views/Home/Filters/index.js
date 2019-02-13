import React from "react";
import "./filters.scss";

import Button from "../Button";
import Dropdown from "./Dropdown";

export default class Filters extends React.Component {
  render() {
    const {
      openNow,
      price,
      selectedCategory,
      categories,
      onChange
    } = this.props;

    return (
      <div id="filters">
        <div className="controls">
          <div>Filter By:&nbsp;</div>
          <div>
            <label htmlFor="openNow">
              <input
                id="openNow"
                type="checkbox"
                onChange={e => onChange("openNow", e.target.checked)}
                checked={openNow}
              />
              Open Now&nbsp;
            </label>
          </div>
          <div>
            <Dropdown
              value={price}
              onChange={value => onChange("price", value)}
              items={["$", "$$", "$$$", "$$$$"]}
            />
          </div>
          <div>
            <Dropdown
              value={selectedCategory}
              onChange={value => onChange("selectedCategory", value)}
              items={categories.map(cat => cat.title)}
            />
          </div>
        </div>
        <div className="actions">
          <Button>Clear All</Button>
        </div>
      </div>
    );
  }
}
