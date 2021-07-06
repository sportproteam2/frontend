import React, {useEffect, useState} from "react";
import {Col, Container, Row} from 'react-bootstrap';
import style from "../../assets/styles/MainStyle";
import {makeStyles} from "@material-ui/core/styles";
import federationsData from "../../assets/data/FederationsData";
import {forEach} from "react-bootstrap/ElementChildren";

const allSports = makeStyles(style);

function AllFederations() {
    const classes = allSports();
    const [sportsCategoryNames, setSportsCategoryNames] = useState([]);
    const [sportsData, setSportsData] = useState([]);

    useEffect(() => {
        let data = [];
        fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
            .then((response) => response.json())
            .then(res => {
                    setSportsCategoryNames(res);
                    res.forEach(x => {
                        fetch("https://sportproteam2.herokuapp.com/api/sport/?category=" + x.id)
                            .then((response) => response.json())
                            .then(res => data.push([{"categ": x.name}, {"sports": res}]));
                    });
                }
            );
        // setSportsData(data);
        // console.log("sportsData: ", sportsData);
    })

    return (
        <Container className={classes.all_sports_wrapper}>
            <p className={classes.all_sports_general_title}>Виды спорта</p>
            <Row className={classes.all_sports_card_wrapper}>
                {
                    // sportsData[0].forEach( x => {
                    //     console.log("x", x);
                    // })
                    sportsData.map((item) => {
                        return (
                            <div>
                                <p className={classes.all_sports_title}>{item.categ}</p>
                                <Row className={classes.all_sports_card_wrapper}>
                                    {
                                        item.map((subitem, i) => {
                                            return (
                                                <Col xs={2} className={classes.all_sports_card}>
                                                    <img src={subitem.imgPath} width={200} height={184}
                                                         alt={subitem.id}/>
                                                    <div className={classes.all_sports_card_text_wrapper}>
                                                        <p className={classes.all_sports_card_text_title}>{subitem.title}</p>
                                                        <p className={classes.all_sports_card_text_desc}>{subitem.desc}</p>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default AllFederations;