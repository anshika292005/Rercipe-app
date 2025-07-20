import React from 'react';
import { ChefHat, Search, List, ShoppingCart } from 'lucide-react';

const Navigation = ({ currentView, onViewChange, ingredientCount, groceryCount }) => {
  const navItems = [
    { id: 'scanner', label: 'Scanner', icon: Search },
    { id: 'recipes', label: 'Recipes', icon: ChefHat },
    { id: 'grocery', label: 'Grocery', icon: ShoppingCart, count: groceryCount },
  ];

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1 className="nav-title">
          <ChefHat size={24} />
          Smart Kitchen
        </h1>
        {ingredientCount > 0 && (
          <span className="ingredient-count">{ingredientCount} ingredients</span>
        )}
      </div>
      <div className="nav-items">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => onViewChange(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
              {item.count > 0 && <span className="nav-count">{item.count}</span>}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;