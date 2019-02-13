import React from "react";
import "./dropdown.scss";

export default class Dropdown extends React.Component {
  render() {
    const { items, value, onChange, placeholder } = this.props;

    return (
      <div className="dropdown">
        <select value={value} onChange={onChange}>
          <option value="">
            {placeholder}
          </option>
          <option value="">
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
