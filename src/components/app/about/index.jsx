import React from "react";
import { aboutInfo } from "../../../helpers/aboutInfo";
import Community from "../../../images/about/communityDriven.png";
import Rugg from "../../../images/about/rugg.png";
import NFTS from "../../../images/about/nfts.png";
import Play from "../../../images/about/games.png";
import Metaverse from "../../../images/about/metaverse.png";
import Staking from "../../../images/about/autoStaking.png";
import Security from "../../../images/about/security.png";
import Transparency from "../../../images/about/transparency.png";
import { motion } from "framer-motion";

const About = () => {
    const getImage = (id) => {
        switch (id) {
            case 1:
                return Community;
            case 2:
                return Rugg;
            case 3:
                return NFTS;
            case 4:
                return Play;
            case 5:
                return Metaverse;
            case 6:
                return Staking;
            case 7:
                return Security;
            case 8:
                return Transparency;
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
            }}
            id="about"
            className="my-20 py-20 flex flex-col  lg:mx-10 mx-5"
        >
            <h2 className="font-black text-6xl uppercase text-shadow-ms self-center lg:text-left text-center mt-10">
                What is metasquid?
            </h2>

            <div className="list-about lg:-mt-14 -mt-24 mb-40">
                {aboutInfo.map((info) => (
                    <article
                        key={info.id}
                        className="flex flex-col lg:items-start items-center text-center lg:text-left article-about"
                    >
                        <img
                            src={getImage(info.id)}
                            alt={info.title}
                            className="lg:w-3/5 w-1/2 relative lg:-left-28 left-6 lg:-bottom-16 -bottom-24 "
                        />
                        <h3 className="font-extrabold uppercase text-4xl mb-4">
                            {info.title}
                        </h3>
                        <p className="w-3/4 leading-loose lg:text-xl text-3xl font-medium">
                            {info.description}
                        </p>
                    </article>
                ))}
            </div>
        </motion.section>
    );
};

export default About;
