import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import books from './reducers/index';

const defaultBooks = {
  books: [
    { id: 1, title: 'Author0', category: 'Action' },
    { id: 2, title: 'Author1', category: 'Biography' },
    { id: 3, title: 'Author2', category: 'History' },
    { id: 4, title: 'Author3', category: 'Horror' },
    { id: 5, title: 'Author4', category: 'Kids' },
    { id: 6, title: 'Author5', category: 'Learning' },
    { id: 7, title: 'Author6', category: 'Sci-Fi' },
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
