import React from "react";
import _uniq from "lodash/uniq";
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
      onChange,
      isDirty,
      resetForm,
    } = this.props;

    const cleanCategories = _uniq(categories.map(cat => cat.title));

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
              placeholder="Price"
              value={price}
              onChange={e => onChange("price", e.target.value)}
              items={["$", "$$", "$$$", "$$$$"]}
            />
          </div>
          <div>
            <Dropdown
              placeholder="Category"
              value={selectedCategory}
              onChange={e => onChange("selectedCategory", e.target.value)}
              items={cleanCategories}
            />
          </div>
        </div>
        <div className="actions">
          <Button onClick={resetForm} disabled={!isDirty}>Clear All</Button>
        </div>
      </div>
    );
  }
}
