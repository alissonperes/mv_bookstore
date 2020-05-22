import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => {
  const { book } = props;
  const { id, title, category } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td onClick={() => props.onClick(id)}>X</td>
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
