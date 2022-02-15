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
                            Rewards
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            The first few weeks before the first game launch
                            there will be automatic rewards just for holding.
                            After this period the rewards fee will go into the
                            game treasury.
                        </p>
                    </div>
                </article>
                <article className="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center p-5 gap-10 my-16 mx-auto">
                    <span className="text-gradient font-black text-9xl">
                        2%
                    </span>
                    <div className="basis-1/2 ">
                        <h3 className="text-4xl font-extrabold uppercase mb-5">
                            Buyback
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            We will manually buy the dips and add liquidity to
                            make the token strong.
                        </p>
                    </div>
                </article>
                <article className="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center p-5 gap-10 my-16 mx-auto">
                    <span className="text-gradient font-black text-9xl">
                        7%
                    </span>
                    <div className="basis-1/2">
                        <h3 className="text-4xl font-extrabold uppercase mb-5">
                            Marketing
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            This wallet will be used strategically for big and
                            effective marketing to keep the project growing.
                        </p>
                    </div>
                </article>
                <article className="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center p-5 gap-10 my-16 mx-auto">
                    <span className="text-gradient font-black text-9xl">
                        4%
                    </span>
                    <div className="basis-1/2">
                        <h3 className="text-4xl font-extrabold uppercase mb-5">
                            Game Treasury
                        </h3>
                        <p className="leading-relaxed lg:text-2xl text-3xl font-medium">
                            The Game Rewards are kept in the game treasury
                            wallets and distributed to players of the games.
                        </p>
                    </div>
                </article>
            </div>
        </motion.section>
    );
};

export default Tokenomics;
