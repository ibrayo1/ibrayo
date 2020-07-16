import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Divider from './Divider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Home />
        <Divider d="M 0 0 Q 255 5 420 30 Q 680 65 1005 65 L 1005 0 Z" fill="#FFFFFF" stroke="#FFFFFF" position="absolute" top="0"/>
        <Divider d="M 0 0 Q 255 5 420 30 Q 680 70 1005 75 L 0 75 L 0 0 Z" fill="#FFFFFF" stroke="#FFFFFF" position="absolute" bottom="0" />
        <About />
        <Divider d="M 0 75 L 1005 0 L 1005 75 Z" fill="#0073FF" stroke="#0073FF" bgcolor="#ECE9E6" />
        <Portfolio />
        <Divider d="M 0 0 L 335 40 L 380 75 L 625 75 L 670 40 L 1005 0 Z" fill="#0073FF" stroke="#0073FF" bgcolor="#FFFFFF" />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
