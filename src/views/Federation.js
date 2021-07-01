import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
import style from "../assets/styles/AboutUsStyle";

const aboutUsStyle = makeStyles(style);

function Federation() {
    const classes = aboutUsStyle();
    const [aboutData, setAboutData] = useState([]);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sport/1")
            .then((response) => response.json())
            .then(res => setAboutData(res)
        )
    }, [])
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
                    {aboutData.description}
                </Col>
            </Row>
        </div>
    )
}
export default Federation;