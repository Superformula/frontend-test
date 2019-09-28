import React from "react";
import PropTypes from "prop-types";
import "./CardList.scss";

const CardList = props => {
  return (
    <ul className="cardlist-list">
      {props.children.map((child, i) => (
        <li className="cardlist-list-item" key={i}>
          {child}
        </li>
      ))}
    </ul>
  );
};

CardList.protoTypes = {
  children: PropTypes.node
};

export default CardList;
