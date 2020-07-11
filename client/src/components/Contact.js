import React, { useState } from 'react';
import Axios from "axios";
import { Alert, Container, Card, CardBody, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

export const Contact = () => {

    const initialInputState = { name: "", email: "", message: "" };
    const [newMessage, setNewMessage] = useState(initialInputState);
    const [visible, setVisible] = useState(false);

    const { name, email, message } = newMessage;

    const handleInputChange = e => {
        setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
    };
    
    const onDismiss = () => setVisible(false);

    const sendMessage = e => {
        Axios({
          method: "POST",
          url: "http://localhost:5000/send",
          data: { name, email, message },
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          if (res.data.msg === "suc") {
            setVisible(true); // show success alert
            setNewMessage(initialInputState);
          } else {
            console.log("FAILURE");
          }
        });
    };
 
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
                                        <Form style={{color: '#000000'}} action="/contact" method="POST">
                                            <FormGroup>
                                                <Input type="text" name="name" onChange={handleInputChange} value={name} id="name" required/>
                                                <Label for="name">Name</Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="email" name="email" onChange={handleInputChange} value={email} id="email" required/>
                                                <Label for="name">Email</Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="textarea" rows="5" name="message" onChange={handleInputChange} value={message} id="message" />
                                                <Label for="message">Message</Label>
                                            </FormGroup>
                                            <Alert color="success" isOpen={visible} toggle={onDismiss}>
                                                Your message was sent successfully, Thanks!
                                            </Alert>
                                            <Button className="messagebtn" onClick={sendMessage}>SEND</Button>
                                        </Form>
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