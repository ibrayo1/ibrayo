import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

function Skill(props) {
    return(
        <Col xs="6" lg="3" style={{padding: 0}}>
            <Card className="skill-card">
                <CardBody>
                    <img src={props.img} width={props.width} alt={props.alt} className="skill-icon" />
                    <p>{props.desc}</p>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Skill;
