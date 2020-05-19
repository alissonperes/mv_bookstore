import React from 'react';
import './BooksForm.css';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <input type="text" name="author" />
      <select id="title" name="title">
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
