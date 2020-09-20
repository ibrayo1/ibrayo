import React, { useState } from 'react';
import {Modal} from 'reactstrap';
import Gallery from './Gallery';

const LearnMore = (props) => {

    const {
        projname,
        projdesc,
        images,
        gitlink,
        livelink,
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
                    <button className="learnModalBtn" onClick={toggle}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default LearnMore;