import { combineReducers } from 'redux';
import book from './index';
import filter from './filter';

const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, book(undefined, action)];
    case 'REMOVE_BOOK':
      return book(state, action);
    case 'CHANGE_FILTER':
      return filter(state, action);
    default:
      return state;
  }
};

export default combineReducers({ books });
