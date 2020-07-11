import React, { Component } from 'react';
import { 
    Container
} from 'reactstrap';

class Home extends Component{
    render() {
        return(
            <div>
                <svg preserveAspectRatio="none" viewBox="0 0 1000 65" height="65" style={{backgroundColor: 'transparent'}} width="100%">
                    <path d="M 0 0 Q 255 5 420 30 Q 680 65 1000 65 L 1000 0 Z" fill="white" stroke="white"></path>
                </svg>
                <section id="home">
                    <Container className="title" fluid>
                        <div className="intro">
                            <h1>
                                Hello, I'm Ibrahim Ayoob
                                <br/>
                                I'm a Software Developer
                            </h1>
                        </div>
                    </Container>
                </section>
                <svg preserveAspectRatio="none" viewBox="0 0 1000 75" height="75" width="100%">
                    <path d="M 0 0 Q 255 5 420 30 Q 680 70 1000 75 L 0 75 L 0 0 Z" fill="#FFFFFF" stroke="#FFFFFF"></path>
                </svg>
            </div>
        );
    }
}

export default Home;