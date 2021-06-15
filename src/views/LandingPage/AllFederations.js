import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import style from "../../assets/styles/mainStyle";
import {makeStyles} from "@material-ui/core/styles";
import federationsData from "../../assets/data/FederationsData";

const allSports = makeStyles(style);

function AllFederations() {
    const classes = allSports();
    const fedData = federationsData.map(f => {
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
                {fedData}
            </Row>
            <p className={classes.all_sports_title}>Олимпийские виды спорта</p>
            <Row className={classes.all_sports_card_wrapper}>
                {fedData}
            </Row>
        </Container>
    )
}

export default AllFederations;