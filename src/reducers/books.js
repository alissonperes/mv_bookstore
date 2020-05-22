const initialState = [];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: action.book.id,
          title: action.book.title,
          category: action.book.category,
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter(x => x.id !== action.index);
    default:
      return state;
  }
};

export default books;
