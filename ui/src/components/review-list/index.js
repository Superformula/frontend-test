import React from "react";
import Review from '../review';
import './review-list.scss';

export default ({ reviewCount, items }) => {
  return (
    <section className="review-list-container">
      <span className="review-count">{reviewCount} Reviews</span>
      <ul className="review-items">
        {items.map((review)=>(
          <Review avatar={review.avatar}
          name={review.name}
          date={review.date}
          rating={review.rating}
          comment={review.comment} />
        ))}
      </ul>
    </section>
  );
};
