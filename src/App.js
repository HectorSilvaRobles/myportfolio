import React from 'react';
import './App.css';
import Header from './Components/header/Header'
import Banner from './Components/banner/Banner'
import Projects from './Components/projects/Projects'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'
import Contact from './Components/contact/Contact'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Banner />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </body>
      
    </div>
  );
}

export default App;
