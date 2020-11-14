import React from "react";

import styles from "./FiltersBar.module.css";

/* Making buttons for each allergy */
const FiltersBar = ({ allergies, activeFilters, handleUpdateAllergies }) => {
  return (
    <div className={styles["recipes-filters"]}>
      <div className={styles["filters-info"]}>
        <h3>Filters</h3>
      </div>
      <div className={styles["filters-buttons"]}>
        {allergies.map((aller) => {
          let active = activeFilters.includes(aller);
          console.log('active', active);
          return <button className={active ? `${styles["button--active"]}` : `${styles.button}`} onClick={handleUpdateAllergies}>{aller}</button>;
        })}
      </div>
    </div>
  );
};

export default FiltersBar;
