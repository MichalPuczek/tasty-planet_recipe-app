import React from "react";

// == IMPORT CSS module
import styles from "./Recipe.module.css";

const Recipe = ({ title, image, isActive }) => {
  return (
    /*    <div className={styles.recipe`${isActive && 'is-hidden'}`}> */
    <div className={isActive ? `${styles["is-hidden"]}` : `${styles.recipe}`}>
      <div className={styles["recipe-image"]}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles["recipe-info"]}>
        <h2>{title}</h2>
      </div>
    </div >
  );
};

export default Recipe;
