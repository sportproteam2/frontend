import React from "react";
import NewsData from "../../assets/data/NewsData";
import {Row, Col} from 'react-bootstrap';
import style from "../../assets/styles/NewsStyle";
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
                        <p className={classes.news_item_text_date}>{n.date}</p>
                        <p className={classes.news_item_text_tag}>{n.federation}</p>
                        <p className={classes.news_item_text_title}>{n.title}</p>
                        <p className={classes.news_item_text_additional}>Подробнее
                            <hr className={classes.news_hr}/>
                        </p>
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <Row>
            <Col xs={12}>
                <Row className={classes.news_global_item_wrapper}>
                    <Col xs={7}>
                        <img src={NewsData[0].imgPath} alt={NewsData[0].tag} width={600} height={380}/>
                    </Col>
                    <Col xs={5} className={classes.news_data_text}>
                        <p className={classes.news_data_date}>{NewsData[0].date}</p>
                        <p className={classes.news_data_sport_type}>{NewsData[0].federation}</p>
                        <p className={classes.news_data_sport_title}>{NewsData[0].title}</p>
                        <p className={classes.news_data_sport_desc}>{NewsData[0].desc}</p>
                        <p className={classes.news_text_additional}>Подробнее
                            <hr className={classes.news_hr}/>
                        </p>
                    </Col>
                </Row>
                <Row className={classes.news_items}>
                    {news}
                </Row>
            </Col>
        </Row>
    )
}

export default NewsItem