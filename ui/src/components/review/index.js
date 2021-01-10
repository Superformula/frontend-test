import React from "react";
import clsx from "clsx";
import { Title, HeaderText } from "../common/text";
import Rating from "../rating";
import './review.scss';

export default ({ avatar, name, date, rating, comment }) => {
  return (
    <section className="review">
      <img className="avatar-img" src={avatar} />
      <div className="author-details">
        <span className="reviewer-name">{name}</span>
        <span className="review-date">{date}</span>
      </div>

      <div className="rating-details">
        <Rating value={rating}/>
        <p className="comment">{comment}</p>
      </div>

    </section>
  );
};
