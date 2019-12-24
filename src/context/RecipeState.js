import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./recipeContext";
import RecipeReducer from "./recipeReducer";
import {
  GET_RECIPES,
  GET_RECIPE_DETAILS,
  GET_RANDOM_RECIPE,
  SEARCH_RECIPE,
  CLEAN_SEARCH,
  ADD_RECIPE,
  REMOVE_RECIPE,
  SET_LOADING
} from "./types";

const RecipeState = props => {
  const initialState = {
    recipes: [],
    recipe: null,
    randomRecipe: null,
    searchedRecipes: null,
    loading: false
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  // Get recipes
  const getRecipes = async () => {
    setLoading();

    const res = await axios.get("./data/recipes.json");

    dispatch({
      type: GET_RECIPES,
      payload: res.data
    });
  };

  // Get Recipe Details
  const getRecipeDetails = async id => {
    setLoading();

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    dispatch({
      type: GET_RECIPE_DETAILS,
      payload: res.data
    });
  };

  // Get Random Recipe
  const getRandomRecipe = async () => {
    setLoading();

    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    dispatch({
      type: GET_RANDOM_RECIPE,
      payload: res.data
    });
  };

  // Search Recipe
  const searchRecipe = async text => {
    setLoading();

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );

    if (res.data.meals === null) {
      alert("Recipe is not found.");
    }

    dispatch({
      type: SEARCH_RECIPE,
      payload: res.data.meals
    });
  };

  // Add Recipe
  const addRecipe = recipe => {
    dispatch({
      type: ADD_RECIPE,
      payload: recipe
    });
  };

  // Remove Recipe
  const removeRecipe = recipe => {
    dispatch({
      type: REMOVE_RECIPE,
      payload: recipe
    });
  };

  // Clean Search
  const cleanSearch = () => {
    dispatch({
      type: CLEAN_SEARCH,
      payload: null
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        recipe: state.recipe,
        randomRecipe: state.randomRecipe,
        searchedRecipes: state.searchedRecipes,
        loading: state.loading,
        getRecipes,
        getRecipeDetails,
        getRandomRecipe,
        addRecipe,
        removeRecipe,
        searchRecipe,
        cleanSearch
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
