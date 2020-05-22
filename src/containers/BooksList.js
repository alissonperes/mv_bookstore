import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import './BooksList.css';
import Book from '../components/Book';

const BooksList = props => {
  const { books, filter } = props;
  const allBooks = [];

  if (filter === 'ALL') {
    books.map(x => allBooks.push(<Book key={x.id} book={x} onClick={props.removeBook} />));
  } else {
    books
      .filter(x => x.category === filter)
      .forEach(y => allBooks.push(<Book key={y.id} book={y} onClick={props.removeBook} />));
  }

  const handleFilterChange = e => {
    props.changeFilter(e.target.value);
  };

  return (
    <div className="BooksList">
      <CategoryFilter handleChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{allBooks}</tbody>
      </table>
    </div>
  );
};

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()),
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeBook: bookIndex => dispatch(removeBook(bookIndex)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
