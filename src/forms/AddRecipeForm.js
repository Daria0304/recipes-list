import React, { useState } from 'react';

const AddRecipeForm = props => {
  const initialFormState = { id: null, name: '', ingredient:'' }
  const [recipe, setRecipe] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setRecipe({ ...recipe, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!recipe.name || !recipe.ingredient) return

        props.addRecipe(recipe)
      setRecipe(initialFormState)
      }}
    >

      <label>Name</label>
      <input type="text" name="name" value={recipe.name} onChange={handleInputChange} />
      <label>Ingredients</label>
      <input type="text" name="ingredient" value={recipe.ingredient} onChange={handleInputChange} />
      <button>Add New Recipe</button>
    </form>
  )
}

export default AddRecipeForm;
