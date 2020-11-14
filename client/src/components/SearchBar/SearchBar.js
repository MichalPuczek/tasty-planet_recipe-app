import React, { useState, useContext } from "react";

// == IMPORT style module
import styles from './SearchBar.module.css';

import recipesContext from "../../context/Recipes/RecipesContext";

const SearchBar = ({ setRecipes, props }) => {

  const RecipesContext = useContext(recipesContext);

  // == STATE input - search
  const [search, setSearch] = useState("");

  /* API : ID and KEY */
  /*   const APP_ID = "f3869906";
    const APP_KEY = "c12e4061363b9340cdce2157fe08609c"; */

  /* API Request */
  /*   const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      props.history.push("/recipes");
      setSearch("");
    }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    /* getRecipes(); */
    RecipesContext.getRecipes(search, props);
    console.log('props', props);
  };
  return (
    <div className={styles['search-bloc']}>
      <h1>Trouvez la recette parfaite... </h1>
      <form className={styles['search-form']} onSubmit={handleSubmit}>
        <input
          className={styles['search-input']}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Indiquer un ingredient..."
        />
        <button className={styles['search-button']} type="submit">
          <i className="fas fa-search fa-2x"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
