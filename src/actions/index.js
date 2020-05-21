const createBook = book => ({ type: 'CREATE_BOOK', book });

const removeBook = index => ({
  type: 'REMOVE_BOOK',
  index,
});

export { createBook, removeBook };
