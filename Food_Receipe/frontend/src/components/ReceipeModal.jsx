import React from 'react';

const RecipeModal = ({ meal, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', margin: '10px 0' }} />
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Area:</strong> {meal.strArea}</p>
        <h4>Instructions</h4>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeModal;
