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
                        <Col lg={{size: "8"}}>
                            <CardImg src={require('../uploads/' + this.props.thumbnail)} alt="thumbnail" />
                            <CardTitle>{this.props.name}</CardTitle>
                            <CardSubtitle>
                                <Icon class="icon" name="fa fa-eye" link={this.props.visitlink} tar="_blank" size="26px" />
                                <Icon class="icon" name="fa fa-github" link={this.props.gitlink} tar="_blank" size="26px" />
                            </CardSubtitle>
                        </Col>
                        <Col lg={{size: "4"}} >
                            <h2 className="card-stackname">{this.props.stackname}</h2>
                            <CardText>{this.props.description}</CardText>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default ProjectCard;