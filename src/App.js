import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
    </ThemeProvider>
    
  );
}

export default App;
