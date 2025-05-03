// src/actions/index.js

// Action to set the user data
export const setUser = (user) => {
    return {
      type: 'SET_USER',
      payload: user,
    };
  };
  
  // Action to logout the user
  export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    };
  };
  