import React from "react";
import Hero from "../components/homeComp/Hero";
import State from "../components/homeComp/State";
import Banner from "../components/homeComp/Banner/Banner";
import BannerSec from "../components/homeComp/Banner/BannerSec";
import BannerSimple from "../components/homeComp/Banner/BannerSimple";
import CTA from "../components/homeComp/CTA";

const Home = () => {
    return (
        <div>
            <section className="bg-slate-100 body-font">
                <Hero />
            </section>

            <section className="container h-1/2 md:h-32 p-3">
                <State />
            </section>

            <section className="text-gray-600 body-font">
                <Banner />
                <BannerSec />
            </section>

            <div className="bg-primary">
                <BannerSimple />
            </div>

            <section className="text-gray-600 body-font">
                <CTA />
            </section>
        </div>
    );
};

export default Home;