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
        fetch("https://sportproteam2.herokuapp.com/api/news/").then(
            res => setNewsData(res.data)
        )
        console.log(newsData)
    })
    const news = newsData.slice(0, 3).map((n) => {
        return (
            <div className={classes.news_item}>
                <Row>
                    <Col xs={5}>
                        <img src={n.imgPath} alt={n.tag} width={150} height={150}/>
                    </Col>
                    <Col xs={7} className={classes.news_text_wrapper}>
                        <p className={classes.news_text_tag}>{n.tag}</p>
                        <p className={classes.news_text_title}>{n.title}</p>
                        <p className={classes.news_text_additional}>
                            <Link to={'/newsItem/' + n.id} className={classes.news_text_anchor}>
                                Подробнее<hr className={classes.news_hr}/>
                            </Link>
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