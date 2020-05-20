import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import books from './reducers/books';

const get = () => JSON.parse(localStorage.getItem('Books'));
const set = books => localStorage.setItem('Books', JSON.stringify(books));

const library = () => {
  if (get()) {
    return get();
  }
  const defaultBooks = {
    books: [
      { id: Math.floor(Math.random() * Math.floor(40)), author: 'Author0', category: 'Horror' },
      { id: Math.floor(Math.random() * Math.floor(40)), author: 'Author1', category: 'Horror' },
    ],
  };
  set(defaultBooks);
  return defaultBooks;
};

const store = createStore(books, library());

document.title = 'Magicians books';

ReactDOM.render(
  <Provider store={store}>
    <App books={store.getState()} />
  </Provider>,
  document.getElementById('root'),
);
