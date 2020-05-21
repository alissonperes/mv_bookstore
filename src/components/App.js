import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import CategoryFilter from '../containers/CategoryFilter';
import './App.css';

const App = () => (
  <div className="App">
    <CategoryFilter />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
