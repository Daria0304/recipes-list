import React from 'react'

const RecipeTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Ingredients</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.recipes.length > 0 ? (
        props.recipes.map(recipe => (
          <tr key={recipe.id}>
            <td>{recipe.name}</td>
            <td>{recipe.ingredient}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button
              onClink={() => props.deleteRecipe(recipe.id)}
              className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No recipes</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default RecipeTable
