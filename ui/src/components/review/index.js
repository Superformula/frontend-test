import React from "react";
import clsx from "clsx";
import { Title, HeaderText } from "../common/text";
import Rating from "../rating";
import './review.scss';

export default ({ avatar, name, date, rating, comment }) => {
  return (
    <section className="review">
      <img className="avatar-img" src={avatar} />
      <div>
        {name}
        {date}
      </div>

      <div>
        <Rating value={rating}/>
        {comment}
      </div>

    </section>
  );
};
