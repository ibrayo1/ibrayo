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
                    <h1 className="section-title">PROJECTS</h1>
                    <div className="underline"></div>

                    <Row className="justify-content-center">

                        <Col lg={{size: "5"}}>
                            <ProjectCard />
                        </Col>

                        
                        <Col lg={{size: "5"}}>
                            <ProjectCard />
                        </Col>
                        
                        <Col lg={{size: "5"}}>
                            <ProjectCard />
                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}


export default Portfolio;

