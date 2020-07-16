import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Portfolio extends Component {
    render(){
        return(
            <section id="portfolio">
                <Container fluid>
                    <h1 className="section-title" style={{color: 'white'}}>PROJECTS</h1>
                    <div className="underline" style={{backgroundColor: 'white'}}></div>

                    <Row className="justify-content-center">

                        <Col lg={{size: "5"}}>
                            <ProjectCard 
                                name="MASJIDUSNNAHCHI.ORG"
                                stackname="Express / Node.js"
                                thumbnail="masjidsunnahchi.svg"
                                description="masjidsunnahchi.org is a web app created for a nonprofit organization
                                called Northshore Islamic Center NFP. This web app allows them to post 
                                important updates and events, collect money for donations and charity, 
                                and provides an essential platform for them to connect with their 
                                congregation and community"
                                gitlink="https://github.com/masjidsunnah/sunnah"
                                visitlink="https://masjidsunnahchi.org"
                            />
                        </Col>

                        <Col lg={{size: "5"}}>
                            <ProjectCard 
                                name="HEARTAPP"
                                stackname="Express / Node.js"
                                thumbnail="heartapp.svg"
                                gitlink="https://github.com/ibrayo1/HeartApp"
                                visitlink="http://heartapp494.herokuapp.com/"
                            />
                        </Col>
                        
                        <Col lg={{size: "5"}}>
                            <ProjectCard 
                                name="GAITAN" 
                                stackname="Express / Node.js"
                                thumbnail="gaitan.svg"
                                gitlink="https://github.com/ibrayo1/GaitAn"
                                visitlink="http://gaitan.herokuapp.com/"
                            />
                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}


export default Portfolio;

