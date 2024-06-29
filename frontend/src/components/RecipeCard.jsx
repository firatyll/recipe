import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full sm:w-80 lg:w-96">
      <figure><img src={recipe.image} alt={recipe.title} className="w-full h-auto object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title">{recipe.title}</h2>
        <p>{recipe.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
