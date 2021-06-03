import React from "react";
import Banner from "./LandingPage/Sections/Banner";
import News from "./LandingPage/Sections/News";
import About from "./LandingPage/Sections/About";
import AllFederations from "./LandingPage/Sections/AllFederations";

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