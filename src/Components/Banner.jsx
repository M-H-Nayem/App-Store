import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-200 px-[10%] py-10 ">
      <div className="hero  bg-white rounded-2xl ">
        <div className="hero-content flex-col lg:flex-row-reverse p-0">
          <img src="S.png" className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold mb-3">
              Explore Your Favourite and Useful App Here
            </h1>
            <p className="py-6 text-xl mb-3">
              Explore a world of powerful apps designed to boost productivity,
              spark creativity, and enhance everyday life. Whether you're
              gaming, learning, or staying organized — it's all just a click
              away.
            </p>
            <button className="btn bg-orange-300 border-none text-xl  rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
