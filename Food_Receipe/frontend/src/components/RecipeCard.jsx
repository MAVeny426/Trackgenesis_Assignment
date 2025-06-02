import React from 'react';

const ReceipeCard = ({recipe , onClick})=>{
  return (
    <div className='receipe-card' onClick={() =>onClick(recipe)}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
        <h3>{recipe.strMeal}</h3>
    </div>
  )

}
export default ReceipeCard;