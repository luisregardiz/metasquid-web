import { motion } from "framer-motion";
import React from "react";

const Community = () => {
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
                Community elimination game
            </h2>
            <span className="text-2xl text-center leading-relaxed tracking-wide mt-10">
                This will be our first community Squid game. When we get listed
                on CMC, selling will be put on HOLD for 24 hours. This will
                increase the price a lot because there will be no sells. Our
                Telegram chat will be muted during this event, and all rules
                will be on our website, whitepaper and socials.
            </span>
        </motion.section>
    );
};

export default Community;
