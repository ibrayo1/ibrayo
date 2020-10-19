import React, { Component } from 'react';
import Icon from './Icon';
import {
    Container, Row, Col
} from 'reactstrap';
import Skill from './Skill';

class About extends Component {

    constructor(props){
        super(props);
        
        this.images = [
            [
                require('../images/resp_icon.png'), 
                'bruh1' 
            ],
            [
                require('../images/security_icon.png'), 
                'bruh2'
            ],
            [
                require('../images/speed.png'), 
                'bruh3' ]
        ];
    }

    render() {
        return(
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
                                I am a Software Developer recently graduated from UIC with a passion for building software. 
                                I have done work in full stack web development, mobile app creation, front-end, 
                                database/server management, and graphic design.
                            </p>

                            <div className="social-media">
                                <Icon class="icon" name="fa fa-linkedin-square" link="https://www.linkedin.com/in/ibrayo1128/" tar="_blank" size="45px" />
                                <Icon class="icon" name="fa fa-github-square" link="https://github.com/ibrayo1" tar="_blank" size="45px" />                   
                                <Icon class="email-icon" name="fa fa-envelope-square" link="#contact" size="45px" />
                            </div>
                        </Col>
                    </Row>
                    
                    <Row>
                        {this.images.map((img, index) => {
                            return ( 
                                <Skill 
                                    key={index} 
                                    img={img[0]}
                                    desc={img[1]}
                                    width="50%" alt="icon" />
                            );
                        })}
                    </Row>
                </Container>
                <br/><br/><br/><br/>
            </section>
        )
    }
}

export default About;