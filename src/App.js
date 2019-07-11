import React from 'react';
import './App.css';
import Header from './Components/header/Header'
import Banner from './Components/banner/Banner'
import Projects from './Components/projects/Projects'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'
import Contact from './Components/contact/Contact'

import SideDrawer from './Components/header/SideDrawer/SideDrawer'
import Backdrop from './Components/backdrop/Backdrop'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <SideDrawer />
        <Backdrop />
      </header>
      <main>
        <Banner />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
