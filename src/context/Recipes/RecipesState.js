import React, { useReducer } from "react";
import axios from "axios";

import RecipesContext from './RecipesContext';
import RecipesReducer from './RecipesReducer';

import { GET_RECIPES, ADD_RECIPE } from '../types';

const RecipesState = (props) => {
    let initialState = {
        recipes: [],
        myRecipes: [],
    };

    const [state, dispatch] = useReducer(RecipesReducer, initialState);

    /* API : ID and KEY */
    const APP_ID = "f3869906";
    const APP_KEY = "c12e4061363b9340cdce2157fe08609c";

    /* API Request */
    const getRecipes = async (search, props) => {
        try {
            let res = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            let { data } = res;
            dispatch({ type: GET_RECIPES, payload: data.hits });
            props.history.push("/recipes");
            /*   setSearch(""); */
        } catch (error) {
            console.error(error);
        }
    };

    const addRecipe = (recipe) => {
        dispatch({ type: ADD_RECIPE, payload: recipe });
    }

    return (
        <RecipesContext.Provider
            value={{
                recipes: state.recipes,
                myRecipes: state.myRecipes,
                getRecipes,
                addRecipe,
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
};

export default RecipesState;