import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import './BooksForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.books.length + 1, // eslint-disable-line
      author: '',
      category: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, author, category } = this.state;
    const newBook = {
      id,
      author,
      category,
    };

    this.setState(prevState => ({ id: prevState.id + 1 }));
    this.props.saveBook(newBook); // eslint-disable-line
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const categories = [
      '',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    return (
      <form onSubmit={this.handleSubmit} id="add-book-form">
        <input type="text" name="author" onChange={this.handleChange} required />
        <select id="category" name="category" onChange={this.handleChange} required>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveBook: book => dispatch(createBook(book)),
});

BooksForm.defaultProps = {
  books: [],
};

BooksForm.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()),
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
