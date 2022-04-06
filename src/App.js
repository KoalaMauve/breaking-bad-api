import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CharPreview from './charPreview';
import axios from 'axios'
import CharDetails from './charDetails';
import Loader from './loader';


function App() {


  return (
    <Router>

      <Switch>
        <Route path='/' exact><Home></Home></Route>
        <Route path='/characters/:id'><CharDetails /></Route>
        <Route path='/loader'><Loader></Loader></Route>
      </Switch>

    </Router>
  )
}

export default App;
