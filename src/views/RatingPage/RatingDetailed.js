import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from "react-bootstrap";
import style from "../../assets/styles/RatingStyle";
import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import {useHistory} from "react-router";

const ratingStyle = makeStyles(style);
function RatingDetailed({match}) {
    const classes = ratingStyle();
    const history = useHistory();
    const [player, setPlayer] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(async () => {
        const playersResult = await axios.get("https://sportproteam2.herokuapp.com/api/players/" + match.params.id)
        setPlayer(playersResult.data);
        const eventData = await axios.get("https://sportproteam2.herokuapp.com/api/event/?player=" + match.params.id)
        setEvents(eventData.data);
    }, [])

    return (
        <div className={classes.container_wrapper}>
            <div className={classes.upper_container_wrapper}>
                <img src={player.photo} className={classes.upper_container_img}/>
                <div className={classes.upper_text_wrapper}>
                    <p className={classes.bolder_title}>{player.name + " " + player.surname}</p>
                    <p className={classes.simple_text}>{player.license}</p>
                </div>
            </div>
            <div className={classes.tournament_container_wrapper}>
                <p className={classes.bolder_title}>Турниры</p>
                <Row>
                    {events.slice(0,2).map( (e) => {
                        return (
                            <Col xs={4} onClick={ () => {
                                history.push(`/competitions/${e.id}`)
                            }}>
                                <div className={classes.card_wrapper}>
                                    <div className={classes.card_text_wrapper}>
                                        <p className={classes.card_title}>{e.name}</p>
                                        <p>{e.location}</p>
                                        <hr/>
                                        <p className={classes.card_status}>1 место</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </div>
            <div className={classes.table_wrapper}>
                <Form
                    // onSubmit={ event => submitSearch(event)}
                >
                    <Form.Row >
                        <Col xs={2} className={classes.form}>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Control as="select"
                                              size="lg">
                                    <option value='0'>Месяц</option>
                                     <option value='1'>Январь</option>
                                     <option value='2'>Февраль</option>
                                     <option value='3'>Март</option>
                                     <option value='4'>Апрель</option>
                                     <option value='5'>Май</option>
                                     <option value='6'>Июнь</option>
                                     <option value='7'>Июль</option>
                                     <option value='8'>Август</option>
                                     <option value='9'>Сентябрь</option>
                                     <option value='10'>Октябрь</option>
                                     <option value='11'>Ноябрь</option>
                                     <option value='12'>Декабрь</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={2} className={classes.form}>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Control as="select"
                                              size="lg">
                                    <option value='0'>Год</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={3} className={classes.form}>
                            <Button variant="danger" type="submit" className={classes.submit_button}>Поиск</Button>
                        </Col>
                    </Form.Row>
                </Form>
                <Table bordered hover className={classes.rating_table_wrapper}>
                    <thead>
                    <tr >
                        <th className={classes.table_header}>Меропрятие</th>
                        <th className={classes.table_header}>Дата события</th>
                        <th className={classes.table_header}>Расположение</th>
                        <th className={classes.table_header}>Место</th>
                        <th className={classes.table_header}>Рейтинг очков</th>
                    </tr>
                    </thead>
                    <tbody>
                    {events.map( (e) => {
                        return (
                    <tr onClick={ () => {
                        history.push(`/competitions/${e.id}`)
                    }}>
                        <th>{e.name}</th>
                        <th>{e.dateofstart}</th>
                        <th>{e.location}</th>
                        <th>1</th>
                        <th>457,62</th>
                    </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default RatingDetailed;