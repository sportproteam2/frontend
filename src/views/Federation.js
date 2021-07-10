import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
import style from "../assets/styles/AboutUsStyle";

const aboutUsStyle = makeStyles(style);

function Federation() {
    const classes = aboutUsStyle();
    const [aboutData, setAboutData] = useState([]);
    const [fedData, setFedData] = useState([]);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sport/1")
            .then((response) => response.json())
            .then(res => setAboutData(res)
        )
        fetch("https://sportproteam2.herokuapp.com/api/federation/?sport=1")
            .then((response) => response.json())
            .then(res => setFedData(res)
            )
    }, [])
    console.log('fed', fedData)
    return (
        <div>
            <div className={classes.about_photo_section}>
                <div className={classes.about_title_wrapper}>
                    <p className={classes.about_title}>
                        {aboutData.name}
                    </p>
                </div>
            </div>
            <Row>
                <Col xs={8} className={classes.about_desc}>
                    <p className={classes.about_desc_title}>Об этом спорте</p>
                    {aboutData.description}
                    <p className={classes.about_desc_title}>{fedData[0].name} Кыргызской Республики</p>
                    <p>{fedData[0].description}</p>
                    <a href={"mailto:" + fedData[0].contacts}>e-mail: {fedData[0].contacts}</a>
                    <p className={classes.about_desc_title}>Программа соревнований</p>
                    <p className={classes.about_desc_title}>Рейтинги спортсменов</p>
                    <p className={classes.about_desc_title}>Новости</p>
                    <p className={classes.about_desc_title}>Галерея</p>


                </Col>
            </Row>
        </div>
    )
}
export default Federation;