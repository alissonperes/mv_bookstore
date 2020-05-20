import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import './BooksForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      category: '',
    };

    this.addBook = this.addBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addBook(e) {
    e.preventDefault();
    const { books } = this.props;
    const { author, category } = this.state;
    const newBook = {
      id: books.length + 1,
      author,
      category,
    };
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
      <form onSubmit={this.addBook} id="add-book-form">
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

function mapDispatchToProps(dispatch) {
  return {
    saveBook: book => dispatch(createBook(book)),
  };
}

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
