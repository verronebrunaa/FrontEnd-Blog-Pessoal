/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Navbar from './components/estatics/navbar/navbar';
import Footer from './components/estatics/footer/footer';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';

function App() {
  return (
   <>
   <Navbar />
      <Home />
   <Footer />
   </>
  );
}

export default App;
