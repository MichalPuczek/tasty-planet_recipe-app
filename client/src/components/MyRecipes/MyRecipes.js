import React, { useContext } from 'react'

import Recipe from '../Recipe/Recipe';

import { Link } from 'react-router-dom';

// == IMPORT uuidv to create unique ID
import { v4 as uuidv4 } from "uuid";

import recipesContext from "../../context/Recipes/RecipesContext";

import styles from './MyRecipes.module.css';

const MyRecipes = () => {

    const RecipesContext = useContext(recipesContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.recipes}>
                <div className={styles["recipes-title"]}>
                    <p>Mes recettes</p>
                </div>
                <div className={styles["recipes-list"]}>
                    {
                        RecipesContext.myRecipes.map((recipe) => {
                            return (
                                <Link
                                    className={styles["recipes-links"]}
                                    to={{
                                        pathname: `/recipes/${recipe.label}`,
                                        aboutProps: {
                                            ingredients: recipe.ingredients,
                                        },
                                    }}
                                    key={uuidv4()}
                                /*    onClick={() => {
                                       setDetails(recipe.recipe);
                                   }} */
                                >
                                    <Recipe
                                        key={uuidv4()}
                                        title={recipe.label}
                                        image={recipe.image}
                                    /*   isActive={isActive} */
                                    />
                                </Link>

                            )
                        })
                    }
                </div>
                <div className={styles["recipe-buttons"]}>
                    <Link to="/recipes">
                        <button>Retournez au résultat</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MyRecipes

