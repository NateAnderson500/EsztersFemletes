import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import EventResults from './components/EventResults';
import Contact from './components/Contact';
import React from "react";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <EventResults />
      <Contact />
    </div>
  );
}

export default App;
