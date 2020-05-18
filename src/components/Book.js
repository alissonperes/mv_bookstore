import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => {
  const { book } = props;
  const { id, author, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{author}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
