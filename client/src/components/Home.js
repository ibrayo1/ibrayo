import React, { Component } from 'react';

class Home extends Component{

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "p5.anim.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return(
            <div id="home">
                <div id="canvas"></div>
                
                <div className="intro">
                    <h1>
                        Hello, I'm Ibrahim Ayoob
                        <br/>
                        Im a Software Developer
                    </h1>
                </div>

            </div>
        );
    }
}

export default Home;