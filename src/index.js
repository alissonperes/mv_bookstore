import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import books from './reducers/books';

// const get = () => localStorage.getItem('books');
// const set = books => localStorage.setItem('Books', JSON.stringify(books));

const defaultBooks = {
  books: [
    { id: Math.floor(Math.random() * Math.floor(40)), author: 'Author0', category: 'Horror' },
    { id: Math.floor(Math.random() * Math.floor(40)), author: 'Author1', category: 'Horror' },
  ],
};

const store = createStore(books, defaultBooks);

// get() || set(store.getState());

document.title = 'Magicians books';

ReactDOM.render(
  <Provider store={store}>
    <App books={store.getState()} />
  </Provider>,
  document.getElementById('root'),
);
