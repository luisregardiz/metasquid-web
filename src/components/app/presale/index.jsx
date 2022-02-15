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
                            00d:00h:00m:00s
                        </span>
                    </div>
                    <button className="btn-bg-ms absolute bottom-0 w-full left-0 py-4 uppercase text-xl font-black">
                        Presale Whitelisting
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Presale;
