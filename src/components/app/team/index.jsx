import React from "react";
import Mitchel from "../../../images/team/mitchel.png";
import Kevin from "../../../images/team/kevin.png";
import Michel from "../../../images/team/michel.png";
import Alex from "../../../images/team/alex.png";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
const Team = () => {
    return (
        <section id="team" className="flex flex-col my-20 py-20">
            <h2 className="self-center my-10 text-6xl uppercase font-black text-shadow-ms">
                Team
            </h2>
            <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-between lg:mx-10 mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}
                    className="flex flex-col items-center"
                >
                    <img src={Mitchel} alt="Mitchel" className="w-52" />
                    <h4 className="text-2xl font-bold">Mitchel Ferry</h4>
                    <span>Chief Executive Officer</span>
                    <a
                        href="https://www.linkedin.com/in/mitchel-ferry-823295227/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-2"
                    >
                        <BsLinkedin className="text-2xl hover:text-gray-300 cursor-pointer" />
                    </a>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}
                    className="flex flex-col items-center"
                >
                    <img
                        src={Alex}
                        alt="Alex"
                        className="w-52 border-4 rounded-full border-meta-purple"
                    />
                    <h4 className="text-2xl font-bold mt-2">Alex Grande</h4>
                    <span>Chief Operating Officer</span>
                    <a
                        href="https://www.linkedin.com/in/alejandro-grande-430a24228/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-2"
                    >
                        <BsLinkedin className="text-2xl hover:text-gray-300 cursor-pointer" />
                    </a>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}
                    className="flex flex-col items-center"
                >
                    <img src={Kevin} alt="Kevin" className="w-52" />
                    <h4 className="text-2xl font-bold">Kevin Wood</h4>
                    <span>Lead Developer</span>
                    <a
                        href="https://www.linkedin.com/in/kevin-wood-dc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-2"
                    >
                        <BsLinkedin className="text-2xl hover:text-gray-300 cursor-pointer" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
