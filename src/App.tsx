/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Navbar from './componentes/estaticos/navbar/navbar';
import Footer from './componentes/estaticos/footer/footer';
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
