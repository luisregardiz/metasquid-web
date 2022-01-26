import { motion } from "framer-motion";
import React from "react";

const Tokenomics = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
            }}
            id="tokenomics"
            className="mt-20 py-24 lg:mx-10 mx-10 flex flex-col "
        >
            <h2 className="self-center my-5 text-6xl uppercase font-black text-shadow-ms">
                Tokenomics
            </h2>
            <div>
                <article className="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center p-5 gap-10 my-16 mx-auto">
                    <span className="text-gradient font-black text-9xl">
                        2%
                    </span>
                    <div className="basis-1/2">
                        <h3 className="text-4xl font-extrabold uppercase mb-5">
                            BUSD PRIZE POOL
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            Every week there will be a winner in our community
                            that will WIN the whole BUSD pool! The more trading
                            volume there is, the bigger the POOL gets!
                        </p>
                    </div>
                </article>
                <article className="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center p-5 gap-10 my-16 mx-auto">
                    <span className="text-gradient font-black text-9xl">
                        3%
                    </span>
                    <div className="basis-1/2 ">
                        <h3 className="text-4xl font-extrabold uppercase mb-5">
                            BUYBACK
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            We will manually buy the dips and add liquidity to
                            make the token strong.
                        </p>
                    </div>
                </article>
                <article className="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center p-5 gap-10 my-16 mx-auto">
                    <span className="text-gradient font-black text-9xl">
                        5%
                    </span>
                    <div className="basis-1/2">
                        <h3 className="text-4xl font-extrabold uppercase mb-5">
                            BTCb REWARDS
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            HODLers will be rewarded in BTCb just for holding
                            $SQDS, meaning you'll automatically earn a passive
                            income!
                        </p>
                    </div>
                </article>
                <article className="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center p-5 gap-10 my-16 mx-auto">
                    <span className="text-gradient font-black text-9xl">
                        5%
                    </span>
                    <div className="basis-1/2">
                        <h3 className="text-4xl font-extrabold uppercase mb-5">
                            MARKETING
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            This wallet will be used strategically for big and
                            effective marketing to keep the project growing.
                        </p>
                    </div>
                </article>
                <div className="bg-meta-dark-100 py-10 rounded-lg">
                    <span className="text-2xl font-extrabold italic inline-flex mx-10 text-center leading-relaxed ">
                        * More info on the weekly BUSD Pool rewards will be
                        available in our telegram chat. This will also be in the
                        form of a fun Squid-Games-themed community event. There
                        will be different rules every week.
                    </span>
                </div>
            </div>
        </motion.section>
    );
};

export default Tokenomics;
