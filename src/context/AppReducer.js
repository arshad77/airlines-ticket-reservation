export default (state, action) => {
  switch(action.type) {
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [action.payload, ...state.bookings]
      }
    default:
      return state;
  }
}