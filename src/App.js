import React, { useState } from 'react'
import AddRecipeForm from './forms/AddRecipeForm'
import RecipeTable from './tables/RecipeTable'

const App = () => {
  const recipeData = [
    { id: 1, name: 'Pizza', ingredient: 'cheese'},
    { id: 2, name: 'Spaghetti', ingredient: 'tomatoes'},
    { id: 3, name: 'Carbonara', ingredient: 'eggs'},
  ]

// Setting state
  const [recipes, setRecipes] = useState(recipeData)


// CRUD operations
  const addRecipe = recipe => {
    recipe.id = recipes.length + 1
    setRecipes([...recipes, recipe])
  }

  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <div className="container">
      <h1>Awsome Recipes App</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Recipe</h2>
          <AddRecipeForm addRecipe={addRecipe} />
        </div>
        <div className="flex-large">
          <h2>Recipe List</h2>
          <RecipeTable recipes={recipes} deleteRecipe={deleteRecipe} />
        </div>
      </div>
    </div>
  )
}

export default App
