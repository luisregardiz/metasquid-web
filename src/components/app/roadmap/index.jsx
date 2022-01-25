import { motion } from "framer-motion";
import React from "react";
import { roadmapQ1, roadmapQ2, roadmapQ4 } from "../../../helpers/roadmap";
import Q4 from "../../../images/roadmap/2021Q4.png";
import Q1 from "../../../images/roadmap/2022Q1.png";
import Q2 from "../../../images/roadmap/2022Q2.png";
const Roadmap = () => {
    return (
        <section id="roadmap" className="flex flex-col mt-20 mb-10">
            <h2 className="self-center mt-10 mb-20 text-6xl uppercase font-black text-shadow-ms ">
                Roadmap
            </h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -100 },
                }}
                className="list-roadmap lg:mx-10 mx-5"
            >
                <div className="wrapper-presale">
                    <div className="roadmap-card">
                        <img src={Q4} alt="Q4" className="md:w-40 w-52 mb-5" />
                        <ul className="space-y-3 list-inside list-disc">
                            {roadmapQ4.map((item, index) => (
                                <li
                                    key={index}
                                    className="lg:text-base text-lg"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="wrapper-presale">
                    <div className="roadmap-card">
                        <img src={Q1} alt="Q4" className="md:w-40 w-52 mb-5" />
                        <ul className="space-y-3 list-inside list-disc ">
                            {roadmapQ1.map((item, index) => (
                                <li
                                    key={index}
                                    className="lg:text-base text-lg"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="wrapper-presale">
                    <div className="roadmap-card">
                        <img src={Q2} alt="Q4" className="md:w-40 w-52 mb-5" />
                        <ul className="space-y-3 list-inside list-disc">
                            {roadmapQ2.map((item, index) => (
                                <li
                                    key={index}
                                    className="lg:text-base text-lg"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Roadmap;
