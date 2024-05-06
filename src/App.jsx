import React from 'react';
import Navbars from './Components/Navbars'
import Hero from './Components/Hero'
import About from './Components/About'
import Technology from './Components/Technology'
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="bg-slate-950" style={{ overflowX: 'hidden' }}>
    <div className='container mx-auto px-8' style={{ overflowX: 'hidden' }}>
        <Navbars/>
        <Hero />
        <About />
        <Technology />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
