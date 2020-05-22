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
      title: '',
      category: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, category } = this.state;
    const newBook = {
      id,
      title,
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
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div className="book-form">
        {' '}
        <span>Add new book</span>
        <form onSubmit={this.handleSubmit} id="add-book-form">
          <input
            type="text"
            className="form-item"
            name="title"
            placeholder="Book title"
            onChange={this.handleChange}
            required
          />
          <select
            id="category"
            className="form-item"
            name="category"
            placeholder="Category"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              Category
            </option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button type="submit" className="form-item">
            Add book
          </button>
        </form>
      </div>
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

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
