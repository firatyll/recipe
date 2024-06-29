import React from 'react';
import Slider from 'react-slick';
import RecipeCard from '../components/RecipeCard';

const Home = () => {

  const followedRecipes = [
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
  ];

  const recommendedRecipes = [
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
  ];

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
      <h1 className="text-3xl font-bold mb-4 text-primary">Followed Recipes</h1>
      <Slider {...sliderSettings} className="mb-4">
        {followedRecipes.map((recipe) => (
          <div key={recipe.id} className="px-2">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </Slider>
      <h1 className="text-3xl font-bold my-4 text-primary">Recommended Recipes</h1>
      <Slider {...sliderSettings}>
        {recommendedRecipes.map((recipe) => (
          <div key={recipe.id} className="px-2">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
