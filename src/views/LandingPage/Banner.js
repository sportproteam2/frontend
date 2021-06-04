import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import competitionsData from "../../assets/data/CompetitonsData";
import style from "../../assets/styles/mainStyle";
import {makeStyles} from "@material-ui/core/styles";
import Button from 'react-bootstrap/Button'

const mainStyle = makeStyles(style);
function Banner(){
    const classes = mainStyle();
    const bannerData = competitionsData.map((c) => {
        return (<Carousel.Item interval={5000}>
            <img src={c.path} alt={c.id} className={classes.carousel_img}/>
            <Carousel.Caption className={classes.caption}>
                <p>{c.desc}</p>
                <Button variant="danger" href="#" className={classes.button}>Перейти к соревнованиям</Button>
            </Carousel.Caption>
        </Carousel.Item>)
    })
    return (
        <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" className={classes.carousel}>
            {bannerData}
        </Carousel>
    )
}

export default Banner