import React from "react";
import LogoText from "../../images/logoTextFooter.png";
import Telegram from "../../images/icons/share.png";
import Twitter from "../../images/icons/twitter.png";
import Facebook from "../../images/icons/facebook.png";
import Medium from "../../images/icons/medium.png";
import Youtube from "../../images/icons/youtube.png";
import Discord from "../../images/icons/discord.png";
import Instagram from "../../images/icons/instagram.png";

const Footer = () => {
    return (
        <footer className="bg-meta-footer pb-20 w-full">
            <div className="max-w-screen-lg mx-auto flex flex-col px-10">
                <img src={LogoText} alt="Logo Text" className="w-3/4 mx-auto" />
                <div className="flex items-center gap-5 pb-10">
                    <button className="btn-bg-ms w-full py-5 text-xl  font-black uppercase rounded-xl  ">
                        Buy $SQDS
                    </button>

                    <div className="outline-button-wrapper w-full">
                        <button
                            onClick={() =>
                                window.open("https://t.me/metasquidworld")
                            }
                            className="outline-button  w-full  "
                            style={{
                                padding: "16px",
                                fontSize: "1.25rem",
                                fontWeight: "900",
                            }}
                        >
                            Telegram
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-3xl font-bold">Follow Us</h4>
                    <div className="h-1 w-32 bg-black my-10 btn-bg-ms"></div>
                    <div>
                        <ul className="flex items-center space-x-4">
                            <li>
                                <a
                                    href="https://t.me/metasquidworld"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Telegram}
                                        alt="Telegram"
                                        className="w-12 item-footer rounded-full"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/Metasquidworld"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Twitter}
                                        alt="Twitter"
                                        className="w-12 item-footer rounded-full"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/Meta-Squid-104192828790530/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Facebook}
                                        alt="Facebook"
                                        className="w-12 item-footer rounded-full"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://medium.com/@Metasquidworld"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Medium}
                                        alt="Medium"
                                        className="w-12 item-footer rounded-full"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCaoXCSnjN19H7R_atFgU0Yg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Youtube}
                                        alt="Youtube"
                                        className="w-12 item-footer rounded-full"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/mPmGtwJDHs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Discord}
                                        alt="Discord"
                                        className="w-12 item-footer rounded-full"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/metasquidworld/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Instagram}
                                        alt="Instagram"
                                        className="w-12 item-footer rounded-full"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
