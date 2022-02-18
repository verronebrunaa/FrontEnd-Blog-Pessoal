/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/estatics/navbar/navbar';
import Footer from './components/estatics/footer/footer';
import Login from './paginas/Login/Login';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';

function App() {
  return (
   <Router>
     <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh'}}>
        <Route exact path='/'>
            <Login />
          </Route>

         <Route path='/Login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>
        </div>
      </Switch>
    <Footer />
   </Router>
  );
}

export default App;
