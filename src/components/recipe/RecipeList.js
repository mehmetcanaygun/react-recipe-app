import React, { useEffect, useContext } from "react";
import RecipeItem from "./RecipeItem";
import Spinner from "../layout/Spinner";
import RecipeContext from "../../context/recipeContext";

const RecipeList = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, getRecipes } = recipeContext;

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="recipe-list shadow">
      {recipes.map(recipe => (
        <RecipeItem key={recipe.idMeal} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;
