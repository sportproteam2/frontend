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
    const [events, setSEvents] = useState([]);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/event/")
            .then((response) => response.json())
            .then(res => setSEvents(res));
    }, [])
    return (
        <div className={classes.contact_wrapper}>
            {/*<p className={classes.contact_title}>{events[0].name}</p>*/}
            {/*<p className={classes.date_desc}>{events[0].date.slice(0,10)}</p>*/}

            <Tabs defaultActiveKey="profile">
                <Tab eventKey="regalement" title="Регламент">
                </Tab>
                <Tab eventKey="team" title="Команда">

                </Tab>
                <Tab eventKey="players" title="Участники">
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