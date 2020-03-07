import React, { useState } from 'react'
import RecipeTable from './tables/RecipeTable'

const App = () => {
  const recipeData = [
    { id: 1, name: 'Pizza', ingredient: 'cheese'},
    { id: 2, name: 'Spaghetti', ingredient: 'tomatoes'},
    { id: 3, name: 'Carbonara', ingredient: 'eggs'},
  ]

  const [recipes, setRecipes] = useState(recipeData)

  return (
    <div className="container">
      <h1>Awsome Recipes App</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Recipe</h2>
        </div>
        <div className="flex-large">
          <h2>Recipe List</h2>
          <RecipeTable recipes={recipes} />
        </div>
      </div>
    </div>
  )
}

export default App
