import React, { useContext } from "react";
import Navbar from "./components/layout/Navbar";
import SearchResults from "./components/layout/SearchResults";
import RecipeList from "./components/recipe/RecipeList";
import Recipe from "./components/recipe/Recipe";
import RecipeState from "./context/RecipeState";

import "./css/App.css";

function App() {
  return (
    <RecipeState>
      <div className="App">
        <Navbar />
        <SearchResults />
        <div className="recipe-wrapper container">
          <RecipeList />
          <Recipe />
        </div>
      </div>
    </RecipeState>
  );
}

export default App;
