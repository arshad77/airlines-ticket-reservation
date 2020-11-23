import React, { useContext } from 'react';
import {Bookings} from './Bookings';
import { GlobalContext } from '../context/GlobalState';

export const BookedList = () => {
  const { bookings } = useContext(GlobalContext);

  return (
    <>
      <h3>Booked tickets details</h3>
      <ul>
        {bookings.map(booking => (<Bookings key={booking.email} booking={booking} />))}
      </ul>
    </>
  )
}
