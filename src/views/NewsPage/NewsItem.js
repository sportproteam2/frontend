import React from "react";
import NewsData from "../../assets/data/NewsData";
import {Col, Row} from 'react-bootstrap';
import style from "../../assets/styles/NewsStyle";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const newsStyle = makeStyles(style);

function NewsItem() {
    const classes = newsStyle();

    const news = NewsData.map(n => {
        return (
            <Col xs={4}>
                <div className={classes.news_item}>
                    <img src={n.imgPath} alt={n.tag} className={classes.news_item_img}/>
                    <div className={classes.news_item_text_wrapper}>
                        <p className={classes.news_item_text_date}>{n.date.slice(0, 5)}
                            <span className={classes.news_item_text_tag}>{n.federation}</span>
                        </p>
                        <p className={classes.news_item_text_title}>{n.title}</p>
                            <p className={classes.news_item_text_additional}>Подробнее</p>
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <Row>
            <Col xs={12}>
                <div className={classes.news_global_item_wrapper}>
                    <img src={process.env.PUBLIC_URL + '/news4.png'} alt={NewsData[0].tag}
                         className={classes.news_data_item_img}/>
                    <div className={classes.news_data_text}>
                        <p className={classes.news_data_date}>{NewsData[0].date}
                            <span className={classes.news_data_sport_type}>{NewsData[0].federation}</span>
                        </p>
                        <p className={classes.news_data_sport_title}>{NewsData[0].title}</p>
                        <p className={classes.news_data_sport_desc}>{NewsData[0].desc.slice(0,200)}</p>
                        <p className={classes.news_data_text_additional}>
                            <Link to={'/newsItem/1'} className={classes.news_data_text_anchor}>Подробнее
                            </Link>
                        </p>
                    </div>
                </div>
                <Row className={classes.news_items}>
                    {news}
                </Row>
            </Col>
        </Row>
    )
}

export default NewsItem