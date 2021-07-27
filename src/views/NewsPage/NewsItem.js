import React from "react";
import NewsData from "../../assets/data/NewsData";
import {Col, Row} from 'react-bootstrap';
import style from "../../assets/styles/NewsStyle";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const newsStyle = makeStyles(style);

function NewsItem(props) {
    const classes = newsStyle();

    const news = props.items.slice(1).map(n => {
        return (
            <Col xs={4}>
                <div className={classes.news_item}>
                    <img src={n.photo} alt={n.tag} className={classes.news_item_img}/>
                    <div className={classes.news_item_text_wrapper}>
                        <p className={classes.news_item_text_date}>{n.dateofadd.slice(0, 10)}
                            <span className={classes.news_item_text_tag}>{n.sport.name}</span>
                        </p>
                        <p className={classes.news_item_text_title}>{n.title}</p>
                            <Link to={'/news/' + n.id} className={classes.news_item_text_additional}>Подробнее</Link>
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <Row>
            <Col xs={12}>
                {/*<div className={classes.news_global_item_wrapper}>*/}
                {/*    <img src={props.items[0].photo} alt={props.items[0].tags} className={classes.news_data_item_img}/>*/}
                {/*    <div className={classes.news_data_text}>*/}
                {/*        <p className={classes.news_data_date}>{props.items[0].dateofadd.slice(0, 10)}*/}
                {/*            <span className={classes.news_data_sport_type}>{props.items[0].sport.name}</span>*/}
                {/*        </p>*/}
                {/*        <p className={classes.news_data_sport_title}>{props.items[0].title}</p>*/}
                {/*        <p className={classes.news_data_sport_desc}>{props.items[0].article.slice(0,400)} ...</p>*/}
                {/*        <p className={classes.news_data_text_additional}>*/}
                {/*            <Link to={'/newsItem/1'} className={classes.news_data_text_anchor}>Подробнее*/}
                {/*            </Link>*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Row className={classes.news_items}>
                    {news}
                </Row>
            </Col>
        </Row>
    )
}

export default NewsItem