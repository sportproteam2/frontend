import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import styles from "../../assets/styles/HeaderStyle";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar"
import {Col, Container, Row} from 'react-bootstrap';
import {List, ListItem} from '@material-ui/core';
import logo1 from '../../assets/img/logo_light.png'
import logo2 from '../../assets/img/logo.png'
import headerMenuData from "../../assets/data/HeaderMenuData";

const useStyles = makeStyles(styles);

function Header(){
    const classes = useStyles();
    const [header, setHeader] = useState(classes.appBar);
    const [logo, setLogo] = useState(logo1);
    const [listItemAnchor, setListItemAnchor] = useState(classes.listItem_anchor);


    const listenScrollEvent = (listenScrollEvent) => {
        if (window.scrollY < 70){
            setListItemAnchor(classes.listItem_anchor);
            setHeader(classes.appBar);
            setLogo(logo1);
        } else {
            setListItemAnchor(classes.listItem_anchor2);
            setHeader(classes.appBar2);
            setLogo(logo2);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    const headerMenuTab = headerMenuData.map( link =>
        <ListItem key={link.id} className={classes.listItem}>
            <NavLink to={link.path} className={listItemAnchor} activeClassName={classes.listItem_active}>{link.title}</NavLink>
        </ListItem>);

    return (
        <nav>
            <AppBar position="fixed" className={header}>
                <Container>
                    <Row className={classes.appBar_container}>
                        <Col sm={3} className={classes.appBar_logo_wrapper}>
                            <Link to="/">
                            <img src={logo} alt="logo" className={classes.appBar_logo}/>
                            </Link>
                        </Col>
                        <Col sm={8} className={classes.appBar_menu}>
                             <List className={classes.list}>
                                 {headerMenuTab}
                             </List>
                        </Col>
                    </Row>
                </Container>
            </AppBar>
        </nav>
    )
}
export default Header;