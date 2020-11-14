import { GET_RECIPES, ADD_RECIPE } from "../types";

export default (state, action) => {

    const { payload, type } = action;

    switch (type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
            };
        case ADD_RECIPE:
            return {
                ...state,
                myRecipes: [
                    ...state.myRecipes,
                    payload
                ],
            };
        default:
            return state;
    }
};