import React, { useContext } from "react";
import RecipeContext from "../../context/recipeContext";

const Recipe = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes, recipe, addRecipe, removeRecipe } = recipeContext;

  let ingredients = [];
  let measures = [];

  // Return an array of ingredients and measures
  const fixIngredients = () => {
    for (let [key, value] of Object.entries(recipe[0])) {
      if (key.includes("Ingredient") && value) {
        ingredients.push(value);
      }
      if (key.includes("Measure") && value) {
        measures.push(value);
      }
    }

    let ingArr = [];

    for (let i = 0; i < ingredients.length; i++) {
      let item = `${ingredients[i]}: ${measures[i]}`;
      ingArr.push(item);
    }

    return ingArr.map((item, index) => <li key={index}>{item}</li>);
  };

  // Decide which button to show - add or remove
  const addOrRemoveBtn = () => {
    let showAddBtn = true;
    recipes.forEach(r => {
      if (r.idMeal === recipe[0].idMeal) {
        showAddBtn = false;
      }
    });
    return showAddBtn;
  };

  if (!recipe) {
    return null;
  } else {
    return (
      <div className="recipe shadow">
        <div className="recipe__detail">
          <img src={recipe[0].strMealThumb} className="shadow" alt="" />
          <div className="recipe__detail__info">
            <p className="meal-name">{recipe[0].strMeal}</p>
            <span className="meal-category">{recipe[0].strCategory} -</span>
            <span className="meal-area"> {recipe[0].strArea}</span>
          </div>
          {addOrRemoveBtn() ? (
            <button
              id="add-btn"
              className="shadow"
              onClick={() => {
                addRecipe(recipe[0]);
              }}
            >
              <i className="fas fa-plus"></i> ADD
            </button>
          ) : (
            <button
              id="remove-btn"
              className="shadow"
              onClick={() => {
                removeRecipe(recipe[0]);
              }}
            >
              <i className="fas fa-minus"></i> REMOVE
            </button>
          )}
          <hr />
          <ul>{fixIngredients()}</ul>
        </div>
        <div className="recipe__instructions">
          <h2>
            How to cook <span>{recipe[0].strMeal}</span>?
          </h2>
          {recipe[0].strInstructions}
          <hr />
          <a href={recipe[0].strYoutube} target="_blank">
            Click to see how to cook {recipe[0].strMeal}!{" "}
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    );
  }
};

export default Recipe;
