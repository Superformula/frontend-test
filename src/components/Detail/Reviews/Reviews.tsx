import React from "react";
import Rating from "components/shared/Rating";

import styles from "./Reviews.css";

const Reviews: React.FC = () => {
  return (
    <section className={styles.marginLeft}>
      <div className={styles.reviewsCount}>321 Reviews</div>
      <Review />
    </section>
  );
};

const Review: React.FC = () => {
  return (
    <div className={styles.review}>
      <div className={styles.user}>
        <div className={styles.userImg} />
        <div className={styles.userInfo}>
          <div className={styles.userName}>Mary M.</div>
          <div className={styles.userDate}>10/9/2018</div>
        </div>
      </div>
      <div className={styles.reviewInfo}>
        <div className={styles.rating}>
          <Rating rating={3.5} />
        </div>
        <p className={styles.reviewText}>
          Cute atmosphere and very friendly workers! It even gets pretty busy during weekday lunch.
          I got the kale salad which I thought was just OK. It was a bit salty for me. I also wanted
          a piece of bread because they look so delicious, but you have to pay extra for that. The
          person that I was with got the kimchi fried rice. He liked it, but Im Korean and I make
          mine way better. I dont really get the hype, but Ill come back for dinner if the wait isnt
          too long.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
