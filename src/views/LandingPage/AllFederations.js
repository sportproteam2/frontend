import React, {useEffect, useState} from "react";
import {Col, Container, Row} from 'react-bootstrap';
import style from "../../assets/styles/MainStyle";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

import SportCategoryData from "../../assets/data/SportsCategoryData";
import {useDispatch, useSelector} from "react-redux";
import {changeFederation} from "../../store/actions";
import {useHistory} from "react-router";

function AllFederations() {
    const allSports = makeStyles(style);
    const dispatch = useDispatch();
    const classes = allSports();
    const [sportsCategoryNames, setSportsCategoryNames] = useState(SportCategoryData);
    const [sportsData, setSportsData] = useState([]);
    const history = useHistory()
    // const availableSports = useSelector((state) => state.category);

    const getSportsCatData = ()=>{
        fetch("https://sportproteam2.herokuapp.com/api/sportcategory/")
            .then((response) => response.json())
            .then(res => setSportsCategoryNames(res))
    }

    useEffect(async () => {
        getSportsCatData();
        let data = [];
        for (const x of sportsCategoryNames) {
            const res2 = await axios.get("https://sportproteam2.herokuapp.com/api/sport/?category=" + x.id)
            data.push([{"categ": x.name}, {"sports": res2.data}]);
        }
        setSportsData(data);
    }, [])
    return (
        <Container className={classes.all_sports_wrapper}>
            <p className={classes.all_sports_general_title}>Виды спорта</p>
            <Row className={classes.all_sports_card_wrapper}>
                {
                    sportsData.map((item) => {
                        return (
                            <div>{ (item[1].sports.length>0) &&
                                <p className={classes.all_sports_title}>{item[0].categ}</p>}
                                <Row className={classes.all_sports_card_wrapper}>
                                    {item[1].sports.map((subitem) => {
                                        return (
                                            <Col xs={4}
                                                 onClick={ () => {
                                                     dispatch(changeFederation(subitem.id));
                                                     history.push(`/federations/${subitem.id}`)
                                                 }}
                                            >
                                                <img src={subitem.photo} width={200} height={184}
                                                     alt={subitem.id}/>
                                                <div className={classes.all_sports_card_text_wrapper}>
                                                    <p className={classes.all_sports_card_text_title}>{subitem.name}</p>
                                                    <p className={classes.all_sports_card_text_desc}>{subitem.short_desc}</p>
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
