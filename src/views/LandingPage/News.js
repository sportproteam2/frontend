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
            .then(res => setNewsData(res.results))
    }, [])
    const news = newsData.slice(0, 3).map((n) => {
        return (
            <Col xs={4} className={classes.news_item} key={n.id}>
                    <div className={classes.photo_wrapper}>
                        <img src={n.photo} alt={n.tag} className={classes.photo}/>
                    </div>
                    <div className={classes.news_text_wrapper}>
                        <p className={classes.news_text_tag}>{n.tags}</p>
                        <p className={classes.news_text_title}>{n.title}</p>
                        <p className={classes.news_text_additional}>
                            <Link to={'/news/' + n.id} className={classes.news_text_anchor}>Подробнее</Link>
                        </p>
                    </div>
            </Col>
        )
    })
    return (
        <div className={classes.news_wrapper}>
            <Row className={classes.news_container}>
                {news}
            </Row>
        </div>
    );
}

export default News;