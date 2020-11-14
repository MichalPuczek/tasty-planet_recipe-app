import React, { useContext } from "react";

import recipesContext from "../../context/Recipes/RecipesContext";

// == IMPORT React Router
import { Link } from "react-router-dom";

// == IMPORT uuidv to create unique ID
import { v4 as uuidv4 } from "uuid";

// == IMPORT components
import Recipe from "../Recipe/Recipe";

// == IMPORT styles
import styles from "./Recipes.module.css";

const Recipes = ({ recipes, setDetails, activeFilters, props }) => {

  const RecipesContext = useContext(recipesContext);

  return (
    <div className={styles.wrapper}>


      {/* Filtering recipes */}
      <div className={styles["recipes-result"]}>
        <div className={styles["result-info"]}>
          <h3>Recipes</h3>
        </div>
        <div className={styles["result-recipes"]}>
          {/* {recipes.map((recipe) => { */}
          {RecipesContext.recipes.map((recipe) => {
            const cautions = recipe.recipe.cautions;

            let isActive = false;

            for (let i = 0; i < cautions.length; i++) {
              isActive = activeFilters.includes(cautions[i]);
              if (isActive) {
                break;
              }
            }

            return (
              <div className={styles["wrapper-recipe"]}>
                <Link
                  className={styles["recipes-links"]}
                  to={{
                    pathname: `/recipes/${recipe.recipe.label}`,
                    aboutProps: {
                      ingredients: recipe.recipe.ingredients,
                    },
                  }}
                  key={uuidv4()}
                  onClick={() => {
                    setDetails(recipe.recipe);
                  }}
                >
                  {/*              <Recipe
                    key={uuidv4()}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    isActive={isActive}
                  /> */}
                  <Recipe
                    key={uuidv4()}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    isActive={isActive}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
