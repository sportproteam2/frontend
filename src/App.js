import React from "react";
import {Fragment} from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer"
import Rating from "./components/Rating"
import Federation from "./components/Federation"
import Main from "./components/Main"
import Competition from "./components/Competition"
import News from "./components/News"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
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
