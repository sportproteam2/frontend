import React, {useEffect, useState} from "react";
import style from "../../assets/styles/ContactStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import federationsData from "../../assets/data/FederationsData";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Redirect } from 'react-router';

const aboutUsStyle = makeStyles(style);

function Rating() {
    const classes = aboutUsStyle();
    const [sportNames, setSportNames] = useState(federationsData);
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [selectedCat, setSelectedCat] = useState();
    const [sportCategory, setSportCategory] = useState([]);
    const [selectedSportId, setSelectedSportId] = useState(0);
    const [players, setPlayers] = useState([]);

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
            fetch("https://sportproteam2.herokuapp.com/api/players/?sport=1")
                .then((response) => response.json())
                .then(res => {
                    console.log("players", res)
                    setPlayers(res)
                });
        }
    }

    function selectSecondForm(event) {
        if (event) {
            setSelectedSportId(event.target.value);
        }
        setSelectedSportId(selectedSportId);

        fetch("https://sportproteam2.herokuapp.com/api/players/?sport=" + selectedSportId)
            .then((response) => response.json())
            .then(res => {
                console.log("players", res)
                setPlayers(res)
            });
    }

    function handleOnClick(id) {
            return <Redirect push to={'/rating/' + id}/>
    }

    const tableData = players.map((p, i) => {
        return (
            <tr key={i} onClick={handleOnClick(p.id)}>

                <td>{++i}</td>
            <td>{p.name + " " + p.surname}</td>
            <td>Кыргызстан</td>

        </tr>

        )
    })

    function submitSearch(event){
        event.preventDefault();
        fetch("https://sportproteam2.herokuapp.com/api/players/?name=" + event.target.value)
            .then((response) => response.json())
            .then(res => {
                console.log("search", res)
                setPlayers(res)
            });
    }

    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Рейтинг спорстменов Кыргызской Республики</p>
            <Form >
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
                    {(selectedSportId === 0) ?
                        <Col xs={8}>
                            <p className={classes.rating_title}>Что такое рейтинг</p>
                            <p className={classes.rating_text}>
                                Рейтинг — это и показатель спортивной формы, и инструмент самооценки, и ориентир
                                в планах
                                повышения спортивного мастерства. С другой стороны, для тренеров и специалистов
                                рейтинг (не
                                только в го, но и в других видах спорта) дает объективный критерий отбора
                                игроков в различные
                                сборные команды, или же кандидатов на поездку на престижные турниры. Для
                                организаторов турниров
                                рейтинг помогает правильно сформировать начальные группы по силе игры, проводить
                                жеребьевку в
                                турнирах и вообще — создать максимально равные условия выступления для всех
                                участников, тем
                                самым повышая качество судейства и организации турниров в целом. Ну и еще
                                рейтинг помогает всем
                                — и специалистам, и участникам, и зрителям — прогнозировать результаты
                                выступления игроков в
                                соревнованиях» .
                                Рейтинг — «внутренний порядок»
                            </p>
                        </Col>
                        :
                        <Col xs={12}>
                            <p className={classes.about_desc_title}>Рейтинги спортсменов</p>
                            <Form onSubmit={ event => submitSearch(event)}>
                                <Form.Row>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label className={classes.rating_label}>Спортсмен</Form.Label>
                                            <Form.Control placeholder="Поиск по  имени "/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridWeight">
                                            <Form.Label className={classes.rating_label}>Весовая
                                                категория</Form.Label>
                                            <Form.Control placeholder=""/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridOrgName">
                                            <Form.Label className={classes.rating_label}>Название
                                                организации</Form.Label>
                                            <Form.Control placeholder=""/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Button variant="danger" type="submit"
                                        className={classes.submit_button}>Поиск</Button>
                            </Form>

                            {tableData ?
                                <Table bordered hover className={classes.rating_table_wrapper}>
                                    <thead>
                                    <tr>
                                        <th className={classes.table_header}>Ранг</th>
                                        <th className={classes.table_header}>ФИО</th>
                                        <th className={classes.table_header}>Страна</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {tableData}
                                    </tbody>
                                </Table> :
                                <p className={classes.no_data}> Нету данных</p>
                            }
                        </Col>
                    }
                </Row>
            </Form>
        </div>
    )
}

export default Rating;

