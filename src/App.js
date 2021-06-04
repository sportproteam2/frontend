import React from "react";
import {Fragment} from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Rating from "./views/Rating"
import Federation from "./views/Federation"
import Main from "./views/Main"
import Competition from "./views/Competition"
import News from "./views/News"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NewsDetailedItem from "./views/NewsPage/NewsDetailedItem";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/newsItem/1" component={NewsDetailedItem} />
                    <Route exact path="/rating" component={Rating}/>
                    <Route exact path="/federations" component={Federation}/>
                    <Route exact path="/competitions" component={Competition}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/contacts" component={Contact}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
