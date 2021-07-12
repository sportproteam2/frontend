import React, {useEffect, useState} from "react";
import style from "../assets/styles/ContactStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import federationsData from "../assets/data/FederationsData";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const aboutUsStyle = makeStyles(style);

function Rating() {
    const classes = aboutUsStyle();
    const [sportNames, setSportNames] = useState(federationsData);
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [selectedCat, setSelectedCat] = useState();
    const [sportCategory, setSportCategory] = useState([]);
    const [selectedSportId, setSelectedSportId] = useState();
    const [selectedSport, setSelectedSport] = useState();
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
            .then((response) => response.json())
            .then(res => setSportCategory(res));
    }, [])

    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Рейтинг спорстменов Кыргызской Республики</p>
            <Form>
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
                    {(selectedCatId !== 0) &&
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
                                                      setSelectedSport(res);
                                                  });
                                          }}>
                                {sportNames.map(x => <option value={+x.id}>{x.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>}
                        {(selectedSport !== '') ?
                            <div>
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
                            </div>
                            : <div>
                                <p className={classes.about_desc_title}>Рейтинги спортсменов</p>
                                <Form>
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
                                <Table bordered hover className={classes.rating_table_wrapper}>
                                    <thead>
                                    <tr>
                                        <th className={classes.table_header}>Ранг</th>
                                        <th className={classes.table_header}>ФИО</th>
                                        <th className={classes.table_header}>Страна</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Асанов Айбек Асанович</td>
                                        <td>Кыргызстан</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        }
                </Row>
            </Form>

        </div>
    )
}

export default Rating;

