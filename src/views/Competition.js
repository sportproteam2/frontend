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
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [selectedCat, setSelectedCat] = useState();
    const [sportCategory, setSportCategory] = useState([]);
    const [selectedSportId, setSelectedSportId] = useState();
    const [selectedSport, setSelectedSport] = useState();
    const [events, setEvents] = useState(eventData);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
            .then((response) => response.json())
            .then(res => setSportCategory(res));

    }, [])
    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Соревнования</p>
            <Form className={classes.form}>
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={classes.contact_dropdown_label}>Выберите вид спорта</Form.Label>
                            <Form.Control as="select"
                                          size="lg"
                                          value={selectedCatId}
                                          onChange={e => {
                                              setSelectedCatId(e.target.value);
                                              console.log("setSelectedCatId", selectedCatId);
                                              fetch('https://sportproteam2.herokuapp.com/api/sportcategory/' + selectedCatId)
                                                  .then((response) => response.json())
                                                  .then(res => {
                                                      setSelectedCat(res.name);
                                                  });
                                              fetch("https://sportproteam2.herokuapp.com/api/sport/?category=" + selectedCatId)
                                                  .then((response) => response.json())
                                                  .then(res => setSportNames(res));
                                              console.log('sportCategory', sportCategory);
                                              console.log('selectedCat', selectedCat);
                                              console.log('sportNames', sportNames);
                                          }}>
                                <option value='0'>Не выбрано</option>
                                {sportCategory.map(x => <option value={x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    { (selectedCatId !== 0) &&
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label className={classes.contact_dropdown_label}>{selectedCat}</Form.Label>
                            <Form.Control as="select" size="lg"
                                          value={selectedCatId}
                                          onChange={e => {
                                              setSelectedSportId(e.target.value);
                                              console.log("setSelectedSportId", setSelectedSportId);
                                              fetch('https://sportproteam2.herokuapp.com/api/federation/?sport=' + selectedSportId)
                                                  .then((response) => response.json())
                                                  .then(res => {
                                                      console.log('res', res);
                                                      setSelectedSport(res.contacts);
                                                  });
                                          }}>
                                {sportNames.map(x => <option value={+x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        { (selectedSport !== '') &&
                        <p className={classes.contact_dropdown_label}>
                            {selectedSport}
                        </p>
                        }
                    </Col>}
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