import React, { useState } from 'react';
import { Check, X, Download, Share2, Plus } from 'lucide-react';

const GroceryList = ({ items, onItemToggle, onRemoveItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      onItemToggle({ name: newItem.trim(), completed: false });
      setNewItem('');
    }
  };

  const exportList = () => {
    const listText = items.map(item => 
      `${item.completed ? '✓' : '○'} ${item.name}`
    ).join('\n');
    
    const blob = new Blob([listText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grocery-list.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareList = () => {
    if (navigator.share) {
      const listText = items.map(item => item.name).join('\n');
      navigator.share({
        title: 'My Grocery List',
        text: listText,
      });
    } else {
      
      const listText = items.map(item => item.name).join('\n');
      navigator.clipboard.writeText(listText);
      alert('List copied to clipboard!');
    }
  };

  const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;

  return (
    <div className="grocery-list">
      <div className="list-header">
        <h2>Grocery List</h2>
        <div className="list-stats">
          <span>{completedCount} of {totalCount} items</span>
          <div className="progress-ring">
            <div 
              className="progress-ring-fill"
              style={{ 
                strokeDashoffset: totalCount > 0 ? 
                  `${283 - (283 * completedCount) / totalCount}` : '283'
              }}
            />
          </div>
        </div>
      </div>

      <div className="list-actions">
        <button onClick={exportList} className="action-btn">
          <Download size={16} />
          Export
        </button>
        <button onClick={shareList} className="action-btn">
          <Share2 size={16} />
          Share
        </button>
      </div>

      <form onSubmit={handleAddItem} className="add-item-form">
        <div className="input-group">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item..."
            className="item-input"
          />
          <button type="submit" className="add-btn">
            <Plus size={16} />
          </button>
        </div>
      </form>

      <div className="grocery-items">
        {items.map((item, index) => (
          <div key={index} className={`grocery-item ${item.completed ? 'completed' : ''}`}>
            <button
              onClick={() => onItemToggle(item)}
              className="check-btn"
            >
              {item.completed ? <Check size={16} /> : <div className="check-circle" />}
            </button>
            <span className="item-name">{item.name}</span>
            <button
              onClick={() => onRemoveItem(item)}
              className="remove-btn"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="empty-list">
          <p>Your grocery list is empty.</p>
          <p>Add recipes to automatically generate shopping lists!</p>
        </div>
      )}
    </div>
  );
};

export default GroceryList;