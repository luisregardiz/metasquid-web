import React from "react";
import ReactPlayer from "react-player";
import Intro from "../../../videos/metasquid-intro.mp4";

const VideoIntro = () => {
    return (
        <section className="my-20 player-wrapper flex flex-col items-center">
            <ReactPlayer
                url={Intro}
                controls={true}
                width="80%"
                height="100%"
                className="react-player"
            />
        </section>
    );
};

export default VideoIntro;
