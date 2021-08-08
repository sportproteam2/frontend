import React, {useEffect, useState} from "react";
import style from "../assets/styles/ContactStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import federationsData from "../assets/data/FederationsData";
import axios from "axios";
import {useSelector} from "react-redux";
import categoryData from "../assets/data/SportsCategoryData";

const aboutUsStyle = makeStyles(style);

function Contact() {
    const classes = aboutUsStyle();
    const [sportNames, setSportNames] = useState([]);
    const [sportCategory, setSportCategory] = useState(categoryData);
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [selectedSportId, setSelectedSportId] = useState(0);
    const [selectedCat, setSelectedCat] = useState();
    const [federation, setFederation] = useState({});
    const selectedSport = useSelector((state) => state.sport);

    useEffect(async () => {
            const categResult = await axios.get("https://sportproteam2.herokuapp.com/api/sportcategory/")
            setSportCategory(categResult.data);
            if (selectedSport){
                const federation = await axios.get("https://sportproteam2.herokuapp.com/api/federation/?sport=" +  selectedSport.id)
                setFederation(federation.data[0]);
                const sportNames = await axios.get("https://sportproteam2.herokuapp.com/api/sport/?category=" + selectedSport.category.id)
                setSportNames(sportNames.data);
                setSelectedCatId( selectedSport ? selectedSport.category.id: 0);
                setSelectedCat( selectedSport ? selectedSport.category.name: "");
                setSelectedSportId( selectedSport ? selectedSport.id: 0);
            } else {
                const sportNames = await axios.get("https://sportproteam2.herokuapp.com/api/sport/?category=1")
                setSportNames(sportNames.data);
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
        console.log('selectedSport', sportNames)

        if (sportNames.length >= 1) {
            setSelectedSportId(sportNames[0].id);
            fetch("https://sportproteam2.herokuapp.com/api/federation/?sport=" + sportNames[0].id)
                .then((response) => response.json())
                .then(res => setFederation(res[0]));

        }

    }

    function selectSecondForm(event) {
        if (event) {
            setSelectedSportId(event.target.value);
            fetch("https://sportproteam2.herokuapp.com/api/federation/?sport=" + event.target.value)
                .then((response) => response.json())
                .then(res => setFederation(res[0]));
        }

    }
    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Контакты</p>
            <Form>
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
                                {sportNames.map(x => <option value={x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    }
                    {(selectedSportId !== 0) &&
                    <Col xs={8} className={classes.contacts_info_wrapper}>
                        <p className={classes.contact_title}>Контактный номер</p>
                        <p>{federation.contacts}</p>
                    </Col>
                    }

                </Row>
            </Form>
        </div>
    )
}

export default Contact;