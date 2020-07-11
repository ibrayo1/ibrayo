import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import { Contact } from './Contact';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
