import React, { useState } from 'react';
import Navigation from './components/Navigation';
import IngredientScanner from './components/IngredientScanner';
import RecipeFeed from './components/RecipeFeed';
import CookingMode from './components/CookingMode';
import GroceryList from './components/GroceryList';
import './styles/App.css';

function App() {
  const [currentView, setCurrentView] = useState('scanner');
  const [ingredients, setIngredients] = useState([]);
  const [preferences, setPreferences] = useState({
    diet: 'all',
    cuisine: 'all',
    skill: 'beginner'
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [groceryItems, setGroceryItems] = useState([]);

  const handleAddIngredient = (ingredient) => {
    if (!ingredients.includes(ingredient.toLowerCase())) {
      setIngredients([...ingredients, ingredient.toLowerCase()]);
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter(item => item !== ingredient));
  };

  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentView('cooking');
  };

  const handleAddToGroceryList = (items) => {
    const newItems = items.filter(item => !groceryItems.includes(item));
    setGroceryItems([...groceryItems, ...newItems]);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'scanner':
        return (
          <IngredientScanner
            ingredients={ingredients}
            onAddIngredient={handleAddIngredient}
            onRemoveIngredient={handleRemoveIngredient}
          />
        );
      case 'recipes':
        return (
          <RecipeFeed
            ingredients={ingredients}
            preferences={preferences}
            onPreferencesChange={handlePreferencesChange}
            onRecipeSelect={handleRecipeSelect}
            onAddToGroceryList={handleAddToGroceryList}
          />
        );
      case 'cooking':
        return (
          <CookingMode
            recipe={selectedRecipe}
            onBack={() => setCurrentView('recipes')}
          />
        );
      case 'grocery':
        return (
          <GroceryList
            items={groceryItems}
            onItemToggle={(item) => {
              setGroceryItems(groceryItems.map(i => 
                i.name === item.name ? { ...i, completed: !i.completed } : i
              ));
            }}
            onRemoveItem={(item) => {
              setGroceryItems(groceryItems.filter(i => i.name !== item.name));
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navigation 
        currentView={currentView}
        onViewChange={setCurrentView}
        ingredientCount={ingredients.length}
        groceryCount={groceryItems.length}
      />
      <main className="main-content">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;