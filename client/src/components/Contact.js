import React, { Component } from 'react';
import Axios from "axios";
import { AvGroup, AvForm, AvInput } from 'availity-reactstrap-validation';
import { Alert, Container, Card, CardBody, Label, Row, Col, Button } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);

        this.state = {name: false, email: false, message: false, visible: false};
    }

    onDismiss(){
        this.setState({visible: false});
    }

    handleValidSubmit(event, values) {
        this.sendMessage(values);
    }

    handleInvalidSubmit(event, errors, values) {
        this.setState({
            name: values.name, 
            email: values.email, 
            message: values.message, 
            error: true
        });
        console.log("invalid input received");
    }

    sendMessage(values){
        const name = values.name;
        const email = values.email;
        const message = values.message;

        Axios({
          method: "POST",
          url: "http://localhost:5000/send",
          data: { name, email, message },
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          if (res.data.msg === "suc") {
            console.log('SUCCESS');
            this.setState({visible: true});
            this.form && this.form.reset();
          } else {
            console.log("FAILURE TO SEND");
          }
        });
    };
 
    render(){
        return(
            <div>
                <svg preserveAspectRatio="none" viewBox="0 0 810 102" height="75" width="100%" className="gradient-bg" >
                    <path d="M 0 0 Q 129 25 260 35 L 309 74 L 509 74 L 560 37 Q 689 26 809 0 " fill="white" stroke="white" strokeWidth="3"></path>
                </svg>
    
                <section id="contact">
                
                    <h1 className="section-title">CONTACT</h1>
                    <div className="underline"></div>
    
                    <Container >
                        <Col lg={{size: "10", offset: "1"}}>
                            <Card className="contactCard p-3" >
                                <CardBody>
                                    <Row>
                                        <Col lg={{size: "5"}} style={{textAlign: 'center'}}>
                                            <img src={require('../images/mail.png')} className="img-fluid" alt="letter" style={{padding: 15}}/>
                                        </Col>
                                        <Col lg={{size: "7"}}>
                                            <AvForm style={{color: '#000000'}} onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit} ref={c => (this.form = c)}>
                                                <AvGroup>
                                                    <AvInput type="text" name="name" id="name" required/>
                                                    <Label for="name">Name</Label>
                                                </AvGroup>
                                                <AvGroup>
                                                    <AvInput type="email" name="email" id="email" required/>
                                                    <Label for="name">Email</Label>
                                                </AvGroup>
                                                <AvGroup>
                                                    <AvInput type="textarea" rows="5" name="message" id="message" />
                                                    <Label for="message">Message</Label>
                                                </AvGroup>
                                                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                                                    Your message was sent successfully, Thanks!
                                                </Alert>
                                                <Button className="messagebtn" >SEND</Button>
                                            </AvForm>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Contact;