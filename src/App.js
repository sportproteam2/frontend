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
import styles from "../src/assets/styles/headerStyle";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(styles);
class App extends React.Component{
    state ={className:"" };
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.className){
                this.setState({ className: "header_light" });
            }
        }else{
            if(this.state.className){
                this.setState({ className: "" });
            }
        }

    }
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Header ref={(r)=>this.ref=r} className={this.state.className}/>
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
        )
    }
}

export default App;
