import React from "react";
import Banner from "./LandingPage/Banner";
import News from "./LandingPage/News";
import About from "./LandingPage/About";
import AllFederations from "./LandingPage/AllFederations";

function Main() {
    return (
        <div>
            <Banner/>
            <News/>
            <About/>
            <AllFederations/>
        </div>
    )
}
export default Main;