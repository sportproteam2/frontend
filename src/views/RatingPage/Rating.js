import React, {useEffect, useState} from "react";
import style from "../../assets/styles/ContactStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import federationsData from "../../assets/data/FederationsData";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {useHistory} from 'react-router';
import {useSelector} from "react-redux";
import axios from "axios";

const aboutUsStyle = makeStyles(style);

function Rating() {
    const classes = aboutUsStyle();
    const history = useHistory();
    const [sportNames, setSportNames] = useState(federationsData);
    const [category, setCategory] = useState([]);
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [selectedSportId, setSelectedSportId] = useState(0);
    const [selectedCat, setSelectedCat] = useState();
    //search Form
    const [searchName, setSearchName] = useState();
    const [searchWeight, setSearchWeight] = useState();
    const [searchOrg, setSearchOrg] = useState();
    const [players, setPlayers] = useState([]);

    const selectedSport = useSelector((state) => state.sport);

    useEffect(async () => {
        const categResult = await axios.get("https://sportproteam2.herokuapp.com/api/sportcategory/")
        setCategory(categResult.data);
        if (selectedSport){
            setSelectedCatId( selectedSport.category.id);
            setSelectedCat( selectedSport.category.name);
            setSelectedSportId( selectedSport.id);
        }

        if (selectedSportId){
            console.log('selectedSportID', selectedSportId)
            const playersResult = await axios.get("https://sportproteam2.herokuapp.com/api/players/?sport=" + selectedSportId)
            setPlayers(playersResult.data);
        }

        if (selectedCatId){
            const sportNames = await axios.get("https://sportproteam2.herokuapp.com/api/sport/?category=" + selectedCatId)
            setSportNames(sportNames.data);
        }


    })

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
        }
    }

    function selectSecondForm(event) {
        if (event) {
            setSelectedSportId(event.target.value);
        }
    }


    const tableData = players.map((p, i) => {
        return (
            <tr key={i} onClick={ () => {
                history.push(`/rating/${p.id}`)
            }}>
                <td>{++i}</td>
                <td>{p.name + " " + p.surname}</td>
                <td>Кыргызстан</td>
            </tr>
            )
    })

    function submitForm(event) {
        if (event){
            event.preventDefault()
            let url = "https://sportproteam2.herokuapp.com/api/players/?sport=" + selectedSport.id;
            if (searchWeight !=null){
                url += "&weight=" + searchWeight;
            }
            if ( searchName != null){
                url += "&name=" + searchName;
            }
            if (searchOrg != null){
                url += "&organization=" + searchOrg;
            }
            fetch(url)
                .then((response) => response.json())
                .then(res => setPlayers(res))
        }

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
                                {category.map(x => <option value={x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    {((selectedCatId !== 0) || (selectedSport !== null)) &&
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
                            <Form onSubmit={submitForm()}>
                                <Form.Row>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label className={classes.rating_label}>Спортсмен</Form.Label>
                                            <Form.Control placeholder="Поиск по  имени " type="text"
                                                          value={searchName}
                                                          onChange={e => setSearchName(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridWeight">
                                            <Form.Label className={classes.rating_label}>Весовая
                                                категория</Form.Label>
                                            <Form.Control placeholder="" type="text" value={searchWeight}
                                                          onChange={e => setSearchWeight(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridOrgName">
                                            <Form.Label className={classes.rating_label}>Название
                                                организации</Form.Label>
                                            <Form.Control placeholder="" type="text" value={searchOrg}
                                                          onChange={e => setSearchOrg(e.target.value)}/>
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

