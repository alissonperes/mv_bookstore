const book = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case 'CREATE_BOOK':
      const { id, author, category } = action.book;
      return {
        id,
        author,
        category,
      };
    case 'REMOVE_BOOK':
      return state.filter(x => x.id !== action.index);
    default:
      return state;
  }
};

export default book;
