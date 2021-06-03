import React from "react";
import newsData from"../../../assets/data/NewsData";
import style from "../../../assets/styles/mainStyle";
import {makeStyles} from "@material-ui/core/styles";
import { Container, Row, Col} from 'react-bootstrap';

const mainStyle = makeStyles(style);

function News(){
    const classes = mainStyle();
    const news = newsData.map((n) => {
        return (
            <div className={classes.news_item}>
                <Row>
                    <Col xs={5}>
                        <img src={n.imgPath} alt={n.tag} width={150} height={150}/>
                    </Col>
                    <Col xs={7} className={classes.news_text_wrapper}>
                        <p className={classes.news_text_tag}>{n.tag}</p>
                        <p className={classes.news_text_title}>{n.title}</p>
                        <p className={classes.news_text_additional}>Подробнее<hr className={classes.news_hr}/>
                        </p>
                    </Col>
                </Row>
            </div>
        )
    })
    return (
        <div className={classes.news_wrapper}>
            {news}
        </div>
    );
}

export default News;