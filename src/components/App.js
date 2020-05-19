import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import './App.css';

const App = props => {
  const { books } = props;
  const allBooks = books.books;
  return (
    <div className="App">
      <BooksList books={allBooks} />
      <BooksForm />
    </div>
  );
};

App.defaultProps = {
  books: { books: [] },
};

App.propTypes = {
  books: PropTypes.shape(),
};

export default App;
