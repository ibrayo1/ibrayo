import React, { Component } from 'react';
import { 
    Container
} from 'reactstrap';

class Home extends Component{

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "p5.anim.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return(
            <div className="home-container">
                <div id="canvas"></div>

                <svg preserveAspectRatio="none" viewBox="0 0 1000 65" height="65" style={{backgroundColor: 'transparent', position: 'absolute'}} width="100%">
                    <path d="M 0 0 Q 255 5 420 30 Q 680 65 1000 65 L 1000 0 Z" fill="white" stroke="white"></path>
                </svg>
                <section id="home">
                    <Container className="intro-container" fluid>
                        <div className="intro">
                            <h1 className="intro-summary">
                                Hello, I'm Ibrahim Ayoob
                                <br/>
                                I'm a Software Developer
                            </h1>
                        </div>
                    </Container>
                </section>
                <svg preserveAspectRatio="none" viewBox="0 0 1000 75" height="75" width="100%" style={{position: 'absolute', bottom: 0}}>
                    <path d="M 0 0 Q 255 5 420 30 Q 680 70 1000 75 L 0 75 L 0 0 Z" fill="#FFFFFF" stroke="#FFFFFF"></path>
                </svg>
            </div>
        );
    }
}

export default Home;