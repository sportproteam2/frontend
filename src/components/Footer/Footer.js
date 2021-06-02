import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/img/logo_light.png";
import {List, ListItem} from "@material-ui/core";
import styles from "../../assets/styles/footerStyle";
import headerMenuData from "../../assets/data/HeaderMenuData";
import {Link} from "react-router-dom";

const useStyles = makeStyles(styles);

function Footer() {
    const classes = useStyles();
    const headerMenuTab = headerMenuData.map(link => <ListItem className={classes.listItem}><Link
        to={link.path}>{link.title}</Link></ListItem>);
    return (
        <footer className={classes.footer_wrapper}>
            <Container>
                <Row>
                    <Col sm={3} className={classes.footer_logo_wrapper}>
                        <img src={logo} className={classes.footer_logo} alt="logo"/>
                    </Col>
                    <Col sm={9} className={classes.footer_menu_wrapper}>
                        <Row>
                            <Col sm={4}>
                                <List>
                                    <ListItem className={classes.footer_column_name}>О нас</ListItem>
                                    {headerMenuTab}
                                </List>
                            </Col>
                            <Col sm={4}>
                                <List>
                                    <ListItem className={classes.footer_column_name}>Контакты</ListItem>
                                </List>
                            </Col>
                            <Col sm={4}>
                                <List>
                                    <ListItem className={classes.footer_column_name}>Социальные сети</ListItem>
                                </List>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;