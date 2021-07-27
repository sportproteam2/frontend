import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import style from "../assets/styles/NewsStyle";
import {makeStyles} from "@material-ui/core/styles";
import NewsItem from "./NewsPage/NewsItem";
import Pagination from 'react-bootstrap/Pagination';
import federationsData from "../assets/data/FederationsData";

const newsStyle = makeStyles(style);

function News() {
    const classes = newsStyle();
    const [sportNames, setSportNames] = useState(federationsData);
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [selectedCat, setSelectedCat] = useState();
    const [sportCategory, setSportCategory] = useState([]);
    const [selectedSportId, setSelectedSportId] = useState(0);
    const [newsSport, setNewsSport] = useState([]);

    // let active = 1;
    // let items = [];
    // for (let number = 1; number <= 3; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }

    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
            .then((response) => response.json())
            .then(res => setSportCategory(res));
    }, [])

    function selectFirstForm(event) {
        setSelectedCatId(event.target.value);

        fetch('https://sportproteam2.herokuapp.com/api/sportcategory/' + event.target.value)
            .then((response) => response.json())
            .then(res => {
                setSelectedCat(res.name);
            });

        fetch("https://sportproteam2.herokuapp.com/api/sport/?category=" + event.target.value)
            .then((response) => response.json())
            .then(res => setSportNames(res));

        if (sportNames.length >= 1) {
            setSelectedSportId(1);
            fetch("https://sportproteam2.herokuapp.com/api/news/?sport=1")
                .then((response) => response.json())
                .then(res => {
                    console.log('RESULT', res)
                    setNewsSport(res)
                });
        }

        fetch("https://sportproteam2.herokuapp.com/api/sport/?category=" + event.target.value)
            .then((response) => response.json())
            .then(res => setSportNames(res));

        console.log("newsport", newsSport)

    }

    function selectSecondForm(event) {
        if (event) {
            setSelectedSportId(event.target.value);
        }

        fetch("https://sportproteam2.herokuapp.com/api/news/?sport=" + event.target.value)
            .then((response) => response.json())
            .then(res => setNewsSport(res));

        console.log("newsport", newsSport)

    }

    // const paginationBasic = (
    //     <div className={classes.news_pagination}>
    //         <Pagination>{items}</Pagination>
    //     </div>
    // );
    //
    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Новости</p>
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
                                          value={selectedCatId}
                                          onChange={e => selectSecondForm(e)}>
                                {sportNames.map(x => <option value={+x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    }
                </Row>
                {(selectedSportId !== 0) &&
                    <NewsItem items={newsSport}/>
                }
            </Form>

            {/*{paginationBasic}*/}
        </div>
    )
}

export default News;