const posts = (state = {
  isLoading: true,
  item: []
}, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        item: action.response,
        isLoading: false
      };
    default:
      return state;
  }
};

export default posts;
