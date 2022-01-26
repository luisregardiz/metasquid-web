import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Whitepaper from "../../documents/whitepaper.pdf";
import { navItems } from "./navbar";

const NavbarResponsive = ({ setOpen, isOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setOpen((prev) => !prev)}
                    className="bg-meta-dark-100 absolute top-0 left-0 h-full min-h-screen w-full z-20"
                >
                    <nav className="w-full h-screen flex flex-col items-center  justify-center">
                        <ul className="space-y-10">
                            {navItems.map((item) => (
                                <li key={item.title}>
                                    <a
                                        href={item.link}
                                        className="uppercase font-extrabold text-7xl  hover:text-slate-400 transition-all duration-200 ease-in-out"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                            <li className="relative pb-1  ">
                                <a
                                    href={Whitepaper}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="uppercase font-extrabold text-7xl  hover:text-slate-400 transition-all duration-200 ease-in-out"
                                >
                                    Whitepaper
                                </a>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavbarResponsive;
