import React, { useEffect, useContext } from "react";

import userContext from "../../context/User/UserContext";

// == IMPORT components
import SearchBar from "../SearchBar/SearchBar";

// == IMPORT style
import styles from "./HomePage.module.css";

const HomePage = ({ setRecipes, props }) => {

  const UserContext = useContext(userContext);

  useEffect(() => {
    UserContext.checkAuth();
  }, []);


  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-search-bar"]}>
        <SearchBar setRecipes={setRecipes} props={props} />
      </div>
      <div className={styles["wrapper-background"]}></div>
    </div>
  );
};

export default HomePage;
