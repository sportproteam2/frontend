import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import style from "../assets/styles/NewsStyle";
import {makeStyles} from "@material-ui/core/styles";
import NewsItem from "./NewsPage/NewsItem";
import Pagination from 'react-bootstrap/Pagination';

const newsStyle = makeStyles(style);

function News() {
    const classes = newsStyle();
    let active = 1;
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <div className={classes.news_pagination}>
            <Pagination>{items}</Pagination>
        </div>
    );
    return (
        <Container className={classes.contact_wrapper}>
            <p className={classes.contact_title}>Новости</p>
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
                        <p className={classes.contact_dropdown_label}></p>
                    </Col>
                </Row>
            </Form>
            <NewsItem/>
            {paginationBasic}
        </Container>
    )
}
export default News;