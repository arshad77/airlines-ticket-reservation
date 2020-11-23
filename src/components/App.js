import React from 'react';
import {BrowserRouter as Router , Route, NavLink, Switch} from 'react-router-dom';

import { GlobalProvider } from '../context/GlobalState';
import { BookedList } from './BookedList';
import BookTIcket from './BookTIcket';

// import './App.css';

function Home() {
  return (
    <>
        <h1>AirLines Ticket Reservatiion</h1>
        <h2 className="margin">Welcome!</h2>
      <Router>
        <h2 className="margin">Menu:</h2>
      <ul>
        <li>
          <NavLink to="/bookticket" exact activeStyle={
              {color : 'red'}
            }>BookTickets</NavLink>
            </li>
            <li><NavLink to="/bookedtickets" exact activeStyle={
              {color : 'red'}
            }>Reserved tickets details</NavLink>
            </li>
        </ul>
        <Switch>
        <GlobalProvider>
        <Route exact  path='/' component={BookTIcket}/>

        <Route exact  path='/bookticket' component={BookTIcket}/>
        <Route exact  path='/bookedtickets' component={BookedList}/>
        </GlobalProvider>
        </Switch>
       
    </Router>
    
      
      {/* <div className="container">
        <BookTIcket/>
      </div> */}
    
    </>
  );
}

export default Home;
