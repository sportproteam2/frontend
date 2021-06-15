import React from "react";
import style from "../../assets/styles/NewsStyle";
import {makeStyles} from "@material-ui/core/styles";
import NewsData from "../../assets/data/NewsData";
import {Link} from "react-router-dom";

const newsItemStyle = makeStyles(style);


function NewsDetailedItem() {
    const classes = newsItemStyle();
    return (

        <div className={classes.news_single_item_wrapper}>
            <h1 className={classes.news_single_item_title}>{NewsData[0].title}</h1>
            <p className={classes.news_single_item_date}>{NewsData[0].date}</p>
            <img className={classes.news_single_item_img} src={NewsData[0].imgPath} alt={NewsData[0].id}/>
            <p className={classes.news_single_item_desc}>{NewsData[0].desc}</p>
            <p className={classes.news_single_item_additional}>
                <Link to={'/news'} className={classes.news_single_item_anchor}>Вернуться назад
                </Link>
            </p>
        </div>
    )
}

export default NewsDetailedItem;