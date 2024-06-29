import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();

  const recipe = {
    id,
    title: 'Grilled Chicken Salad',
    description: 'A delicious and healthy grilled chicken salad with mixed greens, tomatoes, cucumbers, and a light vinaigrette dressing.',
    ingredients: [
      '2 chicken breasts',
      '1 cup mixed greens',
      '1 tomato, chopped',
      '1 cucumber, sliced',
      '2 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      'Salt and pepper to taste',
    ],
    steps: [
      'Season the chicken breasts with salt and pepper.',
      'Grill the chicken over medium heat until fully cooked.',
      'In a large bowl, mix the greens, tomatoes, and cucumbers.',
      'Slice the grilled chicken and add it to the salad.',
      'In a small bowl, whisk together the olive oil and balsamic vinegar to make the dressing.',
      'Drizzle the dressing over the salad and toss to combine.',
      'Serve immediately and enjoy!',
    ],
    image: 'https://via.placeholder.com/150',
    author: {
      name: 'John Doe',
      profilePic: 'https://via.placeholder.com/50',
      profileLink: '/profile/johndoe'
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-base-100 shadow-xl">
        <figure className="w-full"><img src={recipe.image} alt={recipe.title} className="w-full h-auto object-cover" /></figure>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-primary mb-4">{recipe.title}</h2>
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <img src={recipe.author.profilePic} alt={recipe.author.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <p className="text-lg font-semibold">{recipe.author.name}</p>
              <Link to={recipe.author.profileLink} className="text-info">View Profile</Link>
            </div>
          </div>
          <p className="text-lg mb-4">{recipe.description}</p>
          <div>
            <h3 className="text-xl font-bold mt-4">Ingredients</h3>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-4">Steps</h3>
            <ol className="list-decimal list-inside">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
