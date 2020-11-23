import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const BookTIcket = () => {

  const { addBooking } =  useContext(GlobalContext);

  const [ name,setName] = useState('');
  const [ email, setEmail]=useState('');
  const [ departure,setDeparture] = useState('');
  const [ arrival, setArrival]=useState('');
  const [ airlines,setAirlines] = useState('');
  const [ seat, setSeat]=useState('');

  const onSubmit = e => {
    e.preventDefault();

    const newBooking ={
      name,
      email,
      departure,
      arrival,
      airlines,
      seat
    }

    addBooking(newBooking);
    setName('');
    setEmail('');
  }
  
  


  return (
    <div className="margin">
      
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name..." />
        </div>
        <div className="form-control">
          <label htmlFor="email"
            >E-mail ID: <br />
            </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email..." />
        </div>
        <div className="form-control">
          <label htmlFor="departure"
            >Departure <br />
            </label>
            <br/>
          <select value={departure} onChange={(e) => setDeparture(e.target.value)} >
            <option value="Chennai">Chennai</option>
            <option value="London">London</option>
            <option value="Toronto">Toronto</option>
            <option value="New York">New York</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="arrival"
            >Arrival <br />
            </label>
            <br/>
          <select value={arrival} onChange={(e) => setArrival(e.target.value)} >
          <option value="Chennai">Chennai</option>
            <option value="London">London</option>
            <option value="Toronto">Toronto</option>
            <option value="New York">New York</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="airlines"
            >Airlines <br />
            </label>
            <br/>
          <select value={airlines} onChange={(e) => setAirlines(e.target.value)} >
            <option value="Emirates">Emirates</option>
            <option value="Ethihad">Ethihad</option>
            <option value="AirIndia">AirIndia</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="seat"
            >Seat Preference <br />
            </label>
            <br/>
          <select value={seat} onChange={(e) => setSeat(e.target.value)} >
            <option value="Aisle">Aisle</option>
            <option value="Window">Window</option>
            <option value="Middle">Middle</option>
          </select>
        </div>
        <button className="btn">Book Ticket</button>
      </form>
          </div>
  )
}

export default BookTIcket
