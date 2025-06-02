import React, { useEffect, useState } from 'react';
import './App.css';
import Splash from './components/Splash';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/ReceipeModal';
import Navbar from './components/Navbar';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      fetchRandomRecipes(6);
    }, 3000);
  }, []);

  const fetchRandomRecipes = async (count) => {
    const fetched = [];
    for (let i = 0; i < count; i++) {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await res.json();
      fetched.push(data.meals[0]);
    }
    setRecipes(fetched);
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (term.length < 2) return;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <div>
         <Navbar />
          <header>
            <h2>Find Your Favorite Recipe</h2>
            <input type="text" placeholder="Search recipes" value={searchTerm}onChange={(e) => handleSearch(e.target.value)}/>
          </header>

          <div className="recipe-container">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} onClick={setSelectedRecipe} />
              ))
            ) : (
              <p style={{ padding: '20px' }}>No recipes found.</p>
            )}
          </div>

          {selectedRecipe && (
            <RecipeModal meal={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
          )}
        </div>
      )}
    </>
  );
};

export default App;
