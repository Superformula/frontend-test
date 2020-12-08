import * as React from "react";

import styles from "./RestaurantMedia.css";

interface Props {
  urls: string[];
}

const RestaurantMedia: React.FC<Props> = ({ urls }) => {
  return (
    <section className={styles.container}>
      {urls.map((url: string) => {
        return <div key={url} className={styles.photo} />;
      })}
    </section>
  );
};

export default RestaurantMedia;
