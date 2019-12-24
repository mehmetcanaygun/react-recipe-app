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

export default (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      };
    case GET_RECIPE_DETAILS:
      return {
        ...state,
        recipe: action.payload.meals,
        randomRecipe: null,
        searchedRecipes: null,
        loading: false
      };
    case GET_RANDOM_RECIPE:
      return {
        ...state,
        randomRecipe: action.payload.meals[0],
        recipe: action.payload.meals,
        loading: false
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        searchedRecipes: action.payload,
        loading: false
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(r => r.idMeal !== action.payload.idMeal)
      };
    case CLEAN_SEARCH:
      return {
        ...state,
        searchedRecipes: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
