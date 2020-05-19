const book = (state, action) => {
  const {
    id, author, category, type,
  } = action;
  switch (type) {
    case 'CREATE_BOOK':
      console.log('here');
      return {
        id,
        author,
        category,
      };
    case 'REMOVE_BOOK':
      return [...state.slice(0, action.index), ...state(action.index + 1, state.length)];
    default:
      return state;
  }
};

export default book;
