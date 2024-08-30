import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Lama dev Here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="feature" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
            purus eu mauris accumsan, ac pretium ligula sodales. Sed ac
            sollicitudin sem. Aliquam luctus erat eget urna interdum lobortis.
            Nulla facilisi. Nunc et risus metus. Pellentesque condimentum, est
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
