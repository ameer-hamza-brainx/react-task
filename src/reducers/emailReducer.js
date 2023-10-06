
const initialState = {
  email: 'test@gmail.com'
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
