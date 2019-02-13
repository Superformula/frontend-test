import React from "react";
import "./detail.scss";
import Divider from "components/Divider";

export default class Detail extends React.Component {
  state = {
    business: null,
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    const { business } = this.state;

    if (!business) return null;

    return (
      <div className="page" id="detail">
        <h1 className="page-padding">Restaurants</h1>
        <p className="page-padding">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          iste ratione veniam saepe repudiandae laboriosam quam culpa, eveniet
          ex facere esse. A accusamus explicabo qui nulla placeat ipsa, sint
          vero.
        </p>
        <Divider />
      </div>
    );
  }
}
