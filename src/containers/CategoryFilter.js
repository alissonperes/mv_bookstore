import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import './CategoryFilter.css';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this.props);
    this.props.changeFilter(e.target.value);
  }

  render() {
    const categories = [
      'ALL',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    return (
      <select id="category" name="filter" onChange={this.handleChange} required>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
