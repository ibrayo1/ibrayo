import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class AppNavbar extends Component {

    state = {
        isOpen: false,
        bgcolor: 'transparent',
        fontColor: 'white',
        navItemColor: 'black'
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        this.listenScrollEvent();
    }

    closeNavbar = () => {
        if (this.state.isOpen && window.innerWidth < 768) {
            this.toggle();
        }
    }

    listenScrollEvent = e => {
        if (window.scrollY > 20) {
            this.setState({bgcolor: 'white'});
            this.setState({fontColor: 'black'});
            this.setState({navItemColor: 'black'});
        } else {
            this.setState({bgcolor: 'transparent'});
            this.setState({fontColor: 'white'});
            if(window.innerWidth < 768){
                this.setState({navItemColor: 'white'});
            }
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return(
            <Navbar color={this.state.bgcolor} light expand="md" fixed="top" style={{height: this.state.navHeight}}>
                <NavbarBrand style={{color: this.state.fontColor}} href="#home" onClick={this.closeNavbar}>HOME</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{color: this.state.navItemColor}} href="#about" onClick={this.closeNavbar}>
                                ABOUT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: this.state.navItemColor}} href="#portfolio" onClick={this.closeNavbar}>
                                PORTFOLIO
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: this.state.navItemColor}} href="#contact" onClick={this.closeNavbar}>
                                CONTACT
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default AppNavbar;