import React from "react";
import Rating from "../../shared/Rating";

import styles from "./Reviews.css";
import { IRestaurantDetail, IReview } from "../../../declarations";

interface Props {
  restaurant: IRestaurantDetail;
}

const Reviews: React.FC<Props> = ({ restaurant: { review_count, reviews } }) => {
  return (
    <section className={styles.marginLeft}>
      <div className={styles.reviewsCount}>{`${review_count} Reviews`}</div>
      {reviews.map((review: IReview) => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );
};

interface ReviewProps {
  review: IReview;
}

const Review: React.FC<ReviewProps> = ({ review: { text, rating, time_created, user } }) => {
  return (
    <div className={styles.review}>
      <div className={styles.user}>
        <img src={user.image_url} alt="user" className={styles.userImg} />
        <div className={styles.userInfo}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.userDate}>{time_created}</div>
        </div>
      </div>
      <div className={styles.reviewInfo}>
        <div className={styles.rating}>
          <Rating rating={rating} />
        </div>
        <p className={styles.reviewText}>{text}</p>
      </div>
    </div>
  );
};

export default Reviews;
