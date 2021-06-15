import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "../../assets/styles/headerStyle";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar"
import {Col, Container, Row} from 'react-bootstrap';
import {List, ListItem} from '@material-ui/core';
import logo from '../../assets/img/logo_light.png'
import headerMenuData from "../../assets/data/HeaderMenuData";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(styles);

function Header(){
    const classes = useStyles();
    const [header, setHeader] = useState(classes.appBar);
    const [listItemAnchor, setListItemAnchor] = useState(classes.listItem_anchor);

    const listenScrollEvent = (event) => {
        if (window.scrollY < 70){
            setListItemAnchor(classes.listItem_anchor);
            setHeader(classes.appBar);
        } else {
            setListItemAnchor(classes.listItem_anchor2);
            setHeader(classes.appBar2);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    const headerMenuTab = headerMenuData.map( link =>
        <ListItem key={link.id} className={classes.listItem}>
            <Link to={link.path} className={listItemAnchor}>{link.title}</Link>
        </ListItem>);

    return (
        <nav>
            <AppBar position="fixed" className={header}>
                <Container>
                    <Row className={classes.appBar_container}>
                        <Col sm={3} className={classes.appBar_logo_wrapper}>
                            <img src={logo} alt="logo" className={classes.appBar_logo}/>
                        </Col>
                        <Col sm={9} className={classes.appBar_menu}>
                            <Row>
                                <Col sm={9} >
                                    <List className={classes.list}>
                                        {headerMenuTab}
                                    </List>
                                </Col>
                                <Col sm={3} className={classes.appBar_icon_wrapper}>
                                    <SearchIcon/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </AppBar>
        </nav>
    )
}
export default Header;