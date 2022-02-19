import { motion } from "framer-motion";
import React from "react";
import SecuredHyper from "../../../images/partnerships/secured-hyper.svg";
const Partnerships = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
            }}
            className="flex flex-col my-20 lg:mx-10 mx-5"
        >
            <h2 className="self-center my-5 text-6xl uppercase font-black text-shadow-ms lg:text-left text-center ">
                Partnerships
            </h2>
            <div className="w-full mt-10 flex lg:flex-row flex-col justify-center items-center ">
                <img
                    src={SecuredHyper}
                    alt="Secured Hyper"
                    className="w-1/4 lg:my-0 mb-10"
                />
                <div className="lg:w-1/2 w-3/4 lg:ml-10 ml-0">
                    <h3 className="text-4xl font-extrabold uppercase mb-5 lg:text-left text-center">
                        Safe and secured
                    </h3>
                    <p className="lg:text-2xl text-3xl leading-relaxed tracking-wide  lg:text-justify text-center">
                        MetaSquid has been audited by the team of HyperChain X
                        technologies to make sure that your investment is a 100%
                        safe and secured. Our priority is your trust, that’s why
                        we choose to work with the best in the industry and will
                        continue to do so in the future.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Partnerships;
