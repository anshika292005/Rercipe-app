import React, { useState } from 'react';
import { Plus, X, Camera, Scan } from 'lucide-react';

const IngredientScanner = ({ ingredients, onAddIngredient, onRemoveIngredient }) => {
  const [inputValue, setInputValue] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const commonIngredients = [
    'chicken', 'beef', 'pork', 'fish', 'eggs', 'milk', 'cheese', 'butter',
    'onion', 'garlic', 'tomato', 'potato', 'carrot', 'celery', 'bell pepper',
    'rice', 'pasta', 'bread', 'flour', 'sugar', 'salt', 'pepper', 'olive oil'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddIngredient(inputValue.trim());
      setInputValue('');
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    
    setTimeout(() => {
      const randomIngredient = commonIngredients[Math.floor(Math.random() * commonIngredients.length)];
      onAddIngredient(randomIngredient);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="ingredient-scanner">
      <div className="scanner-header">
        <h2>Add Your Ingredients</h2>
        <p>Type ingredients or scan them with your camera</p>
      </div>

      <div className="input-section">
        <form onSubmit={handleSubmit} className="ingredient-form">
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter ingredient name..."
              className="ingredient-input"
            />
            <button type="submit" className="add-btn">
              <Plus size={20} />
            </button>
          </div>
        </form>

        <div className="scan-section">
          <button 
            className={`scan-btn ${isScanning ? 'scanning' : ''}`}
            onClick={handleScan}
            disabled={isScanning}
          >
            {isScanning ? <Scan size={20} /> : <Camera size={20} />}
            {isScanning ? 'Scanning...' : 'Scan Ingredient'}
          </button>
        </div>
      </div>

      <div className="ingredients-list">
        <h3>Your Ingredients ({ingredients.length})</h3>
        <div className="ingredients-grid">
          {ingredients.map(ingredient => (
            <div key={ingredient} className="ingredient-tag">
              <span>{ingredient}</span>
              <button 
                onClick={() => onRemoveIngredient(ingredient)}
                className="remove-btn"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-add">
        <h3>Quick Add</h3>
        <div className="quick-add-grid">
          {commonIngredients.filter(item => !ingredients.includes(item)).slice(0, 12).map(ingredient => (
            <button
              key={ingredient}
              onClick={() => onAddIngredient(ingredient)}
              className="quick-add-btn"
            >
              {ingredient}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientScanner;