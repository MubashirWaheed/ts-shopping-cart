import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom'
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
          <Route path="/" element={<Navigate to="/store" />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
