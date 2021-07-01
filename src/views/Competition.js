import React, {useEffect, useState} from "react";
import style from "../assets/styles/CompetitionStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import federationsData from "../assets/data/FederationsData";
import eventData from "../assets/data/EventData";

const aboutUsStyle = makeStyles(style);

function Competition() {
    const classes = aboutUsStyle();
    const [sportNames, setSportNames] = useState(federationsData);
    const [sportCategory, setSportCategory] = useState([]);
    const [events, setSEvents] = useState(eventData);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
            .then((response) => response.json())
            .then(res => setSportNames(res));
        fetch("https://sportproteam2.herokuapp.com/api/sport/1")
            .then((response) => response.json())
            .then(res => setSportCategory(res));
        // fetch("https://sportproteam2.herokuapp.com/api/event")
        //     .then((response) => response.json())
        //     .then(res => setSEvents(res));
    }, [])
    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Соревнования</p>
            <Form className={classes.rating_form}>
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={classes.contact_dropdown_label}>Выберите вид спорта</Form.Label>
                            <Form.Control as="select" size="lg">
                                <option>Не выбрано</option>
                                {sportNames.map(x => <option>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={classes.contact_dropdown_label}>Олимпийские виды спорта </Form.Label>
                            <Form.Control as="select" size="lg">
                                <option>Не выбрано</option>
                                <option>{sportCategory.name}</option>
                                )
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row>
                {events.map(e => {
                    return (
                            <Col xs={3} className={classes.card_wrapper}>
                                <img src={e.imgPath} alt={e.id} />

                                <div className={classes.card_text_wrapper}>
                                    <p className={classes.card_text_title}>{e.name}</p>
                                    <p className={classes.card_text_desc}>{e.startDate} {e.endDate}</p>
                                    <hr/>
                                    <p className={classes.card_status}>Завершено</p>
                                </div>
                            </Col>
                    )
                })}
            </Row>

        </div>
    )
}

export default Competition;