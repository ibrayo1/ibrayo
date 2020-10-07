import React, { Component } from 'react';
import Icon from './Icon';
import {
    Container,
    Row,
    Col,
    Card
} from 'reactstrap';

class About extends Component {
    render() {
        return(
            <div>
                <section id="about">
                    <Container>
                        <h1 className="section-title">ABOUT</h1>            
                        <div className="underline"></div>

                        <Row style={{marginBottom: 100}}>
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
                                
                                    <Icon class="icon" name="fa fa-linkedin-square" link="https://www.linkedin.com/in/ibrayo1128/" tar="_blank" size="45px" />

                                    <Icon class="icon" name="fa fa-github-square" link="https://github.com/ibrayo1" tar="_blank" size="45px" />
                                   
                                    <Icon class="email-icon" name="fa fa-envelope-square" link="#contact" size="45px" />
                                </div>

                            </Col>
                        </Row>
                        
                        {/* <Row>
                            <Col lg="3">
                                <Card style={{height: 300}} />
                            </Col>
                            <Col lg="3">
                                <Card style={{height: 300}} />
                            </Col>
                            <Col lg="3">
                                <Card style={{height: 300}} />
                            </Col>
                            <Col lg="3">
                                <Card style={{height: 300}} />
                            </Col>
                        </Row> */}
                    </Container>
                    <br/><br/><br/><br/>
                </section>
            </div>
        )
    }
}

export default About;