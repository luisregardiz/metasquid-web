import React from "react";
import FallingSquids from "../../../images/games/fallingsquids.png";
import SquidWorld from "../../../images/games/squidworld.png";
import RedLightGreenLight from "../../../images/games/redlightgreenlight.png";
import SquidRunner from "../../../images/games/squidrunner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
const Games = () => {
    return (
        <section className="flex flex-col">
            <h2 className="self-center my-10 text-6xl uppercase font-black text-shadow-ms">
                Let the games begin!
            </h2>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                className=" mt-10"
            >
                <SwiperSlide>
                    <img src={FallingSquids} alt="Falling Squids" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SquidWorld} alt="Squid World" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RedLightGreenLight} alt="Red Light Green Light" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SquidRunner} alt="Squid Runner" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Games;
