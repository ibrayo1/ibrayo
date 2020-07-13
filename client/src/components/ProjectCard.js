import React, {Component} from 'react';
import Icon from './Icon';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Row,
    Col
} from 'reactstrap';

class ProjectCard extends Component {

    render(){
        return(
            <Card className="mb-3">
                <CardBody>
                    <Row>
                        <Col lg={{size: "7"}}>
                            <CardImg width="100%" src="https://via.placeholder.com/318x180" alt="Card image cap" />
                            <CardTitle>MASJIDSUNNAHCHI.ORG</CardTitle>
                            <CardSubtitle>
                                <Icon class="icon" name="fa fa-eye" link="https://masjidsunnahchi.org" tar="_blank" size="26px" />
                                <Icon class="icon" name="fa fa-github" link="https://github.com/masjidsunnah/sunnah" tar="_blank" size="26px" />
                            </CardSubtitle>
                        </Col>
                        <Col lg={{size: "5"}} >
                            <h2 className="card-stackname">MERN STACK</h2>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </Col>
                    </Row>
                </CardBody>
                {/* <CardImg top width="100%" src="https://via.placeholder.com/318x180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody> */}
            </Card>
        )
    }
}

export default ProjectCard;