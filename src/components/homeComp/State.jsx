import React from "react";
import CountUp from "react-countup";

const State = () => {
    return (
        <div className="grid grid-cols-3 divide-x divide-slate-700 mx-auto w-full md:max-w-[800px] shadow-lg bg-white -translate-y-14 md:-translate-y-16 my-4 p-4 md:p-8">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-sm sm:text-lg md:text-3xl font-bold text-black/80">
                    <CountUp end={200} suffix="+" duration={2.75} />
                </h1>
                <p>Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-sm sm:text-lg md:text-3xl font-bold text-black/80">
                    <CountUp end={200} suffix="+" duration={2.75} />
                </h1>
                <p>Products</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-sm sm:text-lg md:text-3xl font-bold text-black/80">
                    <CountUp end={200} suffix="+" duration={2.75} />
                </h1>
                <p>Subscribers</p>
            </div>
        </div>
    );
};

export default State;
