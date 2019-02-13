import React from "react";
import "./dropdown.scss";

export default class Dropdown extends React.Component {

  render() {
    const { items } = this.props;

    return (
      <div className="dropdown">
        <select name="" id="">
          <option default value="">All</option>
          {items.map(item => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}