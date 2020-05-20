import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
            <Book key={x.id} book={x} />
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
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
