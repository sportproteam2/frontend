import React, {useEffect, useState} from "react";
import style from "../assets/styles/CompetitionStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import eventData from "../assets/data/EventData";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table'

const aboutUsStyle = makeStyles(style);

function CompetitionDetailed() {
    const classes = aboutUsStyle();
    const [events, setSEvents] = useState(eventData);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
            .then((response) => response.json())
            .then(res => setSEvents(res));
    }, [])
    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>{events[0].name}</p>
            <p className={classes.date_desc}>{events[0].startDate} {events[0].endDate}</p>

            <Tabs defaultActiveKey="profile">
                <Tab eventKey="regalement" title="Регламент">
                    <Row>
                        <Col xs={6}>
                            <Table bordered hover className={classes.table_wrapper}>
                                <thead>
                                <tr>
                                    <th>Возраст участников</th>
                                    <th>Муж</th>
                                    <th>Жен</th>
                                    <th>Сумма</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Дети 6-7 лет(2013-2014)</td>
                                    <td>8</td>
                                    <td>12</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Дети 6-7 лет(2013-2014)</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>19</td>
                                </tr>
                                <tr>
                                    <td>Дети 6-7 лет(2013-2014)</td>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>5</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs={6}>
                            <Table bordered hover className={classes.table_wrapper}>
                                <thead>
                                <tr>
                                    <th colSpan="2">Общая статистика</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Страны с конкурентами</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Клубы|организации</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>Конкуренты</td>
                                    <td>170</td>
                                </tr>

                                <tr>
                                    <td>Тренеры</td>
                                    <td>25</td>
                                </tr>

                                <tr>
                                    <td>Судьи</td>
                                    <td>0</td>
                                </tr>
                                </tbody>
                            </Table>

                        </Col>
                        <Col xs={12} className={classes.event_info}>
                            <Row>
                                <Col xs={6}>
                                    <p className={classes.event_info_text_title}>Программа соревнований</p>
                                    <p>{events[0].startDate}</p>
                                    <p>Взвешивание и мандатная комиссия с 09:00 до 22:00</p>
                                    <br/>
                                    <p className={classes.event_info_text_title}>Адрес</p>
                                    <p>пр.Манаса 54, Спорт Арена</p>
                                    <br/>
                                    <p className={classes.event_info_text_title}>Контакты</p>
                                    <p>+996707999006 Абетеков</p>
                                </Col>
                                <Col xs={6}>
                                    <p className={classes.event_info_text_title}>Судьи соревнований</p>
                                    <p>Зарегестрировано:0</p>
                                    <br/>
                                    <p className={classes.event_info_text_title}>Протокол</p>
                                    <a>
                                        <p>Протокол ссылка PDF</p>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="team" title="Команда">
                    <Table bordered hover className={classes.table_wrapper}>
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Город</th>
                            <th>Организация</th>
                            <th>Участники</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Бишкек</td>
                            <td>Федерация Таэквондо Кыргызской Республики</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Бишкек</td>
                            <td>Федерация Таэквондо Кыргызской Республики</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Бишкек</td>
                            <td>Федерация Таэквондо Кыргызской Республики</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Бишкек</td>
                            <td>Федерация Таэквондо Кыргызской Республики</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Бишкек</td>
                            <td>Федерация Таэквондо Кыргызской Республики</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Бишкек</td>
                            <td>Федерация Таэквондо Кыргызской Республики</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Бишкек</td>
                            <td>Федерация Таэквондо Кыргызской Республики</td>
                            <td>1</td>
                        </tr>


                        </tbody>
                    </Table>

                </Tab>
                <Tab eventKey="setka" title="Сетки">
                </Tab>
                <Tab eventKey="result" title="Результаты">
                </Tab>
            </Tabs>


        </div>
    )
}

export default CompetitionDetailed;