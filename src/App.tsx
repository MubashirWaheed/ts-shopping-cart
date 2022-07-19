import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import {Navbar} from './components/Navbar'
import { ContextProvider } from './context/shoppingCartContext';

// all routes in this component 
function App() {

  return (
    <>
    <CssBaseline />
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/ts-shopping-cart/" element={<Home />} />
          <Route path="/ts-shopping-cart/store" element={<Store />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
