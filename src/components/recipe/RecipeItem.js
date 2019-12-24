import React, { useContext } from "react";
import RecipeContext from "../../context/recipeContext";

const RecipeItem = ({ recipe: { strMeal, idMeal, strCategory } }) => {
  const recipeContext = useContext(RecipeContext);
  const { getRecipeDetails } = recipeContext;

  return (
    <li className="recipe-list__item">
      <a
        onClick={() => {
          getRecipeDetails(idMeal);
        }}
      >
        {strMeal}
      </a>
      <p>({strCategory})</p>
    </li>
  );
};

export default RecipeItem;
