import React, {useState} from 'react';
import './App.css';
import Header from './Components/header/Header'
import Banner from './Components/banner/Banner'
import Projects from './Components/projects/Projects'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'
import Contact from './Components/contact/Contact'

import SideDrawer from './Components/header/SideDrawer/SideDrawer'
import Backdrop from './Components/backdrop/Backdrop'

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }
  render(){
    
    let backDrop;

    if(this.state.sideDrawerOpen){
      
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <header>
          <Header drawerClickHandler = {this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop }
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
}

export default App;
