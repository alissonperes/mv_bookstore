import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import './BooksList.css';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;

  return (
    <div className="BooksList">
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(x => (
            <Book key={x.id} book={x} onClick={props.removeBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()),
  removeBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeBook: bookIndex => dispatch(removeBook(bookIndex)),
});

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
