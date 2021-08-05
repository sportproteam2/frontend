import React, {useEffect, useState} from "react";
import style from "../../assets/styles/NewsStyle";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import newData from "../../assets/data/NewsData";

const newsItemStyle = makeStyles(style);


function NewsDetailedItem({match}) {
    const classes = newsItemStyle();
    const [newsData, setNewsData] = useState(newData);

    useEffect(() => {
        console.log('match', match.params.id)
        fetch('https://sportproteam2.herokuapp.com/api/news/' + match.params.id)
            .then((response) => response.json())
            .then(
                res => setNewsData(res)
            )
    }, [])

    return (

        <div className={classes.news_single_item_wrapper}>
            <h1 className={classes.news_single_item_title}>{newsData.title}</h1>
            <p className={classes.news_single_item_date}>{newsData.dateofadd}</p>
            <img className={classes.news_single_item_img} src={newsData.photo} alt={newsData.id}/>
            <p className={classes.news_single_item_desc}>{newsData.article}</p>
            <p className={classes.news_single_item_additional}>
                <Link to={'/news'} className={classes.news_single_item_anchor}>Вернуться назад</Link>
            </p>
        </div>
    )
}

export default NewsDetailedItem;