import React, { useState } from "react";

// == IMPORT components
import HomePage from "../HomePage/HomePage";
import Nav from "../Nav/Nav";
import ResultSection from '../ResultSection/ResultSection';
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import MyRecipes from '../MyRecipes/MyRecipes';

// == IMPORT React Router
import { Switch, Route } from "react-router-dom";

// == IMPORT style
/* import styles from "./App.module.css"; */

// == IMPORT Global State
import RecipesState from "../../context/Recipes/RecipesState";
import UserState from "../../context/User/UserState";

const App = () => {

  /* State = data from l'API */
  const [recipes, setRecipes] = useState([]);
  const [details, setDetails] = useState({});

  return (
    <UserState>
      <RecipesState>
        <div className="app">
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              component={(props) => (
                <HomePage setRecipes={setRecipes} props={props} />
              )}
            />
            <Route
              path="/recipes"
              exact
              component={(props) => <ResultSection recipes={recipes} setDetails={setDetails} props={props} />}
            />
            <Route
              path="/recipes/:id"
              exact
              component={(props) => <RecipeDetail details={details} props={props} />}
            />
            <Route
              path="/mes-recettes"
              exact
              component={(props) => <MyRecipes />}
            />
          </Switch>
        </div>
      </RecipesState>
    </UserState>
  );
};

export default App;
