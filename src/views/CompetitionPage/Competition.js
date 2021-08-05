import React, {useEffect, useState} from "react";
import style from "../../assets/styles/CompetitionStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import federationsData from "../../assets/data/FederationsData";
import eventData from "../../assets/data/EventData";
import axios from "axios";
import {useSelector} from "react-redux";
import categoryData from "../../assets/data/SportsCategoryData";
import {useHistory} from "react-router";

const aboutUsStyle = makeStyles(style);

function Competition() {
    const classes = aboutUsStyle();
    const [events, setEvents] = useState(eventData);
    const [sportNames, setSportNames] = useState(federationsData);
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [selectedCat, setSelectedCat] = useState();
    const [sportCategory, setSportCategory] = useState(categoryData);
    const [selectedSportId, setSelectedSportId] = useState(0);
    const selectedSport = useSelector((state) => state.sport);
    const history = useHistory()

    useEffect(async () => {
        if (selectedSport){
            setSelectedCatId( selectedSport.category.id);
            setSelectedCat( selectedSport.category.name);
            setSelectedSportId( selectedSport.id);
            const eventData = await axios.get("https://sportproteam2.herokuapp.com/api/event/?sport=" + selectedSport.id)
            setEvents(eventData.data);
            const sportNames = await axios.get("https://sportproteam2.herokuapp.com/api/sport/?category=" + selectedSport.category.id)
            setSportNames(sportNames.data);
        } else {
            fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
                .then((response) => response.json())
                .then(res => setSportCategory(res));
        }
    }, [])


    function selectFirstForm(event) {
        setSelectedCatId(event.target.value);

        fetch('https://sportproteam2.herokuapp.com/api/sportcategory/' + event.target.value)
            .then((response) => response.json())
            .then(res => {setSelectedCat(res.name);});

        fetch("https://sportproteam2.herokuapp.com/api/sport/?category=" + event.target.value)
            .then((response) => response.json())
            .then(res => setSportNames(res));

        if (sportNames.length >= 1) {
            setSelectedSportId(1);
            fetch("https://sportproteam2.herokuapp.com/api/event/?sport=1")
                .then((response) => response.json())
                .then(res => setEvents(res));
        }


    }

    function selectSecondForm(event) {
        if (event) {
            setSelectedSportId(event.target.value);
        }
        setSelectedSportId(selectedSportId);
        fetch("https://sportproteam2.herokuapp.com/api/event/?sport=" + event.target.value)
            .then((response) => response.json())
            .then(res => setEvents(res));

    }

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
                                          onChange={e => selectFirstForm(e)}>
                                <option value='0'>Не выбрано</option>
                                {sportCategory.map(x => <option value={x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    {(selectedCatId !== 0) &&
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label className={classes.contact_dropdown_label}>{selectedCat}</Form.Label>
                            <Form.Control as="select" size="lg"
                                          value={selectedSportId}
                                          onChange={e => selectSecondForm(e)}>
                                {sportNames.map(x => <option value={+x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    }

                </Row>
            </Form>
            {(selectedSportId !== 0) &&
            <Row>
                {events.map(e => {
                    return (
                        <Col xs={3} className={classes.card_wrapper}
                             onClick={ () => {
                                 history.push(`/competitions/${e.id}`)
                             }}>
                            <img src={e.photo} alt={e.id} className={classes.card_img}/>
                            <div className={classes.card_text_wrapper}>
                                <p className={classes.card_text_title}>{e.name}</p>
                                <p className={classes.card_text_desc}>{e.location}</p>
                                <p className={classes.card_text_desc}>{e.date}</p>
                                <hr/>
                                <p className={classes.card_status}>Завершено</p>
                            </div>
                        </Col>
                    )
                })}
            </Row>
            }
        </div>
    )
}

export default Competition;