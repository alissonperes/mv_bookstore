import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

const CategoryFilter = props => {
  const categories = [
    'ALL',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <select id="category" name="filter" onChange={e => props.handleChange(e)} required>
      {categories.map(cat => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
