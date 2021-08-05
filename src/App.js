import React, {Fragment, useState} from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Rating from "./views/RatingPage/Rating"
import Federation from "./views/Federation"
import Main from "./views/Main"
import Competition from "./views/CompetitionPage/Competition"
import News from "./views/NewsPage/News"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NewsDetailedItem from "./views/NewsPage/NewsDetailedItem";
import CompetitionDetailed from "./views/CompetitionPage/CompetitionDetailed";
import RatingDetailed from "./views/RatingPage/RatingDetailed";

function App() {


    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/news/:id" component={NewsDetailedItem} />
                    <Route exact path="/competitions" component={Competition}/>
                    <Route exact path="/competitions/:id" component={CompetitionDetailed} />
                    <Route exact path="/rating" component={Rating}/>
                    <Route exact path="/rating/:id" component={RatingDetailed}/>
                    <Route exact path="/federations/:id" component={Federation}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/contacts" component={Contact}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
