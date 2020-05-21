const filter = (state = [], action) => {
  console.log('here', state, action);
  switch (action.filter) {
    case 'Action':
      return state.filter(x => x.category === 'Action');
    case 'Biography':
      return state.filter(x => x.category === 'Biography');
    case 'History':
      return state.filter(x => x.category === 'History');
    case 'Horror':
      return state.filter(x => x.category === 'Horror');
    case 'Kids':
      return state;
    case 'Learning':
      return state;
    case 'Sci-Fi':
      return state;
    default:
      return state;
  }
};

export default filter;
