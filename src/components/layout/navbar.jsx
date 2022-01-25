import React, { useEffect, useState } from "react";
import Whitepaper from "../../documents/whitepaper.pdf";
import LogoText from "../../images/logoText.png";
import { Fade as Hamburger } from "hamburger-react";
import NavbarResponsive from "./navbar-responsive";
import { useScrollBlock } from "../../hooks/useScrollBlock";
export const navItems = [
    {
        title: "home",
        link: "/",
    },
    {
        title: "about",
        link: "#about",
    },
    {
        title: "tokenomics",
        link: "#tokenomics",
    },
    {
        title: "roadmap",
        link: "#roadmap",
    },
    {
        title: "team",
        link: "#team",
    },
];

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    useEffect(() => {
        isOpen ? blockScroll() : allowScroll();
    }, [isOpen, blockScroll, allowScroll]);

    return (
        <header className="flex items-center justify-between py-5 max-w-screen-xl mx-auto px-5 lg:px-0  ">
            <div className="ml-2">
                <img src={LogoText} alt="Logo" className="lg:w-80 w-96 -ml-5" />
            </div>

            <nav className="lg:flex hidden items-center pr-2 ">
                <ul className="flex items-center uppercase font-extrabold space-x-5 ">
                    {navItems.map((item) => (
                        <li key={item.title} className="relative pb-1  ">
                            <a
                                href={item.link}
                                className="nav-item hover:text-slate-300 transition-all duration-200 ease-in-out  "
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
                            className="nav-item hover:text-slate-400 transition-all duration-200 ease-in-out "
                        >
                            Whitepaper
                        </a>
                    </li>
                </ul>
                <div className="flex items-center ml-5 space-x-5">
                    <div className="outline-button-wrapper">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://presale.metasquid.world",
                                    "Presale"
                                )
                            }
                            className="outline-button hover:text-slate-400"
                        >
                            Presale
                        </button>
                    </div>
                    <div className="outline-button-wrapper ">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://sweepwidget.com/view/45161-n415bois",
                                    "Whitelisting"
                                )
                            }
                            className="outline-button hover:text-slate-400"
                        >
                            Whitelisting
                        </button>
                    </div>
                </div>
            </nav>
            <div className="outline-button-wrapper lg:hidden block">
                <button className="pr-5 outline-button z-50">
                    <Hamburger size={50} toggled={isOpen} toggle={setOpen} />
                </button>
            </div>
            <NavbarResponsive setOpen={setOpen} isOpen={isOpen} />
        </header>
    );
};

export default Navbar;
