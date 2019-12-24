import React, { useContext } from "react";
import RecipeContext from "../../context/recipeContext";

const SearchResults = () => {
  const recipeContext = useContext(RecipeContext);
  const { getRecipeDetails, searchedRecipes, cleanSearch } = recipeContext;

  if (searchedRecipes) {
    return (
      <div className="search-results">
        <ul className="search-results__box">
          <li>
            <button
              onClick={() => {
                cleanSearch();
              }}
            >
              <i className="fas fa-chevron-circle-left"></i>
            </button>
          </li>
          {searchedRecipes.map(r => (
            <li key={r.idMeal}>
              <a
                onClick={() => {
                  getRecipeDetails(r.idMeal);
                }}
              >
                {r.strMeal}
              </a>
              <p>
                {r.strCategory} / {r.strArea}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchResults;
