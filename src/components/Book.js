import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => {
  const { book } = props;
  const { id, title, category } = book;

  return (
    <tr className="book-item">
      <td className="book-title">{title}</td>
      <td className="book-category">{category}</td>
      <td className="book-remove" onClick={() => props.onClick(id)}>
        <span>Remove</span>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
