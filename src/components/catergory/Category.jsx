import React from 'react';

const PopularCategories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div key={category._id} className="category-card">
          <img 
            src={`data:image/png;base64,${category.image}`} 
            alt={category.name} 
            className="category-image"
          />
          <h3 className="category-name">{category.name}</h3>
          <p className="restaurant-count">{category.restaurantCount} restaurants</p>
        </div>
      ))}
    </div>
  );
};

export default PopularCategories;
