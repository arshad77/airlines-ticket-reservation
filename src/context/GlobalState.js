import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  bookings: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function addBooking(booking){
    dispatch({
      type: 'ADD_BOOKING',
      payload: booking
    });
  }

  return (<GlobalContext.Provider value={{
    bookings: state.bookings,
   addBooking
  }}>
    {children}
  </GlobalContext.Provider>);
}