import React, { useState, useEffect } from 'react';
import { Clock, Users, ChefHat, Star, ShoppingCart, Search } from 'lucide-react';
import { getRecipes } from '../utils/recipes';

const RecipeFeed = ({ ingredients, preferences, onPreferencesChange, onRecipeSelect, onAddToGroceryList }) => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const allRecipes = getRecipes();
    setRecipes(allRecipes);
  }, []);

  useEffect(() => {
    let filtered = recipes.filter(recipe => {
      
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = recipe.name.toLowerCase().includes(query);
        const matchesDescription = recipe.description.toLowerCase().includes(query);
        const matchesIngredients = recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(query)
        );
        const matchesCuisine = recipe.cuisine.toLowerCase().includes(query);
        
        if (!matchesName && !matchesDescription && !matchesIngredients && !matchesCuisine) {
          return false;
        }
      }

      // Filter by available ingredients
      const matchingIngredients = recipe.ingredients.filter(ingredient =>
        ingredients.some(userIngredient => 
          ingredient.toLowerCase().includes(userIngredient) || 
          userIngredient.includes(ingredient.toLowerCase())
        )
      );
      
      if (ingredients.length > 0 && matchingIngredients.length === 0) {
        return false;
      }

      // Filter by preferences
      if (preferences.diet !== 'all' && recipe.diet !== preferences.diet) {
        return false;
      }
      if (preferences.cuisine !== 'all' && recipe.cuisine !== preferences.cuisine) {
        return false;
      }
      if (preferences.skill !== 'all' && recipe.difficulty !== preferences.skill) {
        return false;
      }

      return true;
    });

    // Sort by matching ingredients count
    filtered.sort((a, b) => {
      const aMatches = a.ingredients.filter(ingredient =>
        ingredients.some(userIngredient => 
          ingredient.toLowerCase().includes(userIngredient) || 
          userIngredient.includes(ingredient.toLowerCase())
        )
      ).length;
      const bMatches = b.ingredients.filter(ingredient =>
        ingredients.some(userIngredient => 
          ingredient.toLowerCase().includes(userIngredient) || 
          userIngredient.includes(ingredient.toLowerCase())
        )
      ).length;
      return bMatches - aMatches;
    });

    setFilteredRecipes(filtered);
  }, [recipes, ingredients, preferences, searchQuery]);

  const handleAddToGrocery = (recipe) => {
    const missingIngredients = recipe.ingredients.filter(ingredient =>
      !ingredients.some(userIngredient => 
        ingredient.toLowerCase().includes(userIngredient) || 
        userIngredient.includes(ingredient.toLowerCase())
      )
    ).map(ingredient => ({ name: ingredient, completed: false }));
    
    onAddToGroceryList(missingIngredients);
  };

  return (
    <div className="recipe-feed">
      <div className="feed-header">
        <h2>Recipe Suggestions</h2>
        <div className="search-section">
          <div className="search-input-group">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes, ingredients, or cuisine..."
              className="search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="clear-search"
              >
                ×
              </button>
            )}
          </div>
        </div>
        <div className="preferences">
          <select 
            value={preferences.diet} 
            onChange={(e) => onPreferencesChange({...preferences, diet: e.target.value})}
          >
            <option value="all">All Diets</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
          <select 
            value={preferences.cuisine} 
            onChange={(e) => onPreferencesChange({...preferences, cuisine: e.target.value})}
          >
            <option value="all">All Cuisines</option>
            <option value="italian">Italian</option>
            <option value="asian">Asian</option>
            <option value="mexican">Mexican</option>
            <option value="american">American</option>
          </select>
          <select 
            value={preferences.skill} 
            onChange={(e) => onPreferencesChange({...preferences, skill: e.target.value})}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      {searchQuery && (
        <div className="search-results-info">
          Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} 
          {searchQuery && ` for "${searchQuery}"`}
        </div>
      )}

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => {
          const matchingIngredients = recipe.ingredients.filter(ingredient =>
            ingredients.some(userIngredient => 
              ingredient.toLowerCase().includes(userIngredient) || 
              userIngredient.includes(ingredient.toLowerCase())
            )
          );

          return (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image">
                <img src={recipe.image} alt={recipe.name} />
                <div className="recipe-overlay">
                  <span className="match-count">
                    {matchingIngredients.length}/{recipe.ingredients.length} ingredients
                  </span>
                </div>
              </div>
              <div className="recipe-content">
                <h3>{recipe.name}</h3>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-meta">
                  <span><Clock size={16} />{recipe.time}</span>
                  <span><Users size={16} />{recipe.servings}</span>
                  <span><Star size={16} />{recipe.rating}</span>
                </div>
                <div className="recipe-actions">
                  <button 
                    onClick={() => onRecipeSelect(recipe)}
                    className="cook-btn"
                  >
                    <ChefHat size={16} />
                    Cook Now
                  </button>
                  <button 
                    onClick={() => handleAddToGrocery(recipe)}
                    className="grocery-btn"
                  >
                    <ShoppingCart size={16} />
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-recipes">
          <p>No recipes found matching your {searchQuery ? 'search' : 'ingredients and preferences'}.</p>
          <p>Try {searchQuery ? 'a different search term' : 'adding more ingredients'} or adjusting your preferences.</p>
        </div>
      )}
    </div>
  );
};

export default RecipeFeed;