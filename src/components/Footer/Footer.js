import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/img/logo_light.png";
import {List, ListItem} from "@material-ui/core";
import styles from "../../assets/styles/FooterStyle";
import headerMenuData from "../../assets/data/HeaderMenuData";
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from "react-router-dom";

const useStyles = makeStyles(styles);

function Footer() {
    const classes = useStyles();
    const headerMenuTab = headerMenuData.map(link =>
        <ListItem className={classes.footer_column_text}>
            <Link to={link.path} className={classes.footer_column_anchor}>{link.title}</Link>
        </ListItem>);
    return (
        <footer className={classes.footer_wrapper}>
            <Container>
                <Row className={classes.footer_content_wrapper}>
                    <Col sm={3}>
                        <img src={logo} className={classes.footer_logo} alt="logo"/>
                    </Col>
                    <Col sm={9} className={classes.footer_menu_wrapper}>
                        <Row>
                            <Col sm={4}>
                                <List className={classes.footer_column_wrapper}>
                                    <ListItem className={classes.footer_column_name}>О нас</ListItem>
                                    <hr className={classes.footer_hr}/>
                                    {headerMenuTab}
                                </List>
                            </Col>
                            <Col sm={4}>
                                <List>
                                    <ListItem className={classes.footer_column_name}>Контакты</ListItem>
                                    <hr className={classes.footer_hr}/>
                                    <ListItem className={classes.footer_column_text}><EmailIcon
                                        className={classes.footer_column_logo}/>AIS.kg@gmail.com</ListItem>
                                    <ListItem className={classes.footer_column_text}><RoomIcon
                                        className={classes.footer_column_logo}/> Г. Бишкек ул. Токтогула
                                        100/1</ListItem>
                                    <ListItem className={classes.footer_column_text}><PhoneIcon
                                        className={classes.footer_column_logo}/> 0707256789</ListItem>
                                </List>
                            </Col>
                            <Col sm={4}>
                                <List>
                                    <ListItem className={classes.footer_column_name}>Социальные сети</ListItem>
                                    <hr className={classes.footer_hr}/>
                                    <ListItem><FacebookIcon
                                        className={classes.footer_column_logo}/><InstagramIcon/></ListItem>
                                </List>
                            </Col>
                        </Row>
                    </Col>
                    {/*<Col xs={12} className={classes.footer_rights}>*/}
                    {/*    <p>Разработано Neobis 2021<br/>All right reserved © 2021</p>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;