import React, { useState } from 'react'
import AddRecipeForm from './forms/AddRecipeForm'
import RecipeTable from './tables/RecipeTable'
import EditRecipeForm from './forms/EditRecipeForm'

const App = () => {
// Data
  const recipesData = [
    { id: 1, name: 'Pizza', ingredient: 'cheese'},
    { id: 2, name: 'Spaghetti', ingredient: 'tomatoes'},
    { id: 3, name: 'Carbonara', ingredient: 'eggs'},
  ]

  const initialFormState = { id: null, name: '', ingredient: '' }

// Setting state
  const [recipes, setRecipes] = useState(recipesData)
  const [currentRecipe, setCurrentRecipe] = useState(initialFormState)
  const [editing, setEditing] = useState(false)


// CRUD operations
  const addRecipe = recipe => {
    recipe.id = recipes.length + 1
    setRecipes([...recipes, recipe])
  }

  const deleteRecipe = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
    setEditing(false)
  }

  const updateRecipe = (id, updateRecipe) => {
    setEditing(false)

    setRecipes(recipes.map(recipe => (recipe.id === id ? updateRecipe : recipe)))
  }

  const editRow = recipe => {
    setEditing(true)

    setCurrentRecipe({ id: recipe.id, name: recipe.name, ingredient: recipe.ingredient })
  }

  return (
    <div className="container">
      <h1>Awesome Recipes App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Recipe</h2>
              <EditRecipeForm
                editing={editing}
                setEditing={setEditing}
                currentRecipe={currentRecipe}
                updateRecipe={updateRecipe}
              />
            </div>
          ) : (
            <div>
                <h2>Add Recipe</h2>
                <AddRecipeForm addRecipe={addRecipe} />
            </div>
          )}
        </div>
        <div className="flex-large">
            <h2>Recipe List</h2>
            <RecipeTable recipes={recipes} editRow={editRow} deleteRecipe={deleteRecipe} />
        </div>
      </div>
    </div>
  )
}

export default App
