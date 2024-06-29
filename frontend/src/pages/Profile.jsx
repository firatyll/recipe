import React from 'react';
import Slider from 'react-slick';
import RecipeCard from '../components/RecipeCard';

const Profile = () => {

  const user = {
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/150',
    sharedRecipes: [
      {
        id: 1,
        title: 'Grilled Chicken Salad',
        description: 'A delicious and healthy grilled chicken salad.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        title: 'Protein Smoothie',
        description: 'A high-protein smoothie to start your day.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        title: 'Quinoa Salad',
        description: 'A nutritious quinoa salad with fresh vegetables.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        title: 'Avocado Toast',
        description: 'A simple and delicious avocado toast recipe.',
        image: 'https://via.placeholder.com/150',
      },
    ],
    favoriteRecipes: [
      {
        id: 5,
        title: 'Banana Pancakes',
        description: 'Fluffy banana pancakes with a hint of vanilla.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        title: 'Chia Pudding',
        description: 'Healthy chia pudding with almond milk and honey.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 7,
        title: 'Vegan Burger',
        description: 'Delicious vegan burger with black beans and spices.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 8,
        title: 'Smoothie Bowl',
        description: 'A refreshing smoothie bowl with fresh fruits.',
        image: 'https://via.placeholder.com/150',
      },
    ],
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img src={user.profilePic} alt={user.name} className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-3xl font-bold text-primary mb-4">{user.name}</h1>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-primary mb-2">Shared Recipes</h2>
        <Slider {...sliderSettings} className="mb-4">
          {user.sharedRecipes.map((recipe) => (
            <div key={recipe.id} className="px-2">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-primary mb-2">Favorite Recipes</h2>
        <Slider {...sliderSettings}>
          {user.favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="px-2">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Profile;
