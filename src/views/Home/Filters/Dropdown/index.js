import React from "react";
import "./dropdown.scss";

export default class Dropdown extends React.Component {

  render() {
    return (
      <div className="dropdown">
        <select name="" id="">
          <option default value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    );
  }
}