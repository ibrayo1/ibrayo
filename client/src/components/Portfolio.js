import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import {
    Container,
    CardDeck,
    Col
} from 'reactstrap';

class Portfolio extends Component {
    render(){
        return(
            <section id="portfolio">
                <Container>
                    <Col xs="12">
                        <h1 className="section-title">PROJECTS</h1>
                        <div className="underline"></div>

                        <CardDeck>

                            <ProjectCard />

                            <ProjectCard />

                            <ProjectCard />

                        </CardDeck>
                    </Col>
                </Container>
            </section>
        )
    }
}


export default Portfolio;

