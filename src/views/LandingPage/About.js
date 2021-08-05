import React from "react";
import {Col, Row} from 'react-bootstrap';
import style from "../../assets/styles/MainStyle";
import {makeStyles} from "@material-ui/core/styles";

const mainStyle = makeStyles(style);

function About (){
    const classes = mainStyle();
    return (
        <Row className={classes.about_wrapper}>
            <Col xs={5} className={classes.about_title}>
                sport pro kyrgyz republic
            </Col>
            <Col xs={7} className={classes.about_text}>
                Развитие цифровых навыков в Кыргызстане. Создание информационного-рейтингового  портала для всех желающих и для повышения Спорта в Кыргызстане. На сайте будут размещены Новости и Рейтинги спортсменов каждой области Спорта в КР. Дальнейшее продвижение продукта и внедрение во все федерации в Министерстве спорта КР.
            </Col>
        </Row>
    )
}
export default About;