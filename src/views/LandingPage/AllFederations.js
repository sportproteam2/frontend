import React, {useEffect, useState} from "react";
import {Col, Container, Row} from 'react-bootstrap';
import style from "../../assets/styles/MainStyle";
import {makeStyles} from "@material-ui/core/styles";
import federationsData from "../../assets/data/FederationsData";

const allSports = makeStyles(style);

function AllFederations() {
    const classes = allSports();
    const [sportsData1, setSportsData1] = useState(federationsData);
    const [sportsData2, setSportsData2] = useState(federationsData);
    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/sport/1").then(
            res => setSportsData1(res.data)
        );
        fetch("https://sportproteam2.herokuapp.com/api/sport/2").then(
            res => setSportsData2(res.data)
        );
        console.log(sportsData1)
    })
    const fedData1 = sportsData1.map(f => {
        return (
            <Col xs={2} className={classes.all_sports_card}>
                <img src={f.imgPath} width={200} height={184} alt={f.id}/>
                <div className={classes.all_sports_card_text_wrapper}>
                    <p className={classes.all_sports_card_text_title}>{f.title}</p>
                    <p className={classes.all_sports_card_text_desc}>{f.desc}</p>
                </div>
            </Col>
        )
    })
    const fedData2 = sportsData2.map(f => {
        return (
            <Col xs={2} className={classes.all_sports_card}>
                <img src={f.imgPath} width={200} height={184} alt={f.id}/>
                <div className={classes.all_sports_card_text_wrapper}>
                    <p className={classes.all_sports_card_text_title}>{f.title}</p>
                    <p className={classes.all_sports_card_text_desc}>{f.desc}</p>
                </div>
            </Col>
        )
    })
    return (
        <Container className={classes.all_sports_wrapper}>
            <p className={classes.all_sports_general_title}>Виды спорта</p>
            <p className={classes.all_sports_title}>Национальные виды спорта</p>
            <Row className={classes.all_sports_card_wrapper}>
                {fedData1}
            </Row>
            <p className={classes.all_sports_title}>Олимпийские виды спорта</p>
            <Row className={classes.all_sports_card_wrapper}>
                {fedData2}
            </Row>
        </Container>
    )
}

export default AllFederations;