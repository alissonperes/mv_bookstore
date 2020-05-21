import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import books from './reducers/books';

const defaultBooks = {
  books: [
    { id: 1, author: 'Author0', category: 'Horror' },
    { id: 2, author: 'Author1', category: 'Horror' },
  ],
  filter: 'ALL',
};

const store = createStore(books, defaultBooks);

document.title = 'Magicians books';

ReactDOM.render(
  <Provider store={store}>
    <App books={store.getState()} />
  </Provider>,
  document.getElementById('root'),
);
