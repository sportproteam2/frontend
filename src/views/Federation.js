import React, {useEffect, useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
import style from "../assets/styles/AboutUsStyle";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector} from "react-redux";
import {useHistory} from "react-router";
import {changeSport} from "../store/actions";

const aboutUsStyle = makeStyles(style);

function Federation() {
    const classes = aboutUsStyle();
    const [fedData, setFedData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [galleryData, setGalleryData] = useState([]);
    const [playersData, setPlayersData] = useState([]);
    const [searchName, setSearchName] = useState();
    const [searchWeight, setSearchWeight] = useState();
    const [searchOrg, setSearchOrg] = useState();
    const history = useHistory();
    const aboutData = useSelector((state) => state.sport);


    useEffect(() => {
        fetch("https://sportproteam2.herokuapp.com/api/gallery/")
            .then((response) => response.json())
            .then(res => setGalleryData(res))
        fetch("https://sportproteam2.herokuapp.com/api/federation/?sport=" + aboutData.id)
            .then((response) => response.json())
            .then(res => setFedData(res[0]))
        fetch("https://sportproteam2.herokuapp.com/api/event/?federation=" + fedData.id)
            .then((response) => response.json())
            .then(res => setEventData(res))
        fetch("https://sportproteam2.herokuapp.com/api/news/?federation="  + fedData.id)
            .then((response) => response.json())
            .then(res => setNewsData(res.results))
        fetch("https://sportproteam2.herokuapp.com/api/players/?federation=" + fedData.id)
            .then((response) => response.json())
            .then(res => setPlayersData(res))

    }, [])

    const submitForm = (event) => {
        event.preventDefault();
        let url = "https://sportproteam2.herokuapp.com/api/players/?sport=" + aboutData.id;
        if (searchWeight !=null){
            url += "&weight=" + searchWeight;
        }
        if ( searchName != null){
            url += "&name=" + searchName;
        }
        if (searchOrg != null){
            url += "&organization=" + searchOrg;
        }
        fetch(url)
            .then((response) => response.json())
            .then(res => setPlayersData(res))
    }


    const galleryItem = galleryData.map(g => {
        return (
            <Col xs={12} className={classes.gallery_photo_wrapper}>
                <img src={g.photo[0].photo} alt={g.id} className={classes.gallery_img}/>
                <div className={classes.card_text_wrapper}>
                    <p className={classes.card_tag}>{g.federation.name}</p>
                    <p className={classes.card_main_text}>{g.tags}</p>
                    <p className={classes.card_date}>{g.photo[0].dateofadd.slice(0,10)}</p>
                </div>
            </Col>)
    })
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
                    <p className={classes.about_desc_title}>{fedData.name} Кыргызской Республики</p>
                    <p>{fedData.description}</p>
                    <a href={"mailto:" + fedData.contacts}>e-mail: {fedData.contacts}</a>
                    <p className={classes.about_desc_title}>Программа соревнований</p>
                </Col>
                <Col xs={12} className={classes.ratings}>
                    <Row>
                        {eventData.map((item) => {
                                return (
                                    <Col xs={3} className={classes.event_card_wrapper}>
                                        <div className={classes.event_card_text_wrapper}>
                                            <p className={classes.event_card_title}>{item.name}</p>
                                            <Row>
                                                <Col xs={6}>
                                                    <p>Даты проведения: </p>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>{item.dateofstart.slice(0,10)} - { item.dateofend.slice(0,10)}</p>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>Местоположение:</p>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>{item.location}</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <p className={classes.event_card_status}>{item.status}</p>
                                        </div>
                                    </Col>)
                            }
                        )}

                    </Row>
                    <p className={classes.about_desc_title}>Рейтинги спортсменов</p>
                    <Form onSubmit={submitForm}>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label className={classes.rating_label}>Спортсмен</Form.Label>
                                    <Form.Control placeholder="Поиск по  имени " type="text"
                                                  value={searchName}
                                                  onChange={e => setSearchName(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="formGridWeight">
                                    <Form.Label className={classes.rating_label}>Весовая категория</Form.Label>
                                    <Form.Control placeholder="" type="text" value={searchWeight}
                                                  onChange={e => setSearchWeight(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="formGridOrgName">
                                    <Form.Label className={classes.rating_label}>Название организации</Form.Label>
                                    <Form.Control placeholder="" type="text" value={searchOrg}
                                                  onChange={e => setSearchOrg(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Button variant="danger" type="submit" className={classes.submit_button}>Поиск</Button>
                    </Form>
                    <Table bordered hover className={classes.rating_table_wrapper}>
                        <thead>
                        <tr>
                            <th className={classes.table_header}>Ранг</th>
                            <th className={classes.table_header}>ФИО</th>
                            <th className={classes.table_header}>Страна</th>
                        </tr>
                        </thead>
                        <tbody>
                        {playersData.map((item, count) => {
                            return (
                                    <tr>
                                        <td>{++count}</td>
                                        <td>{item.name} {item.surname}</td>
                                        <td>Кыргызстан</td>
                                    </tr>)
                        })
                        }
                        </tbody>
                    </Table>
                    <div className={classes.news_wrapper}>
                        <p className={classes.news_wrapper_title}>Новости</p>
                        <Button variant="danger" type="submit"
                                onClick={ () => {
                                    history.push(`/news`)
                                }}
                                className={classes.submit_button}>Смотреть все
                            новости</Button>
                    </div>
                    <Row className={classes.news_block_wrapper}>
                        <Col xs={4}>
                            <div className={classes.news_main_card_wrapper}
                                 style={{backgroundImage: `url(https://docs.google.com/uc?id=1SOBj1RIWZFrGcsO6UknPXlXtyOfT_s48)`}}
                            >
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>newsData[0].title}</p>
                                    <p>Подробнее</p>
                                    <hr className={classes.hr}/>
                                </div>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <Row>
                                {
                                    newsData.slice(0, 4).map((n) => {
                                        return (
                                            <Col xs={6}
                                                 onClick={ () => history.push(`/news/${n.id}`)}>
                                                <div className={classes.news_item}>
                                                    <img src={n.photo} alt={n.tag} className={classes.news_item_img}/>
                                                    <div className={classes.news_item_text_wrapper}>
                                                        <p className={classes.news_item_text_date}>{n.dateofadd.slice(0, 10)}
                                                            <span
                                                                className={classes.news_item_text_tag}>{n.sport.name}</span>
                                                        </p>
                                                        <p className={classes.news_item_text_title}>{n.title}</p>
                                                        <p className={classes.news_item_text_additional}>Подробнее</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} className={classes.gallery_wrapper}>
                    <div className={classes.gallery_top}>
                        <p className={classes.news_wrapper_title}>Галерея</p>
                        <Button variant="danger" type="submit" className={classes.submit_button}>Смотреть все
                            новости</Button>
                    </div>
                    <Row>
                        {galleryItem}
                    </Row>
                </Col>

            </Row>
        </div>
    )
}

export default Federation;