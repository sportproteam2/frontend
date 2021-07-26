import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from "react-bootstrap";
import style from "../../assets/styles/RatingStyle";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const ratingStyle = makeStyles(style);
function RatingDetailed(props) {

    const classes = ratingStyle();
    return (
        <div className={classes.container_wrapper}>
            <div className={classes.upper_container_wrapper}>
                <img src={'/rating_img.png'} className={classes.upper_container_img}/>
                <div className={classes.upper_text_wrapper}>
                    <p className={classes.bolder_title}>Фариз Сабитов</p>
                    <p className={classes.simple_text}>Wt Лицензия №: KOR-5600</p>
                </div>
            </div>
            <div className={classes.tournament_container_wrapper}>
                <p className={classes.bolder_title}>Турниры</p>
                <Row>
                    <Col xs={4}>
                        <div className={classes.card_wrapper}>
                                <div className={classes.card_text_wrapper}>
                                    <p className={classes.card_title}>Открытое первенство
                                        по Таэквондо ВТФ</p>
                                    <p>Юниоры 2004-2002 г | 63 кг</p>
                                    <hr/>
                                    <p className={classes.card_status}>1 место</p>
                                </div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className={classes.card_wrapper}>
                            <div className={classes.card_text_wrapper}>
                                <p className={classes.card_title}>Открытое первенство
                                    по Таэквондо ВТФ</p>
                                <p>Юниоры 2004-2002 г | 63 кг</p>
                                <hr/>
                                <p className={classes.card_status}>1 место</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className={classes.card_wrapper}>
                            <div className={classes.card_text_wrapper}>
                                <p className={classes.card_title}>Открытое первенство
                                    по Таэквондо ВТФ</p>
                                <p>Юниоры 2004-2002 г | 63 кг</p>
                                <hr/>
                                <p className={classes.card_status}>1 место</p>
                            </div>
                        </div>
                    </Col>
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
                    <tr>
                        <th className={classes.table_header}>Меропрятие</th>
                        <th className={classes.table_header}>Ранг</th>
                        <th className={classes.table_header}>Дата события</th>
                        <th className={classes.table_header}>Расположение</th>
                        <th className={classes.table_header}>Место</th>
                        <th className={classes.table_header}>Рейтинг очков</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Финал Гран-при по  таэквондо в Москве-2019</th>
                        <th>G-8</th>
                        <th>6-7 декабря 2019г</th>
                        <th>Москва,Россия</th>
                        <th>1</th>
                        <th>457,62</th>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default RatingDetailed;