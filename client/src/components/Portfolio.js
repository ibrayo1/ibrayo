import React, { Component } from 'react';
import Axios from 'axios';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'reactstrap';

class Portfolio extends Component {

    constructor(props){
        super(props);
        this.state = {projs: []};

        this.createProjectCard = this.createProjectCard.bind(this);
    }

    // get all the projects from the api
    async componentDidMount(){
        try{
            const resp = await Axios.get(`http://localhost:5000/api/projects`);
            this.setState({projs: resp.data});
            //console.log(this.state.projs);
        } catch(err) {
            console.log(err);
        }
    }

    createProjectCard(proj){
        return (
            <Col lg="6" key={proj._id} >
                <ProjectCard 
                    name={proj.name}
                    stackname={proj.stackname}
                    thumbnail={proj.thumbnail}
                    description={proj.projdesc}
                    gitlink={proj.projgitlink}
                    visitlink={proj.projlivelink}
                    images={proj.images}
                />
            </Col>
        );
    }

    render(){
        return (
            <section id="portfolio">
                <Container>
                    <h1 className="section-title">PROJECTS</h1>
                    <div className="underline"></div>

                    <Row className="justify-content-center">
                        {this.state.projs.map(this.createProjectCard)}
                    </Row>
                </Container>
            </section>
        )
    }
}


export default Portfolio;

