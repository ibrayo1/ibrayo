import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class About extends Component {
    render() {
        return(
            <div>
                <section id="about">
                    <Container>
                        <h1 className="section-title">ABOUT</h1>            
                        <div className="underline"></div>

                        <Row>
                            <Col lg="4" style={{textAlign: 'center'}}>
                                <img src={require("../images/me.png")} alt="Ibrahim Ayoob" width="90%" className="profile-pic-crop" />
                            </Col>

                            <Col lg="8" className="my-auto">
                                <p className="about-summary">
                                    I am a recent college graduate with a huge passion for building software. 
                                    I have done work in software development, mobile app creation, 
                                    front-end/back-end web, database/server management, and graphic design.
                                </p>

                                <div className="social-media">
                                    <a className="icon" href="https://www.linkedin.com/in/ibrayo1128/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a className="icon" href="https://github.com/ibrayo1" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github-square" aria-hidden="true"></i>
                                    </a>
                                    <a className="email-icon" href="#contact" >
                                        <i className="fa fa-envelope-square" aria-hidden="true"></i>
                                    </a>
                                </div>

                                {/* <div style={{textAlign: 'center'}}>
                                    <a className="projBtn" href="#portfolio">
                                        View my work
                                    </a>
                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                    <br/><br/><br/><br/>
                </section>
                <svg preserveAspectRatio="none" viewBox="0 0 1000 75" height="75" width="100%">
                    <path d="M 0 75 L 1005 0 L 1005 75 Z" fill="white" stroke="white"></path>
                </svg>
            </div>
        )
    }
}

export default About;