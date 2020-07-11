import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap';

class ProjectCard extends Component {

    render(){
        return(
            <Card>
                <CardImg top width="100%" src="https://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
            </Card>
        )
    }
}

export default ProjectCard;