import React, { useState, useEffect } from 'react';

const EditRecipeForm = props => {
  const [recipe, setRecipe] = useState(props.currentRecipe)

  useEffect(() => {
    setRecipe(props.currentRecipe)
    }, [ props ])

  const handleInputChange = event => {
    const { name, value } = event.targer

    setRecipe({ ...recipe, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateRecipe(recipe.id, recipe)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={recipe.name} onChange={handleInputChange} />
      <label>Ingredients</label>
      <input type="text" name="ingredient" value={recipe.ingredient} onChange={handleInputChange} />
      <button>Update Recipe</button>
      <button onClink={() => props.setEditing(false)} className="button muted-button">
      Cancel
      </button>
    </form>
  )
}

export default EditRecipeForm;
