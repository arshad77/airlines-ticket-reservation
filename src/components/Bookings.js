import React from 'react';

export const Bookings = ({ booking }) => {


  return (
    <li >
        <h2><p>Name: {booking.name}</p></h2>
        <h2><p>Email: {booking.email}</p></h2>
        <h2><p>Arrival: {booking.arrival}</p></h2>
        <h2><p>Departure: {booking.departure}</p></h2>
        <h2><p>Airlines: {booking.airlines}</p></h2>
        <h2><p>Seat Preference: {booking.seat}</p></h2>

    </li>
  )
}
