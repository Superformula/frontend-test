import React from "react";
import Filters from './Filters';
import Divider from 'components/Divider';

export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Restaurants</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iste ratione veniam saepe repudiandae laboriosam quam culpa, eveniet ex facere esse. A accusamus explicabo qui nulla placeat ipsa, sint vero.
        </p>
        <Divider/>
        <Filters/>
        <Divider/>
      </React.Fragment>
    );
  }
}