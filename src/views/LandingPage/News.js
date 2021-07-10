import React, {useEffect, useState} from "react";
import newData from "../../assets/data/NewsData";
import style from "../../assets/styles/MainStyle";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

const mainStyle = makeStyles(style);

function News(){
    const classes = mainStyle();
    const [newsData, setNewsData] = useState(newData);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/news/")
            .then((response) => response.json())
            .then(
            res => setNewsData(res)
        )
    }, [])
    console.log("newsData: " + newsData)
    const news = newsData.slice(0, 3).map((n) => {
        return (
            <div className={classes.news_item}>
                <Row>
                    <Col xs={5} className={classes.photo_wrapper}>
                        <img src={n.photo} alt={n.tag} className={classes.photo}/>
                    </Col>
                    <Col xs={7} className={classes.news_text_wrapper}>
                        <p className={classes.news_text_tag}>Последние новости</p>
                        <p className={classes.news_text_title}>{n.title}</p>
                        <p className={classes.news_text_additional}>
                            <Link to={'/newsItem/' + n.id} className={classes.news_text_anchor}>Подробнее</Link>
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