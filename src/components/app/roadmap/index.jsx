import { motion } from "framer-motion";
import React from "react";
import { roadmapQ1, roadmapQ2, roadmapQ4 } from "../../../helpers/roadmap";
import Q4 from "../../../images/roadmap/2021Q4.png";
import Q1 from "../../../images/roadmap/2022Q1.png";
import Q2 from "../../../images/roadmap/2022Q2.png";
import Check from "../../../images/check.svg";
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
                        <h4 className="text-gradient font-extrabold text-4xl mb-4">
                            Q1 - 2022
                        </h4>
                        <ul className="space-y-3 ">
                            {roadmapQ4.map((item, index) => (
                                <li
                                    key={index}
                                    className="lg:text-base text-lg flex items-center space-x-2"
                                >
                                    {item.completed ? (
                                        <img
                                            src={Check}
                                            alt="Check"
                                            className="w-5"
                                        />
                                    ) : (
                                        <div className="h-5 w-5 rounded-full border-2 border-meta-fuchsia road-pending"></div>
                                    )}

                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="wrapper-presale">
                    <div className="roadmap-card">
                        <h4 className="text-gradient font-extrabold text-4xl mb-4">
                            Q2 - 2022
                        </h4>
                        <ul className="space-y-3  ">
                            {roadmapQ1.map((item, index) => (
                                <li
                                    key={index}
                                    className="lg:text-base text-lg flex items-center space-x-2"
                                >
                                    {item.completed ? (
                                        <img
                                            src={Check}
                                            alt="Check"
                                            className="w-5"
                                        />
                                    ) : (
                                        <div className="h-5 w-5 rounded-full border-2 border-meta-fuchsia road-pending"></div>
                                    )}
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="wrapper-presale">
                    <div className="roadmap-card">
                        <h4 className="text-gradient font-extrabold text-4xl mb-4">
                            Q3 - 2022
                        </h4>
                        <ul className="space-y-3 ">
                            {roadmapQ2.map((item, index) => (
                                <li
                                    key={index}
                                    className="lg:text-base text-lg flex items-center space-x-2"
                                >
                                    {item.completed ? (
                                        <img
                                            src={Check}
                                            alt="Check"
                                            className="w-5"
                                        />
                                    ) : (
                                        <div className="h-5 w-5 rounded-full border-2 border-meta-fuchsia road-pending"></div>
                                    )}
                                    <span>{item.name}</span>
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
