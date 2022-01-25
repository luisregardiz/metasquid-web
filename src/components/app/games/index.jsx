import React from "react";
import FallingSquids from "../../../images/games/fallingsquids.png";
import SquidWorld from "../../../images/games/squidworld.png";
import RedLightGreenLight from "../../../images/games/redlightgreenlight.png";
import SquidRunner from "../../../images/games/squidrunner.png";
import { motion } from "framer-motion";
const Games = () => {
    return (
        <section className="flex flex-col">
            <h2 className="self-center my-10 text-6xl uppercase font-black text-shadow-ms">
                Let the games begin!
            </h2>
            <div className="max-w-3xl mx-auto space-y-10 mt-10">
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    src={FallingSquids}
                    alt="Falling Squids"
                />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    src={SquidWorld}
                    alt="Squid World"
                />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    src={RedLightGreenLight}
                    alt="Red Light Green Light"
                />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    src={SquidRunner}
                    alt="Squid Runner"
                />
            </div>
        </section>
    );
};

export default Games;
