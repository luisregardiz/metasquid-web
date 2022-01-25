import React from "react";

const Presale = () => {
    return (
        <section className="lg:mx-auto  lg:mt-80 mt-20  z-20 relative mx-10 ">
            <div className="wrapper-presale ">
                <div className="presale-card relative">
                    <div className="flex flex-col mt-20 mb-32">
                        <h2 className="text-shadow-ms text-6xl uppercase mb-10 font-black">
                            Presale Will starts in
                        </h2>
                        <span className="text-meta-cyan text-5xl font-bold">
                            6d:13h:39m:30s
                        </span>
                    </div>
                    <button
                        onClick={() =>
                            window.open(
                                "https://sweepwidget.com/view/45161-n415bois",
                                "Presale Whitelisting"
                            )
                        }
                        className="btn-bg-ms absolute bottom-0 w-full left-0 py-4 uppercase text-xl font-black"
                    >
                        Presale Whitelisting
                    </button>
                </div>
            </div>
            <div className="wrapper-presale my-10">
                <div className="presale-card relative">
                    <div className="flex flex-col mb-20 mt-10">
                        <h2 className="text-shadow-ms text-6xl uppercase mb-10 font-black">
                            Weekly prize pool
                        </h2>
                        <span className="text-meta-cyan text-5xl font-bold">
                            Will start after the presale has ended
                        </span>
                    </div>
                    <div className="btn-bg-ms  py-6  rounded-lg uppercase font-black">
                        <span className="text-6xl">0.00 BUSD</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presale;
