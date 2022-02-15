import React from "react";
import About from "../../components/app/about";
import Games from "../../components/app/games";
import Home from "../../components/app/home";
import Presale from "../../components/app/presale";
import Roadmap from "../../components/app/roadmap";
import Team from "../../components/app/team";
import Tokenomics from "../../components/app/tokenomics";
import VideoIntro from "../../components/app/video";

const HomePage = () => {
    return (
        <>
            <Home />
            <Presale />
            <VideoIntro />
            <About />
            <Tokenomics />
            <Games />
            <Roadmap />
            <Team />
        </>
    );
};

export default HomePage;
