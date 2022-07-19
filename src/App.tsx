import React from 'react';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import {Navbar} from './components/Navbar'
import {ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { ContextProvider } from './context/shoppingCartContext';

// all routes in this component 
function App() {

  return (
    <>
    <CssBaseline />
      {/* <ThemeProvider theme={theme}> */}
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </ContextProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
