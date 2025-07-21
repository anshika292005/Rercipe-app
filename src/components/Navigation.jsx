import React from 'react';
import { ChefHat, Search, List, ShoppingCart } from 'lucide-react';
import chefLogo from '../assets/chef-logo1.jpeg';


const Navigation = ({ currentView, onViewChange, ingredientCount, groceryCount }) => {
  const navItems = [
    { id: 'scanner', label: 'Scanner', icon: Search },
    { id: 'recipes', label: 'Recipes', icon: ChefHat },
    { id: 'grocery', label: 'Grocery', icon: ShoppingCart, count: groceryCount },
  ];

  return (
   <nav className="navigation" style={{width:300}}>
      <div className="nav-header">
        <h1 className="nav-title flex items-center space-x-2">
          <img
            src={chefLogo}
            alt="Chef Logo"
            className="h-2 w-2 object-contain"
            style={{width:50, height:50}}
          />
          <span className="text-lg font-semibold">FOODIES HUB</span>
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
