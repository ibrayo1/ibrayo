import React, { useState } from 'react';
import {Modal} from 'reactstrap';
import Gallery from './Gallery';
import Icon from './Icon';

const LearnMore = (props) => {

    const {
        projname,
        projdesc,
        images,
        gitlink,
        visitlink,
        buttonLabel
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div className="learnMore">
            <button className="learnMoreBtn" onClick={toggle}>{buttonLabel}</button>
            <Modal size="lg" isOpen={modal} toggle={toggle}>
                
                <Gallery images={images} />

                <h5 className="learnHeader">{projname}</h5>

                <p className="learnSummary">
                    {projdesc}
                </p>

                <div className="learnFooter">
                    
                    <div className="learnMoreIcons">
                        { gitlink ? <Icon class="icon" name="fa fa-github" link={gitlink} tar="_blank" size="32px" /> : null}
                        { visitlink ? <Icon class="icon" name="fa fa-external-link-square" link={visitlink} tar="_blank" size="32px" /> : null}
                    </div>

                    <button className="learnModalBtn" onClick={toggle}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default LearnMore;