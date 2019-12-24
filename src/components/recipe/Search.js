import React, { useState, useContext } from "react";
import RecipeContext from "../../context/recipeContext";

const Search = () => {
  const recipeContext = useContext(RecipeContext);
  const { searchRecipe } = recipeContext;

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      console.log("Error");
    } else {
      searchRecipe(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <li className="navbar__search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="shadow"
          placeholder="Search for a recipe..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" />
      </form>
    </li>
  );
};

export default Search;
