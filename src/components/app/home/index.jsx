import React, { useEffect } from "react";

import Squid from "../../../images/squid.png";
import TokenCards from "../../../images/tokenCards.png";
const Home = () => {
    return (
        <section className="  mx-auto relative my-14 ">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
                <div className="lg:basis-1/3 basis-0">
                    <img
                        src={Squid}
                        alt="Squid"
                        className="lg:w-auto w-3/5 mx-auto relative lg:left-0 left-8"
                    />
                </div>
                <div className="lg:basis-1/2 basis-0">
                    <h2 className="uppercase text-5xl font-black mb-2 leading-normal text-shadow-ms tracking-wide lg:text-left text-center">
                        100% Rug proof and community driven metaverse games!
                    </h2>
                    <div className="flex flex-col lg:text-left text-center space-y-2 text-2xl lg:pt-0 lg:pb-0 pt-5 pb-10 ">
                        <span>Enjoy weekly prize pools,</span>
                        <span>Bitcoin Rewards and</span>
                        <span>Elimination Games</span>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 w-full z-10 relative lg:px-0 px-10">
                <div className="flex items-center justify-between gap-5 mb-5">
                    <button className="btn-bg-ms w-full py-5 text-xl  font-black uppercase rounded-xl  ">
                        Buy $SQDS
                    </button>
                    <div className="outline-button-wrapper w-full">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://t.me/metasquidworld",
                                    "_blank"
                                )
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
                <button className="btn-bg-ms w-full py-5 text-xl  font-black uppercase rounded-xl  ">
                    View contract
                </button>
            </div>
            <div className="relative lg:block hidden  z-0 shadow-cards ">
                <img
                    src={TokenCards}
                    alt="Token Cards"
                    className="w-3/5 absolute right-20 lg:-top-60 -top-20 z-0 mask-cards "
                />
            </div>
        </section>
    );
};

export default Home;
