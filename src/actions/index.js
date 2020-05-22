const createBook = book => ({ type: 'CREATE_BOOK', book });

const removeBook = index => ({
  type: 'REMOVE_BOOK',
  index,
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { createBook, removeBook, changeFilter };
