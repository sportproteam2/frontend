import React from "react";
import style from "../assets/styles/ContactStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const aboutUsStyle = makeStyles(style);
function Rating() {
    const classes = aboutUsStyle();
    return (
        <Container className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Рейтинг спорстменов Кыргызской Республики</p>
            <Form>
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={classes.contact_dropdown_label}>Выберите вид спорта</Form.Label>
                            <Form.Control as="select" size="lg">
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                                <option>Lorem ipsum</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={classes.contact_dropdown_label}>Олимпийские виды спорта</Form.Label>
                            <Form.Control as="select" size="lg">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <p className={classes.text}>
                            Рейтинг — это и показатель спортивной формы, и инструмент самооценки, и ориентир в планах повышения спортивного мастерства. С другой стороны, для тренеров и специалистов рейтинг (не только в го, но и в других видах спорта) дает объективный критерий отбора игроков в различные сборные команды, или же кандидатов на поездку на престижные турниры. Для организаторов турниров рейтинг помогает правильно сформировать начальные группы по силе игры, проводить жеребьевку в турнирах и вообще — создать максимально равные условия выступления для всех участников, тем самым повышая качество судейства и организации турниров в целом. Ну и еще рейтинг помогает всем — и специалистам, и участникам, и зрителям — прогнозировать результаты выступления игроков в соревнованиях» .
                            Рейтинг — «внутренний порядок»
                        </p>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col xs={8}>
                    <p className={classes.contact_title}>Что такое рейтинг</p>
                    <p>

                    </p>

                </Col>
            </Row>
        </Container>
    )
}
export default Rating;