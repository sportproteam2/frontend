import React from "react";
import style from "../assets/styles/ContactStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const aboutUsStyle = makeStyles(style);

function Contact() {
    const classes = aboutUsStyle();
    return (
        <Container className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Контакты</p>
            <Form>
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={classes.contact_dropdown_label}>Выберите вид спорта</Form.Label>
                            <Form.Control as="select" size="lg">
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={classes.contact_dropdown_label}>Олимпийские виды спорта</Form.Label>
                            <Form.Control as="select" size="lg">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <p className={classes.contact_dropdown_label}></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Contact;