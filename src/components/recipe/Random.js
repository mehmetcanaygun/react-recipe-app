import React, { useContext } from "react";
import RecipeContext from "../../context/recipeContext";

const Random = () => {
  const recipeContext = useContext(RecipeContext);
  const { getRandomRecipe } = recipeContext;

  return (
    <li className="navbar__random">
      <button
        className="shadow"
        onClick={() => {
          getRandomRecipe();
        }}
      >
        <i className="fas fa-random"></i>
      </button>
    </li>
  );
};

export default Random;
