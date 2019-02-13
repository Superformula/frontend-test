import React from "react";
import "./dropdown.scss";

export default class Dropdown extends React.Component {
  render() {
    const { items, value, onChange } = this.props;

    return (
      <div className="dropdown">
        <select value={value} onChange={onChange}>
          <option default value="">
            All
          </option>
          {items.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
