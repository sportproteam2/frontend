import React, {useEffect, useState} from "react";
import style from "../../assets/styles/CompetitionStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Row} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table'
import axios from "axios";

const aboutUsStyle = makeStyles(style);

function CompetitionDetailed({match}) {
    const classes = aboutUsStyle();
    const [events, setEvents] = useState([]);
    const [playerCateg, setPlayerCateg] = useState([]);
    useEffect(async() => {
        const eventData = await axios.get("https://sportproteam2.herokuapp.com/api/event/" + match.params.id)
        setEvents(eventData.data);
        const categData = await axios.get("https://sportproteam2.herokuapp.com/api/playercategory")
        // let array = [];
        // array.push(categData.data);
        // setPlayerCateg(array)
    }, [])

    const malePlayerCount =  async (id) => {
        return await axios.get("https://sportproteam2.herokuapp.com/api/players/?sex=Мужчина&playercategory=" + id)
    }

    const femalePlayerCount =  async (id) => {
        return await axios.get("https://sportproteam2.herokuapp.com/api/players/?sex=Мужчина&playercategory=" + id)
    }

    return (
        <div className={classes.contact_wrapper}>
            <p className={classes.contact_title}>{events.name}</p>
            <p className={classes.date_desc}>{(events.dateofstart) && events.dateofstart.slice(0,10) + " - " + events.dateofend.slice(0,10)}</p>

            <Tabs defaultActiveKey="regalement" className={classes.tab}>
                <Tab eventKey="regalement" title="Регламент">
                    <Row>
                        <Col xs={6}>
                            <Table bordered hover className={classes.table_wrapper}>
                                <thead>
                                <tr>
                                    <th>Возраст участников</th>
                                    <th>Муж</th>
                                    <th>Жен</th>
                                    <th>Сумма</th>
                                </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>Кадеты</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>9</td>
                                        </tr>
                                        <tr>
                                            <td>Взрослые</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>12</td>
                                        </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs={6}>
                            <Table bordered hover className={classes.table_wrapper}>
                                <thead>
                                <tr>
                                    <th colSpan="2">Общая статистика</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Страны с конкурентами</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Клубы|организации</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>Конкуренты</td>
                                    <td>170</td>
                                </tr>

                                <tr>
                                    <td>Тренеры</td>
                                    <td>25</td>
                                </tr>

                                <tr>
                                    <td>Судьи</td>
                                    <td>0</td>
                                </tr>
                                </tbody>
                            </Table>

                        </Col>
                        <Col xs={12} className={classes.event_info}>
                            <Row>
                                <Col xs={6}>
                                    <p className={classes.event_info_text_title}>Программа соревнований</p>
                                    {/*<p>{events[0].date}</p>*/}
                                    <p>Взвешивание и мандатная комиссия с 09:00 до 22:00</p>
                                    <br/>
                                    <p className={classes.event_info_text_title}>Адрес</p>
                                    <p>пр.Манаса 54, Спорт Арена</p>
                                    <br/>
                                    <p className={classes.event_info_text_title}>Контакты</p>
                                    <p>+996707999006 Абетеков</p>
                                </Col>
                                <Col xs={6}>
                                    <p className={classes.event_info_text_title}>Судьи соревнований</p>
                                    <p>Зарегестрировано:0</p>
                                    <br/>
                                    <p className={classes.event_info_text_title}>Протокол</p>
                                    <a>
                                        <p>Протокол ссылка PDF</p>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="players" title="Участники">
                    <Row>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result1.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Взрослые</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>1976-2002</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result2.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Юниоры</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2003-2005</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result3.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Кадеты</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2006-2008</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result4.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Дети 10-11 лет</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2009-2010</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result6.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Дети 8-9 лет</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2011-2012</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result6.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Дети 6-7 лет</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2013-2014</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={10} className={classes.categories_wrapper}>
                            <p className={classes.title}>Мужчин: 19</p>
                            <Row>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={10} className={classes.categories_wrapper}>
                            <p className={classes.title}>Женщин: 9</p>
                            <Row>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Tab>
                <Tab eventKey="result" title="Результаты">
                    <Row>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result1.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Взрослые</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>1976-2002</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result2.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Юниоры</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2003-2005</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result3.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Кадеты</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2006-2008</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result4.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Дети 10-11 лет</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2009-2010</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result6.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Дети 8-9 лет</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2011-2012</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className={classes.news_main_card_wrapper} style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.761194) 57.29%, #000000 96.87%), url(/result6.png)`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={classes.news_main_card_text_wrapper}>
                                    <p className={classes.news_main_card_text}>Дети 6-7 лет</p>
                                    <hr className={classes.hr}/>
                                    <p className={classes.card_text_desc}>2013-2014</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={10} className={classes.categories_wrapper}>
                            <p className={classes.title}>Мужчин: 19</p>
                            <Row>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={10} className={classes.categories_wrapper}>
                            <p className={classes.title}>Женщин: 9</p>
                            <Row>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className={classes.cards_wrapper}>
                                        <p className={classes.card_text_bold}>до 58 кг</p>
                                        <hr className={classes.hr}/>
                                        <p className={classes.card_text_bold}>7 атлетов</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div>
                                <p className={classes.top_result_text}>Призеры -58 кг, 2002 года рождения</p>
                                <Row>
                                    <Col xs={3} className={classes.main_result_wrapper}>
                                        <img src={'/resultTop.png'}/>
                                        <p className={classes.main_result_text}>1 место</p>
                                        <p>Акматов Азамат</p>
                                    </Col>
                                    <Col xs={3} className={classes.main_result_wrapper}>
                                        <img src={'/resultTop.png'}/>
                                        <p className={classes.main_result_text}>1 место</p>
                                        <p>Акматов Азамат</p>
                                    </Col>
                                    <Col xs={3} className={classes.main_result_wrapper}>
                                        <img src={'/resultTop.png'}/>
                                        <p className={classes.main_result_text}>1 место</p>
                                        <p>Акматов Азамат</p>
                                    </Col>
                                </Row>
                                <p className={classes.top_result_text}>Результаты всех этапов меропрятия</p>
                                <Table bordered hover className={classes.table_wrapper}>
                                    <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>ФИО</th>
                                        <th>Город</th>
                                        <th>Организация</th>
                                        <th>Баллы</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Акматов Азамат Шаршенович</td>
                                        <td>Бишкек</td>
                                        <td>Федерация Таэквондо Кыргызской Республики</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Акматов Азамат Шаршенович</td>
                                        <td>Бишкек</td>
                                        <td>Федерация Таэквондо Кыргызской Республики</td>
                                        <td>1</td>
                                    </tr>                                    <tr>
                                        <td>1</td>
                                        <td>Акматов Азамат Шаршенович</td>
                                        <td>Бишкек</td>
                                        <td>Федерация Таэквондо Кыргызской Республики</td>
                                        <td>1</td>
                                    </tr>                                    <tr>
                                        <td>1</td>
                                        <td>Акматов Азамат Шаршенович</td>
                                        <td>Бишкек</td>
                                        <td>Федерация Таэквондо Кыргызской Республики</td>
                                        <td>1</td>
                                    </tr>

                                    </tbody>
                                </Table>

                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>


        </div>
    )
}

export default CompetitionDetailed;