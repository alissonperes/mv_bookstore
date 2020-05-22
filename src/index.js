import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import books from './reducers/index';

const defaultBooks = {
  books: [
    { id: 1, title: 'Title 0', category: 'Action' },
    { id: 2, title: 'Title 1', category: 'Biography' },
    { id: 3, title: 'Title 2', category: 'History' },
    { id: 4, title: 'Title 3', category: 'Horror' },
    { id: 5, title: 'Title 4', category: 'Kids' },
    { id: 6, title: 'Title 5', category: 'Learning' },
    { id: 7, title: 'Title 6', category: 'Sci-Fi' },
  ],
  filter: 'Categories',
};

const store = createStore(books, defaultBooks);

document.title = 'Magicians books';

ReactDOM.render(
  <Provider store={store}>
    <App books={store.getState()} />
  </Provider>,
  document.getElementById('root'),
);
