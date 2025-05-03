import { createStore, combineReducers } from 'redux';

// Define initial state for user
const initialUserState = {
  user: null,
  isAuthenticated: false,
};

// Define the user reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT_USER':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

// Combine reducers (useful when you add more reducers later)
const rootReducer = combineReducers({
  user: userReducer,
  // Other reducers can be added here, for example:
  // settings: settingsReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
