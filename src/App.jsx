import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
    <div>
      <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
     <Toaster />
    </>
  );
};

export default App;
