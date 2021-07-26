import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import style from "../../assets/styles/MainStyle";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect} from "react";
import CompetitonsData from "../../assets/data/CompetitonsData";

const mainStyle = makeStyles(style);
function Banner(){
    const classes = mainStyle();
    const [bannerData, setBannerData] = useState(CompetitonsData);
    // useEffect(() => {
    //     fetch("https://sportproteam2.herokuapp.com/api/event")
    //         .then((response) => response.json())
    //         .then(res => setBannerData(res)
    //     )
    // }, [])
    const carouselData = bannerData.map((c) => {
        return (<Carousel.Item interval={5000} key={c.id}>
            <img src={c.path} alt={c.id} className={classes.carousel_img}/>
            {/*<Carousel.Caption className={classes.caption}>*/}
            {/*    <p>{c.desc}</p>*/}
            {/*    <Button variant="danger" href={"https://sportproteam2.herokuapp.com/api/event" + c.id} className={classes.button}>Перейти к соревнованиям</Button>*/}
            {/*</Carousel.Caption>*/}
        </Carousel.Item>)
    })
    return (
        <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" className={classes.carousel}>
            {carouselData}
        </Carousel>
    )
}

export default Banner