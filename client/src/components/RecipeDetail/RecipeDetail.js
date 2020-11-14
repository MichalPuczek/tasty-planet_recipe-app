import React, { useContext } from "react";
import { Link } from "react-router-dom";

import recipesContext from "../../context/Recipes/RecipesContext";

// == IMPORT styles
import styles from "./RecipeDetail.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

const RecipeDetail = ({ props, details }) => {
  const RecipesContext = useContext(recipesContext);

  /* const { ingredients } = props.location.aboutProps;
    console.log(ingredients); */
  const { ingredients } = details;

  return (
    <div className={styles.wrapper}>
      <img src={details.image} className={styles["recipe-img"]} />
      <div className="recipe-title">
        <h3>{details.label}</h3>
      </div>
      <div className={styles["recipe-info"]}>
        <p>Kcal : {Math.ceil(`${details.calories}`)}</p>
        <p>
          Contient :
          {details.cautions.map((caution) => {
          return <span> {caution}</span>;
        })}
        </p>
      </div>
      <div className={styles.recipe}>
        <p>Ingrédients</p>
        {/*    {         {
                ingredients.map((ingredient) => {
                    return (
                        <p key={ingredient.text}>{ingredient.text}</p>
                    )
                })
            }} */}

        {ingredients.map((ingredient) => {
          return <p>{ingredient.text}</p>;
        })}
      </div>
      <div className={styles["recipe-buttons"]}>
        <Link to="/recipes">
          <button>Retournez au résultat</button>
        </Link>
        <button
          onClick={() => {
            RecipesContext.addRecipe(details);
          }}
        >
          Ajoutez aux recettes
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
