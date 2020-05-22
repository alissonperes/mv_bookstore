import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

const CategoryFilter = props => {
  const categories = [
    'Categories',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div className="header">
      <span>BookStore CMS</span>
      <ul className="nav-list">
        <li key="categoey" className="nav-item">
          <p>Books</p>
        </li>
        <li className="nav-item">
          <select id="category" name="filter" onChange={e => props.handleChange(e)} required>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
