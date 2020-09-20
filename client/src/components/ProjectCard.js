import React from 'react';
import LearnMore from './LearnMore';
import {
    Card, CardBody
} from 'reactstrap';

const ProjectCard = (props) => {

    const {
        name, stackname,
        thumbnail, description,
        gitlink, visitlink,
        images
    } = props;

    return(
        <Card className="projectCard">
            <CardBody>
                <div className="projectCardImg">
                    <img className="img-fluid" src={thumbnail} alt="thumbnail" />
                </div>

                <div className="projectCardTitle">
                    <h3 style={{marginBottom: 0}}>{name}</h3>
                </div>

                <div className="projectCardSub">
                    <h5>{stackname}</h5>
                </div>

                <hr style={{marginTop: 10, marginBottom: 10}} />

                <p className="projectCardSum">
                    {description}
                </p>

                <LearnMore
                    projname={name}
                    projdesc={description}
                    images={images}
                    gitlink={gitlink}
                    visitlink={visitlink}
                    buttonLabel="Learn More"
                />
            </CardBody>
        </Card>
    );
}

export default ProjectCard;